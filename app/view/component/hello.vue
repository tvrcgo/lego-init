<template>
  <h1>Vue Component</h1>
  <p>{{ hi }}</p>
</template>

<script>
export default {
  data() {
    return {
      hi: 'hi vue~'
    }
  }
}
</script>

<style lang="sass" scoped>
h1 {
  font-size: 20px;
}
</style>
