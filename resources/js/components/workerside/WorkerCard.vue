<script setup>
import { ref, onMounted, computed } from "vue";
import { useStore } from "vuex";
import useWorkers from "../../../composables/workers";

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
import VueDatePicker from "@vuepic/vue-datepicker";
export default {
  computed: {
    userID() {
      return this.$store.state.userID;
    },
  },
  components: { VueDatePicker },

  data() {
    return {
      options: {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      },

      chartData: {},
      salaryObj: [],
      parsedSalaryObj: [],
      id: this.store.state.userDATA.userID,
      vacdate: ["2023-04-05T12:50:00.000Z", "2023-04-21T12:50:00.000Z"],
    };
  },

  methods: {
    buildChartData() {
      const vac = [this.worker.vacation];
      console.log(vac);
      this.vacdate = JSON.parse(vac);

      return this.vacdate;
    },

    getSalaryPrices() {
      let prices = new Array();

      for (let i = 0; i < this.parsedSalaryObj.length; i++) {
        prices.push(this.parsedSalaryObj[i].salvalue);
      }

      return prices;
    },
    getParsedSalaryData() {
      try {
        const salary1 = [this.worker.salary];
        this.parsedSalaryObj = JSON.parse(salary1);
        return this.parsedSalaryObj;
      } catch (error) {}
    },
    getSalaryMonths() {
      this.getParsedSalaryData();
      let labels = new Array();
      for (let i = 0; i < this.parsedSalaryObj.length; i++) {
        let data = this.parsedSalaryObj[i].saldata;
        data = data.toLocaleDateString("en-US", this.options);
        let ans = data.substring(0, data.indexOf("T"));

        labels.push(ans);
      }

      return labels;
    },
  },
};
</script>

<template>
  <div
    @click="buildChartData"
    class="flex flex-row justify-between bg-white pt-2 max-w-7xl m-auto mt-10"
  >
    <div class="flex flex-col">
      <div>
        <h1 class="font-black text-6xl">
          Карточка
          {{ worker.name }}
        </h1>
      </div>
      <div class="bg-neutral-500 w-44 h-64 rounded-2xl mt-8">image</div>
      <div class="font-bold text-xl mt-6">
        <p>
          Посада: <span>{{ worker.post }}</span>
        </p>
        <p>
          Стать: <span>{{ worker.sex }}</span>
        </p>
        <div class="flex flex-col mt-8">
          <p>Пароль для доступу в особистий кабінет:</p>
          <span class="text-red-600 font-black">{{ worker.password }}</span>
        </div>
        <div
          @click="logout()"
          class="bg-red-600 w-fit p-4 mt-8 rounded-2xl hover:-translate-y-1 duration-300"
        >
          <button>
            <img
              :src="'/storage/images/icons/exit.png'"
              alt="no image"
              class="mt-1 h-6"
            />
          </button>
        </div>
      </div>
    </div>
    <div class="flex flex-col gap-4">
      <p class="text-xl font-bold">Заробітня плата:</p>
      <div class="flex flex-row">
        <div>
          <table class="">
            <thead class=""></thead>
            <tbody class="">
              <tr
                class="border-b-2"
                v-for="salary in getParsedSalaryData()"
                :key="salary.data"
              >
                <td class="px-6 py-4 flex flex-row">
                  <div class="pr-4">
                    <p class="font-bold text-xl">{{ salary.salvalue }}</p>
                    <p class="text-sm">{{ salary.saldata }}</p>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="border-b-4" v-if="worker.vacation != null">
        <div class="text-center font-bold text-2xl" v-if="!worker.sick">
          Відпустка
        </div>
        <div class="text-center font-bold text-2xl" v-else-if="worker.sick">
          Лікарняний
        </div>
        <VueDatePicker
          :v-model="vacdate"
          inline
          auto-apply
          range
          readonly
          :enable-time-picker="false"
        >
        </VueDatePicker>
      </div>
      <div v-else class="border-b-4">
        <p class="text-2xl font-bold">Немає відпустки або лікарняних</p>
      </div>
    </div>
  </div>
</template>
