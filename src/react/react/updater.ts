import { Component } from './component';
import { State } from './type';

export interface Updater {
	enqueueForceUpdate(ins: Component, cb: () => void, name: string);
	enqueueSetState(ins: Component, state: State, cb: () => void, name: string);
	enqueueReplaceState(ins: Component, state: State, cb: () => void, name: string);
	isMounted(): boolean;
}

export const ReactNoopUpdateQueue: Updater = {
	isMounted() {
		return false;
	},

	enqueueSetState(ins, state, cb, name) {

	},

	enqueueForceUpdate(ins, cb, name) {

	},

	enqueueReplaceState(ins, state, cb, name) {

	},
};
