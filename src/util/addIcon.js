export default function addIcon(parent, icon) {
    const maxDimension = Math.max(icon[0], icon[1]);
    const scale = this.settings.buttonSize/Math.max(icon[0], icon[1]);
    const diffWidth = this.settings.buttonSize - icon[0]*scale;
    const diffHeight = this.settings.buttonSize - icon[1]*scale;
    const path = parent.append('svg')
        .attr('width', `${this.settings.buttonSize}px`)
        .attr('height', `${this.settings.buttonSize}px`)
        .append('g')
        .append('path')
        .attr('transform', `translate(${diffWidth/2},${diffHeight/2}) scale(${scale})`)
        .attr('d', icon[4]);

    return path;
}
