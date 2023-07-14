<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div id="navLinks">
    <header>
      <div class="logo">
        <a href="/">woof</a>
      </div>
      <div class="navbar">
        <div class="menu-lists">
          <router-link to="/about" id="listItems">About</router-link>
          <a href="/contact" id="listItems">Contact</a>
        </div>
        <div class="hamburger">
          <span class="line">menu</span>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  mounted() {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".menu-lists");

    hamburger.addEventListener("click", mobileMenu);

    function mobileMenu() {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
    }
  },
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  padding-top: 1rem;
  padding-left: 1.3rem;
  padding-right: 1.3rem;
}

div.logo a {
  text-decoration: none;
  font-size: 1.5rem;
  color: #3f7270;
  font-style: italic;
}

div.navbar .menu-lists {
  margin-top: 5px;
  display: flex;
  justify-content: space-between;
  grid-column-gap: 60px;
  color: #3f7270;
}

#listItems {
  text-decoration: none;
  font-size: 1.25rem;
  margin-top: 10px;
  font-weight: 700;
  color: #3f7270;
  position: relative;
}

#listItems:after {
  background: none repeat scroll 0 0 transparent;
  bottom: 0;
  content: "";
  display: block;
  height: 3px;
  left: 50%;
  position: absolute;
  background: #3f7270;
  transition: width 0.3s ease 0s, left 0.3s ease 0s;
  width: 0;
}

#listItems:hover:after {
  width: 100%;
  left: 0;
}

div.hamburger {
  display: none;
}

@media screen and (max-width: 768px) {
  header {
    display: flex;
    flex-direction: column;
    padding: 2rem;
  }

  div.logo a {
    position: absolute;
    top: 7px;
    left: 7px;
    font-size: 1.2rem;
  }

  div.navbar {
    padding-top: 4rem;
  }

  div.navbar .menu-lists {
    display: flex;
    justify-content: center;
    align-items: center;
    grid-row-gap: 60px;
  }

  #listItems {
    font-size: 1.7rem;
  }

  .menu-lists.active {
    left: 0;
  }

  div.menu-lists {
    position: fixed;
    left: -100%;
    top: 0;
    flex-direction: column;
    width: 100%;
    border-radius: 10px;
    text-align: center;
    background-color: transparent;
    backdrop-filter: blur(4px);
    opacity: 1;
    visibility: visible;
    transition: opacity 0.3s ease 0s, visibility 0.1s ease 0s,
      background-color 0s ease 0s;
    height: 110vh;
  }

  div.hamburger {
    display: block;
    position: fixed;
    top: 17px;
    right: 20px;
    z-index: 2;
    color: #3f7270;
    font-size: 1rem;
  }
}
</style>
