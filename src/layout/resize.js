import getDimensions from './getDimensions';

export default function resize() {
    this.settings.dimensions = getDimensions.call(this, this.layout.main);
    this.plots.forEach((plot) => {
        plot.layout.svg
            .attr('width', this.settings.dimensions.width)
            .attr('height', this.settings.dimensions.height);
    });
}
