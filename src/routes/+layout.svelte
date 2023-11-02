<script>
  import {Nav, Footer} from '../components/index.js';
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
    
	}

  main {
    max-width: 2000px;
    margin: 0 auto;
    width: 100%;
  }

</style>
