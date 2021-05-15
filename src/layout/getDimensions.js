export default function getDimensions(container) {
    const width = container.node().clientWidth - 20;
    const height = (((width * screen.height) / screen.width) * 3) / 4;

    return {
        width,
        height,
    };
}
