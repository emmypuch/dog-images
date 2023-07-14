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
          <span>menu</span>
        </div>
      </div>
    </header>
  </div>
</template>

<script></script>

<style>
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
</style>
