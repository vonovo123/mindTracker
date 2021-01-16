<template>
  <div>
    <h1>Things</h1>
    <p>
      <router-link :to="{ name: 'thing', params: { index: '1' } }"
        >First Thing</router-link
      >
    </p>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>
