<template>
  <div
    v-if="worker.post == 'Працівник відділу кадрів' || worker.post == 'admin'"
    v-cloak
    class="flex flex-row"
  >
    <div
      id="fastBtns"
      class="flex flex-col px-6 bg-red-400 h-screen w-screen sm:w-fit"
    >
      <div
        class="w-full sm:w-fit flex flex-row pt-10 items-center justify-between md:justify-center"
      >
        <img
          :src="'/storage/images/ParadaLogoWhite.png'"
          alt="no image"
          class="w-40"
        />
        <p
          class="text-2xl font-bold text-white visible sm:invisible"
          @click="closeBtns()"
        >
          =
        </p>
      </div>

      <div class="pt-20 flex flex-col gap-4">
        <button
          tag="diyi"
          name="diyi"
          id="selectable"
          @click="selectPage($event)"
          class="selected"
        >
          <div
            tag="diyi"
            class="m-2 p-2 text-2xl flex flex-row justify-start items-center align-baseline gap-4"
          >
            <img
              tag="diyi"
              :src="'/storage/images/icons/diyi.png'"
              alt="no image"
              class="ml-4 h-4"
            />
            <p tag="diyi" class="font-sofia text-white">Дії</p>
          </div>
        </button>

        <button
          tag="workers"
          name="workers"
          id="selectable"
          @click="selectPage($event)"
          class="unselected"
        >
          <div
            tag="workers"
            class="m-2 p-2 text-2xl w-64 flex flex-row justify-start items-center align-baseline gap-4"
          >
            <img
              tag="workers"
              :src="'/storage/images/icons/workers.png'"
              alt="no image"
              class="ml-4 h-4"
            />
            <p tag="workers" class="font-sofia text-white">Працівники</p>
          </div>
        </button>
      </div>

      <div
        class="font-sofia flex flex-col align-bottom items-center bottom-0 m-auto"
      >
        <h2 class="text-white text-3xl font-bold">{{ worker.name }}</h2>
        {{ $store.state.userID }}
        <p class="text-red-800">{{ worker.post }}</p>
        <p class="text-neutral-700">{{ worker.mail }}</p>

        <button @click="logout()">
          <img
            :src="'/storage/images/icons/exit.png'"
            alt="no image"
            class="mt-4 h-6 hover:-translate-y-1 duration-300"
          />
        </button>
      </div>
    </div>
    <div class="font-sofia overflow-hidden w-full">
      <Component class="" :is="selectedComponent"></Component>
    </div>
  </div>
  <div v-cloak v-else>
    <div
      class="bg-red-400 h-screen flex align-center justify-center items-center"
    >
      <div
        class="w-fit flex flex-col align-center justify-center items-center p-14 shadow-2xl bg-white rounded-3xl"
      >
        <h1 class="font-black text-6xl">401</h1>
        <p class="text-neutral-600">ДІЯ НЕ АВТОРИЗОВАНА</p>
        <button
          class="font-sofia font-black m-2 p-2 border-2 border-black transition-all duration-500 bg-black text-white hover:bg-white hover:text-black rounded-full hover:-translate-y-1"
          @click="logout()"
        >
          НА ГОЛОВНУ
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { useStore } from "vuex";
import useWorkers from "../../composables/workers";

const {
  worker,
  getWorker,
  logout,
  removeVacation,
  addSalary,
  addVacation,
  destroyWorker,
  errors,
} = useWorkers();

const props = defineProps({
  workerID: {
    required: true,
    type: String,
  },
});
const store = useStore();

onMounted(() => {
  getWorker(store.state.userDATA.userID);
});
</script>

<script>
import fastmake from "../components/dashcomps/fastmake.vue";
import workers from "../components/dashcomps/WorkersIndex.vue";

export default {
  computed: {
    userID() {
      return this.$store.state.userID;
    },
  },
  components: {
    fastmake,
    workers,
  },

  data() {
    return {
      selectedComponent: fastmake,
    };
  },

  methods: {
    closeBtns() {
      document.getElementById("fastBtns").classList.add("invisible");
      document.getElementById("fastBtns").classList.add("w-0");
      document.getElementById("fastBtns").classList.remove("px-6");
    },
    selectPage(name) {
      let elTag = name.srcElement.attributes[0].nodeValue;

      switch (elTag) {
        case "diyi":
          document.getElementsByName("diyi")[0].classList.add("selected");
          document.getElementsByName("workers")[0].classList.remove("selected");
          document.getElementsByName("workers")[0].classList.add("unselected");

          this.selectedComponent = fastmake;
          break;

        case "workers":
          document.getElementsByName("workers")[0].classList.add("selected");
          document.getElementsByName("diyi")[0].classList.remove("selected");
          document.getElementsByName("diyi")[0].classList.add("unselected");

          this.selectedComponent = workers;
          break;
      }
    },
  },
};
</script>


<style>
[v-cloak] {
  display: none;
}

.selected {
  transition: 0.3s;
  border: solid 2px #fecaca;
  border-radius: 15px;
  background-color: #fca5a5;
}

.unselected {
  border-radius: 15px;
  transition: 0.3s;
}

.selected:hover {
  transition: 0.3s;
  transform: translateY(-3px);
}

.unselected:hover {
  transition: 0.3s;
  background-color: #fca5a5;
  transform: translateY(-3px);
}
</style>
