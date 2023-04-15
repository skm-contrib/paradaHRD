<script setup>
import useWorkers from "../../composables/workers";
import { reactive } from "vue";
import { onMounted } from "vue";

const { authWorker, getWorkers, errors } = useWorkers();

const form = reactive({
  login: "",
  password: "",
});

onMounted(() => {
  getWorkers();
});
</script>

<template>
  <div class="bg-red-400 h-screen">
    <div class="flex flex-col justify-center items-center">
      <div class="mt-10">
        <img
          :src="'/storage/images/ParadaLogoWhite.png'"
          alt="no image"
          class="pt-18 px-32"
        />
      </div>

      <div>
        <h1 class="text-3xl font-sofia text-white">Входження у відділ</h1>
      </div>

      <div class="shadow-2xl bg-white rounded-3xl h-full p-10 mt-14 sm:w-1/3">
        <form @submit.prevent="authWorker(form)">
          <div class="flex flex-col gap-4">
            <div>
              <p class="font-sofia font-bold text-2xl">
                Введіть контактні дані
              </p>
              <input
                v-model="form.login"
                class="w-full"
                placeholder="ПІБ, номер телефону, пошта"
              />
            </div>

            <div>
              <p class="font-sofia font-bold text-2xl">Ваш пароль</p>
              <input
                v-model="form.password"
                class="w-full"
                placeholder="Пароль від керівництва"
              />
            </div>

            <div class="gap-4 mt-2 flex justify-center">
              <router-link
                to="/"
                class="border-2 border-black transition-all duration-500 bg-transparent hover:bg-black hover:text-white rounded-full hover:-translate-y-1"
              >
                <p class="font-sofia w-32 my-2 text-center">Назад</p>
              </router-link>

              <button
                type="submit"
                class="border-2 border-black transition-all duration-500 bg-black text-white hover:bg-white hover:text-black rounded-full hover:-translate-y-1"
              >
                <p class="font-sofia font-black w-32 my-2 text-center">
                  Продовжити
                </p>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
