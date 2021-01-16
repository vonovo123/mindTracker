<template>
  <!-- #app에 Vue instance가 마운트되었습니다 -->
  <div id="app">
    <div id="nav">
      <!--router-link : router에 명시된 route Path에 따라 컴포넌트를 router-view에 렌더링합니다. -->
      <router-link :to="{ name: 'home' }">Home</router-link> |
      <router-link :to="{ name: 'things' }">Things</router-link> |
      <router-link :to="{ name: 'register' }">Register</router-link>
    </div>
    <!--router-view : router에 명시된 route Path에 따라 변경된 컴포넌트가 router-view에 렌더링됩니다. -->
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
