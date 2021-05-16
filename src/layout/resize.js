import getDimensions from './getDimensions';

export default function resize() {
    this.settings.dimensions = getDimensions.call(this, this.layout.main);
    this.settings.width = this.settings.dimensions.width;
    this.settings.height = this.settings.dimensions.height;
    this.plots.forEach((plot) => {
        plot.settings.width = Math.floor(this.settings.width * this.settings.splitFactor);
        plot.settings.xRange =
            plot.i % 2 === 0
                ? [plot.settings.width - plot.settings.margin.right, plot.settings.margin.left]
                : [plot.settings.margin.left, plot.settings.width - plot.settings.margin.right];
        plot.settings.translateX =
            plot.i % 2 === 0
                ? plot.settings.width - plot.settings.margin.right
                : plot.settings.margin.left;
        plot.layout.svg
            //.attr('viewBox', [0, 0, plot.settings.width, this.settings.height]);
            .attr('width', plot.settings.width)
            .attr('height', this.settings.height);
        plot.layout.title.attr(
            'transform',
            (d) =>
                `translate(${
                    plot.settings.margin.left +
                    (plot.settings.width - plot.settings.margin.right - plot.settings.margin.left) /
                        2
                },${plot.settings.margin.top / 2})`
        );
        plot.layout.xAxisTop.call((g) =>
            g
                .select('.asp-x-axis__label')
                .attr(
                    'x',
                    plot.settings.mirror
                        ? plot.settings.width - plot.settings.margin.right - 18
                        : plot.settings.margin.left + 18
                )
        );
        plot.layout.xAxisBottom.call((g) =>
            g
                .select('.asp-x-axis__label')
                .attr(
                    'x',
                    plot.settings.mirror
                        ? plot.settings.width - plot.settings.margin.right - 18
                        : plot.settings.margin.left + 18
                )
        );

        plot.scale.x.range(plot.settings.xRange);

        plot.xAxisTop = d3
            .axisTop(plot.scale.x)
            .ticks(this.settings.width / 160)
            .tickSizeOuter(0)
            .tickSizeInner(
                -(this.settings.height - this.settings.margin.top - this.settings.margin.bottom)
            );

        plot.xAxisBottom = d3
            .axisBottom(plot.scale.x)
            .ticks(this.settings.width / 160)
            .tickSizeOuter(0)
            .tickSizeInner(0);

        plot.scale.y.range([
            this.settings.height - this.settings.margin.bottom,
            this.settings.margin.top,
        ]);
    });
}
