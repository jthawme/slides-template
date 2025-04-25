---
layout: full
text: Starting Soon
---

<script>
	import DVDLogo from '$lib/components/DVDLogo.svelte';
	import BlinkText from '$lib/components/common/BlinkText.svelte';
	import Text from '$lib/components/common/Text.svelte';
</script>

<DVDLogo/>

<BlinkText>
	<Text level="three" upper bold>{text}</Text>
</BlinkText>
