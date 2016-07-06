<template>
  <h1>Bravo !</h1>
  <p>Nav: <a v-link="{ path: '/' }">Home</a>, <a v-link="{ path: '/hi' }">Hello</a></p>
  <router-view></router-view>
</template>

<script>
export default {

}
</script>

<style lang='sass' scoped>
h1 {
  color: green;
}
</style>
