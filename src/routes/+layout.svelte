<script>
  import Nav from '../components/Nav.svelte';
  import Footer from '../components/Footer.svelte';
	import './styles.scss';
</script>

<div class="app">
	<!-- <Nav /> -->

	<main>
		<slot />
	</main>

	<Footer />
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

</style>
