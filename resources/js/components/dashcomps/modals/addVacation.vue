<template>
  <div
    class="fixed top-0 left-0 right-0 bottom-0 z-30 backdrop-blur flex align-baseline justify-center items-center"
  >
    <div class="shadow-2xl bg-red-400 rounded-3xl p-10 mt-14 w-1/3">
      <form @submit.prevent="addVacationPop()">
        <div class="flex flex-col justify-center gap-4">
          <div class="flex justify-center gap-4 flex-col">
            <p class="font-sofia flex font-bold justify-center text-2xl">
              Оберіть проміжок дат
            </p>
            <div class="flex flex-row justify-center">
              <VueDatePicker
                v-model="newSal"
                day-picker
                range
                :enable-time-picker="false"
              >
              </VueDatePicker>
            </div>
            <div>
              <input
                @click="changeSickStatus()"
                type="checkbox"
                id="sick-status"
                class="hidden peer"
              />
              <label
                for="sick-status"
                class="inline-flex items-center justify-between w-full p-5 text-neutral-700 bg-white border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-red-800 hover:text-gray-600 peer-checked:text-gray-600 hover:bg-gray-50"
              >
                <div class="block">
                  <div class="w-full text-lg font-semibold">Лікарняний?</div>
                  <div
                    v-if="sickStatus"
                    class="font-bold text-xl text-green-600"
                  >
                    Так
                  </div>
                  <div v-else class="font-bold text-xl text-red-600">Ні</div>
                </div>
              </label>
            </div>
          </div>

          <div class="gap-4 mt-2 flex justify-center">
            <button
              @click="toggleFunc"
              class="border-2 border-black transition-all duration-500 bg-transparent hover:bg-black hover:text-white rounded-full hover:-translate-y-1"
            >
              <p class="font-sofia w-32 my-2 text-center">Назад</p>
            </button>

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
</template>


<script setup>
import { onMounted } from "vue";
import useWorkers from "../../../../composables/workers";

const { worker, getWorker, addVacation, updateWorker, errors } = useWorkers();

const props = defineProps({
  id: {
    required: true,
    type: String,
  },
  toggleFunc: {
    required: true,
  },
});

onMounted(() => getWorker(props.id));
</script>

<script>
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

export default {
  components: { VueDatePicker },

  data() {
    return {
      newSal: [new Date(), new Date()],
      sickStatus: false,
    };
  },

  methods: {
    addVacationPop() {
      this.addVacation(this.newSal, this.sickStatus, this.id);
      this.toggleFunc();
    },
    changeSickStatus() {
      this.sickStatus = !this.sickStatus;
    },
  },
};
</script>
