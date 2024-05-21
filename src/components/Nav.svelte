<script>
  import { onDestroy, onMount } from 'svelte';
  import { browser } from '$app/environment';
  import { page } from '$app/stores';
  import logo from '$lib/images/final-filled-edit.svg';

  let lastScrollY = browser && window.scrollY;
  $: direction = 'up';

  const updateScrollDirection = () => {
    const scrollY = window.scrollY;
    if (scrollY - lastScrollY !== 0) {
      direction = scrollY > lastScrollY ? 'down' : 'up';
    }
    lastScrollY = scrollY > 0 ? scrollY : 0;
  };

  onMount(() => {
    browser && window.addEventListener('scroll', updateScrollDirection);
  });

  onDestroy(() => {
    browser && window.removeEventListener('scroll', updateScrollDirection);
  });
</script>

<header class={direction == 'down' && 'hide'}>
  <a href="/" class="logo" aria-label='Return to Home'>
    <img src={logo} alt='CR Logo'/>
  </a>

  <nav>
    <ul>
      <li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
        <a href="/about">About</a>
      </li>
      <li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
        <a href="/work">Work</a>
      </li>
      <!-- <li aria-current={$page.url.pathname.startsWith('/work') ? 'page' : undefined}>
				<a href="/work">Contact</a>
			</li> -->
    </ul>
  </nav>
</header>

<style lang="scss">
  header {
    align-items: center;
    background-color: transparent;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 80px;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 4;
    transition: 0.3s ease-in-out margin-top;

    &.hide {
      margin-top: -80px;
    }
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

  .logo {
    height: 60%;
    padding-left: 20px;
  }

  img {
    height: 100%;
    width: auto;
    filter: invert(100%) sepia(63%) saturate(2%) hue-rotate(278deg)
      brightness(111%) contrast(101%);
  }

  // .corner {
  //   visibility: hidden;
  // }
</style>
