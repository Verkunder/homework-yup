<template>
  <div class="container justify-content-center align-content-center pt-lg-5">
    <form @submit.prevent="onSybmit">
      <div class="mb-3">
        <label for="password" class="form-label">Старый пароль</label>
        <input type="password" id="password" class="form-control" v-model="password" @blur="pBlur">
        <small v-if="pError">{{pError}}</small>
      </div>
      <div class="mb-3">
        <label for="new-pass" class="form-label">Новый пароль</label>
        <input type="text" class="form-control" id="new-pass">
      </div>
      <div class="mb-3">
        <label for="re-pass" class="form-label">Повторите пароль</label>
        <input type="text" class="form-control" id="re-pass">
      </div>
      <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1">
        <label class="form-check-label" for="exampleCheck1">Согласен на все подписки*</label>
      </div>
      <div class="mb-3">
      <select class="form-select" aria-label="Default select example">
        <option selected>Роль на платформе</option>
        <option value="participant">Участник</option>
        <option value="speaker">Выступающий</option>
        <option value="media">СМИ</option>
      </select>
      </div>
      <div class="mb-3">
        <select class="form-select" aria-label="Default select example">
          <option selected>Профессия</option>
          <option value="designer">Дизайнер</option>
          <option value="accountant">Счетовод</option>
          <option value="manager">Менеджер</option>
        </select>
      </div>
      <button type="submit" class="btn btn-primary"> Отправить {{isSubmitting}} </button>
    </form>
  </div>
</template>

<script setup>
import {useRequestForm} from "../src/use/request-form";

const {password, pError, pBlur, onSybmit, isSubmitting} = useRequestForm()

</script>

<style scoped>

</style>