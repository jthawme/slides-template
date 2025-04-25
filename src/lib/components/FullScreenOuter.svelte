<script>
	import { resize } from '$lib/js/actions/resize';
	import { setContext } from 'svelte';

	let { children } = $props();

	/** @type {DOMRect | null} */
	let dimensions = $state(null);

	/**
	 *
	 * @param {DOMRect} rect
	 */
	function onResize(rect) {
		dimensions = rect;
	}

	setContext('dimensions', () => dimensions);
</script>

<main use:resize={onResize}>
	{@render children(dimensions)}
</main>

<style lang="scss">
	main {
		display: flex;

		align-items: center;
		justify-content: center;

		width: 100vw;
		height: 100dvh;
	}
</style>
