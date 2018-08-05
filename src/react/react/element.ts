import { Key, Props, ReactType, Ref } from './type';

export class ReactElement {
	$$typeof: ReactType.REACT_ELEMENT_TYPE;

	constructor(
		public type: string,
		public key: Key,
		public ref: Ref,
		public props: Props,
	) { }
}

export interface ElementConfig {
	key: Key;
	ref: Ref;
	props: Props;
}

export function createElememnt(type: string, config: ElementConfig, ...children: ReactElement[]) {
	const { key, ref, props } = config;
	const _props = { ...props, ...config, children };
	return new ReactElement(type, key, ref, _props);
}

export function cloneElement(element: ReactElement, config: ElementConfig, ...children: ReactElement[]) {
	const { type, key, ref, props } = element;

	const _props = { ...props, ...config, ...config.props };

	if (props.children) _props.children = props.children;
	else _props.children = children;

	return new ReactElement(type, config.key || key, config.ref || ref, _props);
}
