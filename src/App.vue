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
        <input type="password" class="form-control" id="new-pass" v-model="newPassword" @blur="nBlur">
        <small v-if="nError">{{nError}}</small>
      </div>
      <div class="mb-3">
        <label for="re-pass" class="form-label">Повторите пароль</label>
        <input type="password" class="form-control" id="re-pass" v-model="confirmPassword" @blur="confirmBlur">
        <small v-if="confirmError">{{confirmError}}</small>
      </div>
      <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="checked" v-model="checked" @blur="cBlur">
        <label class="form-check-label" for="checked">Согласен на все подписки*</label>

        <div v-if="cError">* {{cError}}</div>
      </div>
      <div class="mb-3">
      <select class="form-select" aria-label="Default select example" v-model="role" @blur="roleBlur">
        <option value="participant">Участник</option>
        <option value="speaker">Выступающий</option>
        <option value="media">СМИ</option>
      </select>
        <div v-if="roleError">* {{roleError}}</div>
      </div>
      <div class="mb-3">
        <select class="form-select" aria-label="Default select example" @blur="pBlur" v-model="prof">
          <option value="designer">Дизайнер</option>
          <option value="accountant">Счетовод</option>
          <option value="manager">Менеджер</option>
        </select>
        <div v-if="profError">* {{profError}}</div>
      </div>
      <button type="submit" class="btn btn-primary"> Отправить </button>
    </form>
  </div>
</template>

<script setup>
import {useRequestForm} from "../src/use/request-form";

const {
  password,
  pError,
  pBlur,
  onSybmit,
  isSubmitting,
  checked,
  cBlur,
  cError,
  nBlur,
  nError,
  newPassword,
  confirmError,
  confirmBlur,
  confirmPassword,
  role,
  roleBlur,
  roleError,
  profError,
  prof,
  profBlur
} = useRequestForm()

</script>

<style scoped>

</style>