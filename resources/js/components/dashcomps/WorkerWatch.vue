<script setup>
import { ref, onMounted } from 'vue';

import useWorkers from '../../../composables/workers';
const { worker, getWorker, removeVacation, addSalary, addVacation, destroyWorker, errors } = useWorkers();

const props = defineProps({
    id: {
        required: true,
        type: String
    }
})

onMounted(() => {
    getWorker(props.id);
});
</script>



<script>
import addSalaryComp from '../dashcomps/modals/addSalary.vue';
import addVacationComp from '../dashcomps/modals/addVacation.vue';
import ChartComponent from '../dashcomps/ChartComponent.vue'
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

export default {
    components: {
        addSalaryComp,
        addVacationComp,
        ChartComponent,
        VueDatePicker
    },

    data() {
        return {
            chartData: {},
            salaryObj: [],
            parsedSalaryObj: [],
            buttonTrigger: false,
            vacTrigger: false,
            id: this.id,
            vacdate: []
        }
    },

    methods: {
        togglePopUp() {
            this.buttonTrigger = !this.buttonTrigger;
        },

        toggleVacPopUp() {
            this.vacTrigger = !this.vacTrigger;
        },

        getSalaryData() {
            try {
                const salary = [this.worker.salary];
                return salary;
            }
            catch (error) { console.log(error) }
        },
        getParsedSalaryData() {
            try {
                const salary1 = [this.worker.salary];
                this.parsedSalaryObj = JSON.parse(salary1);
                return this.parsedSalaryObj;
            }
            catch (error) { }
        },
        getSalaryPrices() {
            let prices = new Array();

            for (let i = 0; i < this.parsedSalaryObj.length; i++) {
                prices.push(this.parsedSalaryObj[i].salvalue)
            }

            return prices;
        },
        getSalaryMonths() {
            this.getParsedSalaryData()
            let labels = new Array();
            for (let i = 0; i < this.parsedSalaryObj.length; i++) {
                let data = this.parsedSalaryObj[i].saldata
                let ans = data.substring(0, data.indexOf('T'));

                labels.push(ans)
            }

            return labels;

        },
        buildChartData() {
            this.salaryPrices = this.getSalaryPrices();
            this.chartData = {
                labels: this.getSalaryMonths(),
                datasets: [
                    {
                        label: 'Заробітня плата',
                        backgroundColor: '#f87979',
                        data: this.getSalaryPrices()
                    }
                ]
            }

            try {
                const vac = [this.worker.vacation];
                this.vacdate = JSON.parse(vac);
            }
            catch (error) { }

            return this.chartData
        },
        removeSalary(index) {
            this.parsedSalaryObj.splice(index, 1)
            this.addSalary(this.parsedSalaryObj, this.id);
        },
        removeVacationFunc() {
            this.removeVacation(this.id);
        }
    }
}
</script>

<template>
    <addSalaryComp v-if="buttonTrigger" :toggleFunc="togglePopUp" :id="id" :salaryObj="getParsedSalaryData()">
    </addSalaryComp>
    <addVacationComp v-if="vacTrigger" :toggleFunc="toggleVacPopUp" :id="id">
    </addVacationComp>
    <div class=" bg-white h-screen font-sofia mx-20 pt-2">
        <div class="flex flex-row justify-between align-baseline items-center border-b-4 pb-2">
            <div class="flex flex-col">
                <router-link :to="{ name: 'WorkerIndex' }"
                    class="w-fit border-2 border-black transition-all duration-500 bg-transparent hover:bg-black hover:text-white rounded-full hover:-translate-y-1">
                    <p class="font-sofia w-32 my-2 text-center">
                        Назад
                    </p>
                </router-link>
            </div>
            <div class="flex flex-row">
                <router-link :to="{ name: 'WorkerEdit', params: { id: props.id } }"
                    class="fastbutton text-sm bg-neutral-700 text-white justify-center align-baseline items-center flex p-2 rounded-2xl m-2">
                    <img :src="'/storage/images/icons/edit.png'" alt="no image" class="w-10 mr-2">
                    <p>Редагувати працівника</p>
                </router-link>
                <button @click="toggleVacPopUp"
                    class="fastbutton text-sm bg-neutral-700 text-white justify-center align-baseline items-center flex p-2 rounded-2xl m-2">
                    <img :src="'/storage/images/icons/alarm.png'" alt="no image" class="w-10 mr-2">
                    <p>Надати відпустку</p>
                </button>

                <button @click="togglePopUp"
                    class="fastbutton text-sm bg-neutral-700 text-white justify-center align-baseline items-center flex p-2 rounded-2xl m-2">
                    <img :src="'/storage/images/icons/money.png'" alt="no image" class="w-10 mr-2">
                    <p>Видати заробітню плату</p>
                </button>
                <button @click="destroyWorker(props.id)"
                    class="fastbutton text-sm bg-neutral-700 text-white justify-center align-baseline items-center flex p-2 rounded-2xl m-2">
                    <img :src="'/storage/images/icons/delete.png'" alt="no image" class="w-6 mr-2">
                    <p>Звільнити працівника</p>
                </button>
            </div>
        </div>
        <div class="flex flex-row justify-between bg-white pt-2">
            <div class="flex flex-col">
                <div>
                    <h1 class="font-black text-6xl my-6">{{ worker.name }}</h1>
                </div>
                <div class="bg-neutral-500 w-44 h-64 rounded-2xl">
                    image
                </div>
                <div class="font-bold text-xl mt-6">
                    <p>Посада: <span>{{ worker.post }}</span></p>
                    <p>Стать: <span>{{ worker.sex }}</span></p>

                </div>

            </div>
            <div class="flex flex-col gap-4">
                <div class="flex flex-row ">
                    <ChartComponent :salaryData="buildChartData()" />

                </div>
                <div>
                    <VueDatePicker v-model="vacdate" inline auto-apply range readonly :enable-time-picker="false">
                    </VueDatePicker>
                </div>
                <div><button @click="removeVacationFunc()">Прибрати відпустку</button></div>
            </div>
            <div>
                <table class="">
                    <thead class="">
                    </thead>
                    <tbody class="">
                        <tr class="border-b-2" v-for="(salary, index) in getParsedSalaryData()" :key="salary.data">
                            <td class="px-6 py-4 flex flex-row">
                                <div class="pr-4">
                                    <p class="font-bold text-xl">{{ salary.salvalue }}</p>
                                    <p class="text-sm">{{ salary.saldata }}</p>
                                </div>
                                <div @click="removeSalary(index)"
                                    class="cursor-pointer flex flex-col bg-red-400 items-center rounded-xl justify-center p-2">
                                    <img :src="'/storage/images/icons/delete.png'" alt="no image" class="w-4">
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>


        </div>
    </div>
</template>