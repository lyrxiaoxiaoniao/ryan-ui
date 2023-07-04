<template>
  <ryan-button :plain="true" @click="openHTML">Use HTML String</ryan-button>
</template>

<script lang="ts" setup>
import { RyanMessage } from 'ryan'

const openHTML = () => {
  RyanMessage({
    dangerouslyUseHTMLString: true,
    message: '<strong>This is <i>HTML</i> string</strong>',
  })
}
</script>
