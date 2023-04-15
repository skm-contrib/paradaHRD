<script setup>
import { reactive } from "vue";
import useWorkers from "../../../composables/workers";

const { storeWorker, errors } = useWorkers();

var firstsalary = 6500;

const form = reactive({
  name: "",
  phone_number: "",
  mail: "",
  post: "",
  sex: "",
  vacation: "",
  salary: "",
  sick: false,
  password: "",
});
</script>

<script>
export default {
  methods: {
    generatePass() {
      var length = 8,
        charset =
          "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        retVal = "";
      for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
      }

      this.form.password = retVal;
    },
    updateSalary() {
      console.log("asd");
      let updatedSalary = this.firstsalary;
      this.form.salary = `[{"salvalue":"${updatedSalary}","saldata":"2023-03-10T16:18:00.000Z"}]`;
    },
  },
};
</script>

<template>
  <div class="bg-red-400 h-screen p-2">
    <div class="flex flex-col bg-red-400 justify-center items-center">
      <form @submit.prevent="storeWorker(form)">
        <div class="mt-10 shadow-2xl bg-white rounded-3xl h-full p-10 w-full">
          <div class="flex flex-col gap-4">
            <div class="border-b-2">
              <label for="name" class="font-sofia font-bold text-2xl"
                >Введіть повне ім'я працівника</label
              >
              <input
                id="name"
                v-model="form.name"
                class="w-full"
                placeholder="ПІБ"
              />
              <div v-if="errors.name">
                <span class="text-sm text-red-400">
                  {{ errors.name[0] }}
                </span>
              </div>
            </div>
            <div class="flex flex-col sm:flex-row gap-6 justify-between">
              <div class="border-b-2 w-full">
                <label for="phone_number" class="font-sofia font-bold text-2xl"
                  >Номер телефону</label
                >
                <div class="flex flex-row">
                  <p>+380</p>
                  <input
                    type="number"
                    id="phone_number"
                    v-model="form.phone_number"
                    class="ml-2 w-full"
                    placeholder="00 000 0000"
                  />
                </div>
                <div v-if="errors.phone_number">
                  <span class="text-sm text-red-400">
                    {{ errors.phone_number[0] }}
                  </span>
                </div>
              </div>
              <div class="border-b-2 w-full">
                <label for="phone_number" class="font-sofia font-bold text-2xl"
                  >Зарплата</label
                >
                <div class="flex flex-row">
                  <input
                    @input="updateSalary()"
                    type="number"
                    id="phone_number"
                    v-model="firstsalary"
                    class="ml-2 w-full"
                    placeholder="12 300"
                  />
                  <p>грн.</p>
                </div>
                <div v-if="errors.salary">
                  <span class="text-sm text-red-400">
                    {{ errors.salary[0] }}
                  </span>
                </div>
              </div>
            </div>
            <div class="border-b-2">
              <label for="mail" class="font-sofia font-bold text-2xl"
                >Пошта</label
              >
              <input
                id="mail"
                v-model="form.mail"
                class="w-full"
                placeholder="Електронна пошта"
              />
              <div v-if="errors.mail">
                <span class="text-sm text-red-400">
                  {{ errors.mail[0] }}
                </span>
              </div>
            </div>
            <div
              class="flex flex-col sm:flex-row gap-6 justify-between border-b-2"
            >
              <div class="w-full">
                <label for="post" class="font-sofia font-bold text-2xl"
                  >Посада</label
                >
                <select
                  id="post"
                  v-model="form.post"
                  class="w-full cursor-pointer bg-neutral-700 text-white justify-center align-baseline items-center flex p-2 mb-2 rounded-2xl"
                >
                  <option value="Швея">Швея</option>
                  <option value="Кроя">Кроя</option>
                  <option value="Начальник відділу">Начальник відділу</option>
                  <option value="Начальник виробництва">
                    Начальник виробництва
                  </option>
                  <option value="Працівник відділу кадрів">
                    Працівник відділу кадрів
                  </option>
                  <option value="Замістник начальника">
                    Замістник начальника
                  </option>
                </select>
                <div v-if="errors.post">
                  <span class="text-sm text-red-400">
                    {{ errors.post[0] }}
                  </span>
                </div>
              </div>
              <div class="w-full">
                <label for="sex" class="font-sofia font-bold text-2xl"
                  >Стать</label
                >
                <select
                  id="sex"
                  v-model="form.sex"
                  class="w-full cursor-pointer bg-neutral-700 text-white justify-center align-baseline items-center flex p-2 mb-2 rounded-2xl"
                >
                  <option value="Чоловіча">Чоловіча</option>
                  <option value="Жіноча">Жіноча</option>
                  <option value="Не розголошує">Не розголошує</option>
                </select>
                <div v-if="errors.sex">
                  <span class="text-sm text-red-400">
                    {{ errors.sex[0] }}
                  </span>
                </div>
              </div>
            </div>
            <div class="flex flex-row border-b-2">
              <div>
                <label for="password" class="font-sofia font-bold text-2xl"
                  >Пароль</label
                >
                <input
                  id="password"
                  v-model="form.password"
                  class="w-full"
                  placeholder="Пароль для доступу"
                />
                <div v-if="errors.password">
                  <span class="text-sm text-red-400">
                    {{ errors.password[0] }}
                  </span>
                </div>
              </div>
              <div
                @click="generatePass()"
                class="fastbutton bg-neutral-700 text-white justify-center align-baseline items-center flex p-2 rounded-2xl m-2"
              >
                Згенерувати
              </div>
            </div>
          </div>
          <div class="gap-4 mt-8 flex justify-center">
            <router-link
              to="/dashboard"
              class="border-2 border-black transition-all duration-500 bg-transparent hover:bg-black hover:text-white rounded-full hover:-translate-y-1"
            >
              <p class="font-sofia w-32 my-2 text-center">Назад</p>
            </router-link>

            <button
              type="submit"
              class="border-2 border-black transition-all duration-500 bg-black text-white hover:bg-white hover:text-black rounded-full hover:-translate-y-1"
            >
              <p class="font-sofia font-black w-32 my-2 text-center">Додати</p>
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
