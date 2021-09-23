<template>
  <transition name="modal">
    <div class="modal__mask">
      <div class="modal__wrapper">
        <div class="modal__container">
          <div class="modal__header">
            <slot name="header"> default header </slot>
          </div>

          <div class="modal__body">
            <slot name="body"> default body </slot>
          </div>

          <div class="modal__footer">
            <btn @click="$emit('close')"> OK </btn>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import Btn from '@/components/module/Btn'

export default {
  components: { Btn },
}
</script>

<style lang="scss" scoped>
.modal__mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal__wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal__container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal__body {
  margin: 20px 0;
}

.modal__enter {
  opacity: 0;
}

.modal-leave__active {
  opacity: 0;
}

.modal__enter .modal__container,
.modal-leave__active .modal__container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>