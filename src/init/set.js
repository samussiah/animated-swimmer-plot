import id from './set/id';
import visit from './set/visit';
import result from './set/result';

export default function set() {
    return {
        id: id.call(this, this.data.mutated),
        visit: visit.call(this, this.data.mutated),
        ...result.call(this, this.data.mutated),
    };
}
