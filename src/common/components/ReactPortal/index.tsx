import { useState, useLayoutEffect } from 'react';
import { createPortal } from 'react-dom';

const createWrapperAndAppendToBody = (wrapperId: string) => {
	const wrapperElement = document.createElement('div');
	wrapperElement.setAttribute('id', wrapperId);
	document.body.appendChild(wrapperElement);
	return wrapperElement;
};

type Props = {
	children: JSX.Element;
	wrapperId: string;
};

export const ReactPortal = ({ children, wrapperId }: Props) => {
	const [wrapperElement, setWrapperElement] = useState<HTMLElement | null>(null);

	useLayoutEffect(() => {
		//if an element exists and you need to insert into it
		let element = document.getElementById(wrapperId);
		let systemCreated = false;
		// if element is not found with wrapperId or wrapperId is not provided,
		// create and append to body
		if (!element) {
			systemCreated = true;
			element = createWrapperAndAppendToBody(wrapperId);
		}
		setWrapperElement(element);

		return () => {
			// delete the programmatically created element
			if (systemCreated && element?.parentNode) {
				element.parentNode.removeChild(element);
			}
		};
	}, [wrapperId]);

	// wrapperElement state will be null on very first render.
	if (wrapperElement === null) return null;

	return createPortal(children, wrapperElement);
};

export default ReactPortal;
