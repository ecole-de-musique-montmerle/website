<script lang="ts">
	import '../app.css';
	import SiteFooter from '$lib/components/SiteFooter.svelte';
	import SiteHeader from '$lib/components/SiteHeader.svelte';

	let { children } = $props();
</script>

<a class="skip-link" href="#main">Aller au contenu</a>

<SiteHeader />
<main id="main">
	{@render children()}
</main>
<SiteFooter />
