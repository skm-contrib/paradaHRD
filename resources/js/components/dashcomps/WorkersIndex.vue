<template>
  <div class="flex justify-evenly text-center my-6">
    <h2 class="text-4xl sm:text-6xl text-neutral-700">Картки працівників</h2>
    <p
      class="text-4xl font-bold text-neutral-700 visible sm:invisible"
      @click="closeBtns()"
    >
      =
    </p>
  </div>

  <div class="flex w-full flex-col">
    <div class="overflow-x-auto bg-neutral-700 m-2 sm:mx-10 rounded-3xl h-full">
      <div class="w-full">
        <div class="overflow-hidden">
          <router-link
            to="/create"
            class="fastbutton bg-neutral-700 text-white justify-center align-baseline items-center flex sm:p-6 rounded-2xl m-2 sm:m-6"
          >
            <img
              :src="'/storage/images/icons/newworker.png'"
              alt="no image"
              class="w-10 mr-10"
            />
            <p>Додати нового працівника</p>
          </router-link>
          <div class="gap-4 flex flex-col sm:flex-row mx-6">
            <input
              class="bg-neutral-600 rounded-2xl p-2 text-white"
              type="text"
              v-model="search"
              placeholder="Пошук"
            />

            <select
              v-model="selectedPost"
              class="w-full sm:w-48 cursor-pointer bg-neutral-600 text-white justify-center align-baseline items-center flex p-2 mb-2 rounded-2xl"
            >
              <option value="Всі">Всі</option>
              <option value="Швея">Швея</option>
              <option value="Кроя">Кроя</option>
              <option value="Начальник відділу">Начальник відділу</option>
              <option value="Начальник виробництва">
                Начальник виробництва
              </option>
              <option value="Працівник відділу кадрів">
                Працівник відділу кадрів
              </option>
              <option value="Замістник начальника">Замістник начальника</option>
            </select>

            <div>
              <input
                @click="changeVacationStatus()"
                type="checkbox"
                id="vacation-status"
                class="hidden peer"
                :checked="vacation"
              />
              <label
                for="vacation-status"
                class="inline-flex items-center justify-between w-full p-2 sm:p-5 text-neutral-500 bg-bg-neutral-600 border-2 border-neutral-500 rounded-lg cursor-pointer peer-checked:border-white peer-checked:text-white hover:text-neutral-400 hover:bg-neutral-500 duration-300"
                >У відпустці
              </label>
            </div>
            <div>
              <input
                @click="changeSickStatus()"
                type="checkbox"
                id="sick-status"
                class="hidden peer"
                :checked="sick"
              />
              <label
                for="sick-status"
                class="inline-flex items-center justify-between w-full p-2 sm:p-5 text-neutral-500 bg-bg-neutral-600 border-2 border-neutral-500 rounded-lg cursor-pointer peer-checked:border-white peer-checked:text-white hover:text-neutral-400 hover:bg-neutral-500 duration-300"
                >На лікарняному
              </label>
            </div>
          </div>
          <table class="w-full">
            <thead class=""></thead>
            <tbody class="">
              <tr v-for="worker in filteredWorkers" :key="worker.id" class="">
                <td class="px-2 sm:px-6 sm:py-4">
                  <div
                    class="bg-neutral-700 flex flex-row text-xl text-white border-4 border-neutral-400 rounded-2xl"
                  >
                    <div
                      class="w-14 h-16 sm:w-28 sm:h-32 bg-gray-300 rounded-xl"
                    ></div>
                    <div
                      class="flex flex-col items-start justify-center py-2 pl-2 w-full"
                    >
                      <router-link
                        :to="{ name: 'WorkerWatch', params: { id: worker.id } }"
                        class="text-2xl"
                        >{{ worker.name }}</router-link
                      >
                      <div class="bg-neutral-500 text-sm w-fit p-2 rounded-3xl">
                        <p class="text-sm">{{ worker.post }}</p>
                      </div>
                    </div>
                    <div class="flex flex-col items-center justify-center pr-4">
                      <router-link
                        class="text-sm w-full bg-green-400 m-2 p-2 rounded-xl"
                        :to="{ name: 'WorkerEdit', params: { id: worker.id } }"
                        >Редагувати</router-link
                      >
                      <button
                        class="text-sm w-full bg-red-400 m-2 p-2 rounded-xl"
                        @click="destroyWorker(worker.id)"
                      >
                        Звільнити
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import useWorkers from "../../../composables/workers";
import { onMounted } from "vue";

const { workers, getWorkers, destroyWorker } = useWorkers();

onMounted(() => getWorkers());
</script>

<script>
export default {
  data() {
    return {
      search: "",
      selectedPost: "Всі",
      vacation: false,
      sick: false,
    };
  },
  methods: {
    closeBtns() {
      document.getElementById("fastBtns").classList.remove("invisible");
      document.getElementById("fastBtns").classList.remove("w-0");

      document.getElementById("fastBtns").classList.add("visible");
      document.getElementById("fastBtns").classList.add("w-screen");
      document.getElementById("fastBtns").classList.add("px-6");
    },

    changeVacationStatus() {
      if (this.sick) this.sick = false;
      this.vacation = !this.vacation;
    },
    changeSickStatus() {
      if (this.vacation) this.vacation = false;
      this.sick = !this.sick;
    },
  },

  computed: {
    filteredWorkers() {
      if (this.selectedPost == "Всі" && this.sick) {
        return this.workers.filter(
          (worker) =>
            worker.name
              .toLowerCase()
              .trim()
              .includes(this.search.toLowerCase().trim()) &&
            worker.sick == this.sick
        );
      } else if (this.selectedPost == "Всі" && this.vacation) {
        return this.workers.filter(
          (worker) =>
            worker.name
              .toLowerCase()
              .trim()
              .includes(this.search.toLowerCase().trim()) &&
            worker.vacation != null &&
            !worker.sick
        );
      } else if (this.selectedPost == "Всі") {
        return this.workers.filter((worker) =>
          worker.name
            .toLowerCase()
            .trim()
            .includes(this.search.toLowerCase().trim())
        );
      } else if (this.sick) {
        return this.workers.filter(
          (worker) =>
            worker.name
              .toLowerCase()
              .trim()
              .includes(this.search.toLowerCase().trim()) &&
            worker.post == this.selectedPost &&
            worker.sick == this.sick
        );
      } else if (this.vacation) {
        return this.workers.filter(
          (worker) =>
            worker.name
              .toLowerCase()
              .trim()
              .includes(this.search.toLowerCase().trim()) &&
            worker.post == this.selectedPost &&
            worker.vacation != null &&
            !worker.sick
        );
      } else {
        return this.workers.filter(
          (worker) =>
            worker.name
              .toLowerCase()
              .trim()
              .includes(this.search.toLowerCase().trim()) &&
            worker.post == this.selectedPost
        );
      }
    },
  },
};
</script>


<style>
.fastbutton:hover {
  transform: translateY(-5px);
  background-color: #262626;
  transition: 0.3s ease-out;
}
.fastbutton {
  transition: 0.3s ease-out;
}
</style>
