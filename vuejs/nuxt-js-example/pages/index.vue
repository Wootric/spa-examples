<template>
  <section class="container">
    <div>
      <h1 class="title">
        WOOTRIC
      </h1>
      <h2 class="subtitle">
        <HelloWootric/>
      </h2>
    </div>
  </section>
</template>

<script>
import HelloWootric from '~/components/HelloWootric.vue'

export default {
  components: {
    HelloWootric
  }
}
</script>

<style>

.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
</style>
