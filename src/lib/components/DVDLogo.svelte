<script>
	import { resize } from '$lib/js/actions/resize';
	import { clamp, Loop } from 'jthawme-utils';
	import { getContext, onMount } from 'svelte';

	/** @type {{ colors?: string[], text?: string }} */
	let { colors = ['#0081a7', '#00afb9', '#fed9b7', '#f07167'] } = $props();

	const dimensions = getContext('dimensions');

	let bounds = $derived(dimensions());

	let bounceIdx = $state(0);

	/** @type {Partial<DOMRect>} */
	let logoDimensions = $state({ width: 0, height: 0 });

	let position = $state({ x: 0, y: 0 });
	let acceleration = $state({ x: 1, y: 1 });

	function frame() {
		position.x += acceleration.x;
		position.y += acceleration.y;

		if (!bounds) {
			return;
		}

		if (position.x > bounds.width - (logoDimensions.width ?? 0) || position.x < 0) {
			position.x = clamp(position.x, 1, bounds.width - 1);
			acceleration.x *= -1;
			bounceIdx = (bounceIdx + 1) % colors.length;
		}

		if (position.y > bounds.height - (logoDimensions.height ?? 0) || position.y < 0) {
			position.y = clamp(position.y, 1, bounds.height - 1);
			acceleration.y *= -1;
			bounceIdx = (bounceIdx + 1) % colors.length;
		}
	}

	onMount(() => {
		const engine = Loop(frame);
		engine.start();

		return () => engine.stop();
	});
</script>

<div
	class="logo"
	style="--x: {position.x}px; --y: {position.y}px; color: {colors[bounceIdx]}"
	use:resize={(r) => (logoDimensions = r)}
>
	JT
</div>

<style lang="scss">
	.logo {
		position: absolute;

		font-size: 10vw;
		font-weight: bold;
		font-style: italic;
		line-height: 0.65;

		top: 0;
		left: 0;

		padding: 0 0.08em 0.05em 0;

		transform: translate3d(var(--x), var(--y), 0);
	}
</style>
