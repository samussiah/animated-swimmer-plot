import id from './set/id';
import visit from './set/visit';
import result from './set/result';

export default function set() {
    return {
        id: id.call(this),
        visit: visit.call(this),
        ...result.call(this),
    };
}
