export default function ticker() {
    return ([timepoint], transition) => {
        // TODO: figure out why this is throwing a [ Uncaught (in promise) ] error
        transition.end().then(() => {
            this.layout.ticker.text(`Day ${timepoint}`);
            this.active = false;
        });
    };
}
