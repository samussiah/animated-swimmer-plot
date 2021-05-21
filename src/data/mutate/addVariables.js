export default function addVariables(datum) {
    // Define additional time units.
    datum.week = datum.timepoint / 7;
    datum.month = datum.timepoint / (365.25 / 12);
    datum.year = datum.timepoint / 365.25;
}
