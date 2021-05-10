export default function id(data) {
    const set = new Set(data.map((d) => d.id));

    return set;
}
