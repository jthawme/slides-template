<script>
	import FullScreenOuter from '../FullScreenOuter.svelte';

	let { children } = $props();
</script>

<FullScreenOuter>
	{@render children()}
</FullScreenOuter>
