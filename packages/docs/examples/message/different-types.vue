<template>
  <ryan-button :plain="true" @click="open2">success</ryan-button>
  <ryan-button :plain="true" @click="open3">warning</ryan-button>
  <ryan-button :plain="true" @click="open1">message</ryan-button>
  <ryan-button :plain="true" @click="open4">error</ryan-button>
  <ryan-button :plain="true" @click="closeAll">closeAll</ryan-button>
</template>

<script lang="ts" setup>
import { RyanMessage } from 'ryan'

const open1 = () => {
  RyanMessage('this is a message.')
}
const open2 = () => {
  RyanMessage({
    message: 'Congrats, this is a success message.',
    type: 'success',
  })
}
const open3 = () => {
  RyanMessage({
    message: 'Warning, this is a warning message.',
    type: 'warning',
  })
}
const open4 = () => {
  RyanMessage.error('Oops, this is a error message.')
}

const closeAll = () => {
  RyanMessage.closeAll()
}
</script>
