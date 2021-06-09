import rankOverallSurvival from './groupByTimepoint/rankOverallSurvival';
import rankCurrentResponse from './groupByTimepoint/rankCurrentResponse';
import rank from './groupByTimepoint/rank';

export default function groupByTimepoint(interpolated, finalTimepoint) {
    const timepoints = d3.rollups(
        interpolated,
        (group) => {
            // Capture IDs at each timepoint.
            const groupIds = new Set(group.map((d) => d.id));

            // If ID is missing at given timepoint, add final record to given timepoint.
            finalTimepoint.forEach(([key, value]) => {
                if (groupIds.has(key) === false) group.push({ ...value });
            });

            // TODO: add overall survival rank not grouped by response.
            // Rank IDs.
            rankOverallSurvival.call(this, group);
            rankCurrentResponse.call(this, group);
            rank.call(this, group);

            return group;
        },
        (d) => d.timepoint
    );

    return timepoints;
}
