export default function result() {
    const set = [...new Set(this.data.mutated.map((d) => `${d.result_order}|${d.result}`)).values()]
        .map((d) => [+d.split('|')[0], d.split('|')[1]])
        .sort(([a], [b]) => a - b)
        .map(([, result]) => result);

    return set;
}
