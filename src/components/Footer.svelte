<script>
  import liIcon from '$lib/images/linkedin.svg';
  import githubIcon from '$lib/images/github.svg';
  import emailIcon from '$lib/images/paper-plane.svg';
  import logo from '$lib/images/final-filled-edit.svg';
</script>

<footer>
  <div class="container footer__container">
    <a href="/" class="logo">
      <img src={logo} />
    </a>
    <div class="footer__divider" />
    <div class="footer__links">
      <div class="footer__link">
        <a
          href="https://linkedin.com/in/courtneyring3"
          target="_blank"
          class="footer__link"
        >
          <img src={liIcon} />
          LinkedIn
        </a>
      </div>
      <div class="footer__link">
        <a
          href="https://github.com/courtneyring"
          target="_blank"
          class="footer__link"
        >
          <img src={githubIcon} />
          Github
        </a>
      </div>
      <div class="footer__link">
        <a href="mailto:courtneyring3@gmail.com" class="footer__link">
          <img src={emailIcon} />
          Email
        </a>
      </div>
    </div>
  </div>
</footer>

<style lang="scss">
  footer {
    background-color: $color-blue-medium;
    display: block;
    position: relative;
    z-index: 3;
  }

  .footer__container {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 300px;
    padding-top: 30px;
    padding-bottom: 70px;
  }
  .footer__initial {
    color: white;
    font-size: 35px;
    margin-bottom: 20px;
  }

  .footer__links {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  }

  .footer__link {
    align-items: center;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    font-size: 18px;
    justify-content: flex-end;
    text-align: center;
    // width: 40px;

    & > img {
      filter: invert(100%) sepia(3%) saturate(7488%) hue-rotate(305deg)
        brightness(107%) contrast(103%);
      margin-bottom: 10px;
      width: 25px;
    }
  }

  .footer__link:hover > img {
    filter: invert(60%) sepia(8%) saturate(1157%) hue-rotate(184deg)
      brightness(88%) contrast(93%);
  }

  .footer__divider {
    background-color: white;
    height: 2px;
    margin-bottom: 50px;
    width: 100px;
  }

  .logo {
    margin-bottom: 30px;
    width: 50px;
    & > img {
      height: auto;
      width: 100%;
      filter: invert(100%) sepia(63%) saturate(2%) hue-rotate(278deg) brightness(111%) contrast(101%);
    }
  }

  @media (min-width: 768px) {
    .footer__container {
      padding-top: 70px;
    }

    .footer__links {
      flex-direction: row;
      width: initial;
    }

    .footer__divider {
      width: 200px;
      margin-bottom: 60px;
    }

    .footer__link {
      margin-bottom: 0px;
      width: 200px;
      & > img {
        width: 40px;
      }
    }

    .logo {
      width: 100px;
    }
  }
</style>
