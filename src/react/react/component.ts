import { Context, Props, State } from './type';
import { ReactNoopUpdateQueue, Updater } from './updater';

export class Component {
	constructor(
		public props: Props,
		public context: Context,
		public updater: Updater = ReactNoopUpdateQueue,
	) { }

	setState(state: State, cb: () => void) {
		this.updater.enqueueSetState(this, state, cb, 'setState');
	}

	forceUpdate(cb: () => void) {
		this.updater.enqueueForceUpdate(this, cb, 'forceUpdate');
	}
}

export class PureComponent extends Component {
	isPureReactComponent = true;
	refs = {};
}
