import { ReactElement } from './element';

export enum ReactType {
	REACT_ELEMENT_TYPE,
}

export interface Props {
	children?: ReactElement[];
	[key: string]: any;
}

export type Key = string;

export type Ref = string;

export type Context = any;

export type State = any;
