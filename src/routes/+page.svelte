<script>
	import JtButton from '$lib/components/JTButton.svelte';
	import Markdown from '$lib/components/Markdown.svelte';
	import Seo from '$lib/components/SEO.svelte';

	import Content from '$slides/test.md';
</script>

<Seo />

<Markdown content={`# Waddup Playboy`} />

<JtButton to="https://jthaw.me">Go home</JtButton>

<Content />
