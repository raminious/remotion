// @ts-expect-error react
globalThis.IS_REACT_ACT_ENVIRONMENT = true;
import {queries, render, RenderOptions} from '@testing-library/react';
import {FC, ReactElement} from 'react';

const HelloWorld: FC = () => {
	return <div>Hello World</div>;
};

const AllTheProviders: FC<{
	children: React.ReactNode;
}> = ({children}) => {
	// overwriting console.error console does not gets poluted with all the errors
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	window.console.error = () => {};
	return <div>{children}</div>;
};

const customRender = (
	ui: ReactElement,
	options?: Omit<RenderOptions, 'queries'>
) => render<typeof queries>(ui, {wrapper: AllTheProviders, ...options});

export * from '@testing-library/react';
export {customRender as render, HelloWorld};
