<template>
  <ryan-button :plain="true" @click="open">Show message</ryan-button>
  <ryan-button :plain="true" @click="openVn">VNode</ryan-button>
</template>

<script lang="ts" setup>
import { h } from 'vue'
import { RyanMessage } from 'ryan'
const open = () => {
  RyanMessage('this is a message.')
}

const openVn = () => {
  RyanMessage({
    message: h('p', null, [
      h('span', null, 'Message can be '),
      h('i', { style: 'color: teal' }, 'VNode'),
    ]),
  })
}
</script>
