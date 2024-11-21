<!-- src/App.vue -->
<template>
  <div id="app">
    <header>
      <h1>Lista de Compras do Supermercado</h1>
      <nav>
        <router-link to="/" exact>Home</router-link>
        <router-link to="/add">Adicionar Item</router-link>
        <router-link to="/list">Listar Itens</router-link>
        <router-link to="/suggestions">Sugestões de Itens</router-link>
      </nav>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
header {
  background-color: #42b983;
  padding: 20px;
  color: white;
}
nav {
  margin-top: 10px;
}
nav a {
  margin: 0 15px;
  color: white;
  text-decoration: none;
}
nav a.router-link-active {
  font-weight: bold;
  color: #fff;
  background-color: #369a7c;
  padding: 5px 10px;
  border-radius: 5px;
}
</style>
