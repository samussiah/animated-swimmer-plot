export default function result() {
    const set = [
        ...new Set(
            this.data.mutated.map((d) => `${d.result_order}|${d.result}|${d.result_color}`)
        ).values(),
    ]
        .map((d) => [+d.split('|')[0], d.split('|')[1], d.split('|')[2]])
        .sort(([a], [b]) => a - b);

    const result = set.map(([result_order, result, result_color]) => result);
    const result_color = set.map(([result_order, result, result_color]) => result_color);

    return {
        result,
        result_color,
    };
}
