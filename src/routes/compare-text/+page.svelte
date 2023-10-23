<script>
	import TextCompare from '../../components/TextCompare.svelte';
</script>

<svelte:head>
	<title>
		Compare text
	</title>
</svelte:head>

<div class="box">
	<TextCompare />
</div>

<style>
	.box {
		display: grid;
		align-items: center;
		place-items: center;
		width: 100%;
		height: 100vh;
	}
</style>
