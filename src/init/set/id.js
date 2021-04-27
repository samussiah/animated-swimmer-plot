export default function id() {
    const set = new Set(this.data.mutated.map((d) => d.id));

    return set;
}
