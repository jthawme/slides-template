/**
 * @typedef {(metrics: DOMRect) => void} Handler
 *
 * @param {HTMLElement} node
 * @param {Handler} handler
 */
export const resize = (node, handler) => {
	/** @type {ResizeObserverCallback} */
	const onResize = (entries) => {
		handler(entries[0].contentRect);
	};

	const io = new ResizeObserver(onResize);
	io.observe(node);

	handler(node.getBoundingClientRect());

	return {
		destroy() {
			io.disconnect();
		}
	};
};
