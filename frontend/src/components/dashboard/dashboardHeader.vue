<template>
  <header>
    <div
      id="navbar"
      class="container">
      <a href="#">
        <img
          id="logo"
          src="../../assets/logo.svg"
          alt="Logo Ramzes">
        <p id="ramzes">
        <strong>Ramzes</strong>.io</p>
      </a>
      <nav>
        <a href="#">
        <strong>Explore</strong> ICOs</a>
        <a href="#">
        <strong>Submit</strong> ICOs</a>
        <a href="#">
        <strong>Token</strong> Market</a>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'DashboardHeader',
};
</script>

<style scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 85px;
  background-color: rgba(10, 10, 10, 0.7);
  color: #fff;
  z-index: 100;
}

.container {
  position: relative;
  margin: 0 auto;
  width: 1300px;
  height: auto;
}

#navbar {
  height: 85px;
}
#navbar a {
  display: inline-block;
  margin-left: 40px;
  padding: 5px;
  color: #fff;
  text-decoration: none;
  font-size: 24px;
}
#navbar a :hover {
  opacity: 0.7;
}

#logo,
#ramzes,
nav {
  position: absolute;
  top: 50%;
  -webkit-transform: translate(0, -50%);
  -moz-transform: translate(0, -50%);
  -ms-transform: translate(0, -50%);
  -o-transform: translate(0, -50%);
  transform: translate(0, -50%);
}

#logo {
  left: 0;
  width: 60px;
  height: 60px;
}

#ramzes {
  margin: 0;
  left: 77px;
  font-size: 33px;
}

nav {
  right: 0;
}
</style>

