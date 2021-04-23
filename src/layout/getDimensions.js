export default function getDimensions(container) {
    const width = container.node().clientWidth;
    const height = container.node().clientHeight;

    return {
        width,
        height,
    };
}
