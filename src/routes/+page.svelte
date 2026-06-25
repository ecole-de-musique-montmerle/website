<script lang="ts">
	import Announcement from '$lib/components/Announcement.svelte';
	import Audiences from '$lib/components/Audiences.svelte';
	import Ensembles from '$lib/components/Ensembles.svelte';
	import Gallery from '$lib/components/Gallery.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import NewsPreview from '$lib/components/NewsPreview.svelte';
	import Story from '$lib/components/Story.svelte';
</script>

<svelte:head>
	<title>École de Musique 3 Rivières, Montmerle-sur-Saône</title>
	<meta
		name="description"
		content="École de musique associative à Montmerle-sur-Saône, depuis 1997. Cours individuels, chorales et ensembles, pour enfants, ados et adultes."
	/>
</svelte:head>

<Hero />
<Audiences />
<Announcement />
<Story />
<Gallery />
<Ensembles />
<NewsPreview />
