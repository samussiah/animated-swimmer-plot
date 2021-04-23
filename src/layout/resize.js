import getDimensions from './getDimensions';

export default function resize() {
    this.settings.dimensions = getDimensions.call(this, this.layout.main);
    this.layout.svg
        .attr('width', this.settings.dimensions.width)
        .attr('height', this.settings.dimensions.height);
}
