<script>
  import {Nav, Footer} from '../components/index.js';
	import './styles.scss';
</script>

<div class="app">
	<Nav />

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
