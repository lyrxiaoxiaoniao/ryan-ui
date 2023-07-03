<template>
  <button class="ca"><slot /></button>
</template>

<script lang="ts" setup>
defineOptions({
  name: 'RyanButton',
})
</script>
<style>
.ca {
  background-color: aquamarine;
}
</style>
