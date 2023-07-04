<template>
  <div class="mb-4">
    <ryan-button>Default</ryan-button>
    <ryan-button type="primary">Primary</ryan-button>
    <ryan-button type="success">Success</ryan-button>
    <ryan-button type="info">Info</ryan-button>
    <ryan-button type="warning">Warning</ryan-button>
    <ryan-button type="danger">Danger</ryan-button>
  </div>
  <div class="mb-4">
    <ryan-button plain>Plain</ryan-button>
    <ryan-button type="primary" plain>Primary</ryan-button>
    <ryan-button type="success" plain>Success</ryan-button>
    <ryan-button type="info" plain>Info</ryan-button>
    <ryan-button type="warning" plain>Warning</ryan-button>
    <ryan-button type="danger" plain>Danger</ryan-button>
  </div>

  <div class="mb-4">
    <ryan-button round>Round</ryan-button>
    <ryan-button type="primary" round>Primary</ryan-button>
    <ryan-button type="success" round>Success</ryan-button>
    <ryan-button type="info" round>Info</ryan-button>
    <ryan-button type="warning" round>Warning</ryan-button>
    <ryan-button type="danger" round>Danger</ryan-button>
  </div>

  <div>
    <ryan-button icon="search" circle />
    <ryan-button type="primary" icon="edit" circle />
    <ryan-button type="success" icon="check" circle />
    <ryan-button type="info" icon="message" circle />
    <ryan-button type="warning" icon="star" circle />
    <ryan-button type="danger" icon="delete" circle />
  </div>
</template>
<style>
.mb-4 {
  margin-bottom: 20px;
}
</style>
