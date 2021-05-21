export default function rank(group) {
    // Define mutable rank given current view.
    group
        .sort((a, b) => a[`rank${this.settings.view}`] - b[`rank${this.settings.view}`])
        .forEach((d, i) => {
            d.rank = i;
        });
}
