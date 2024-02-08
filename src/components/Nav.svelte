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
    height: 80px;
    position: sticky;
    top: 0;
    width: 100%;
    z-index: 4;
  }

  nav {
    padding: 10px 30px;
  }

  nav > ul {
    display: flex;
    list-style-type: none;
  }

  li {
    margin: 0px 10px;
  }

  a {
    color: white;
    text-decoration: none;
  }

  .corner {
    visibility: hidden;
  }
</style>
