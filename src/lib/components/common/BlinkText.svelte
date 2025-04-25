<script>
	let { children } = $props();
</script>

<span>{@render children()}</span>

<style lang="scss">
	span {
		animation: blinker 2s step-start infinite;
	}

	@keyframes blinker {
		50% {
			opacity: 0;
		}
	}
</style>
