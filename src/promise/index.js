const PromiseState = {
    pending,
    resolved,
    rejected,
}

function Promise(exec) {
    this.state = PromiseState.pending;
    this.value = null;
    this.error = null;

    this.queue = [];

    function resolve(val) {
        if (this.state === PromiseState.pending) {
            this.value = val;
            this.state = PromiseState.resolved;
        }
    }

    function reject(error) {
        if (this.state === PromiseState.pending) {
            this.error = error;
            this.state = PromiseState.rejected;
        }
    }

    try {
        exec(resolve, reject);
    } catch (e) {
        reject(e);
    }
}

Promise.prototype.then = function(onResolve, onReject) {
    if (this.state === PromiseState.resolved) return onResolve(this.value);
    if (this.state === PromiseState.rejected) return onReject(this.error);
}