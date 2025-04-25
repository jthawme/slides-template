<script>
	/** @type {{level: 'one' | 'two' | 'three' | 'four', upper?: boolean, bold?: boolean, italic?: boolean, children: import('svelte').Snippet}} */
	let { level = 'one', upper, bold, italic, children } = $props();
</script>

<span class:upper class:bold class:italic class="level-{level}">{@render children()}</span>

<style lang="scss">
	span {
		display: contents;
	}

	.level-one {
		font-size: 6vw;
	}

	.level-two {
		font-size: 4vw;
	}

	.level-three {
		font-size: 2vw;
	}

	.level-four {
		font-size: 1vw;
	}

	.upper {
		text-transform: uppercase;
	}

	.bold {
		font-weight: bold;
	}

	.italic {
		font-style: italic;
	}
</style>
