export default function ticker(plot) {
    return ([timepoint], transition) => {
        // TODO: figure out why this is throwing a [ Uncaught (in promise) ] error
        transition.end().then(() => {
            plot.layout.ticker.text(`Day ${timepoint}`);
        });
    };
}
