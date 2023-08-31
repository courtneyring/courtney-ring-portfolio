<script>
	import { page } from '$app/stores';
</script>

<header>
	<div class="corner">
		
	</div>

	<nav>
		<ul>
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">About</a>
			</li>
			<li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
				<a href="/about">Work</a>
			</li>
			<li aria-current={$page.url.pathname.startsWith('/work') ? 'page' : undefined}>
				<a href="/work">Contact</a>
			</li>
		</ul>

	</nav>


</header>

<style lang='scss'>


	header {
    background-color: $color-blue-dark;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: toRem(80);
    position: sticky;
    top: 0;
    width: 100%;
    z-index: 4;
  }

  nav {
    padding: toRem(10) toRem(30);
  }

  nav > ul {
    display: flex;
    list-style-type: none;
  }

  li {
    margin: toRem(0) toRem(10);
  }

  a {
    color: white;
    text-decoration: none;
  }

  .corner {
    visibility: hidden;
  }
</style>
