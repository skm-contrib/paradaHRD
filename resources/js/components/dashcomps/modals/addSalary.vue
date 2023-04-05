<template>
    <div class="fixed top-0 left-0 right-0 bottom-0 z-30 backdrop-blur flex align-baseline justify-center items-center">
        <div class="shadow-2xl bg-red-400 rounded-3xl p-10 mt-14 w-1/3">
            <form @submit.prevent="addSalaryPop()">
                <div class="flex flex-col  justify-center gap-4">
                    <div class="flex justify-center gap-4 flex-col">
                        <p class="font-sofia flex font-bold justify-center text-2xl">Введіть суму</p>
                        <div class="flex flex-row  justify-center">
                            <input type="text" class="bg-transparent w-fit placeholder-neutral-600 mr-2"
                                v-model="newSal.salvalue" placeholder="Сума коштів">
                            <p> грн.</p>
                        </div>
                        <p class="font-sofia flex font-bold justify-center text-2xl">Оберіть дату</p>
                        <div class="flex flex-row  justify-center">
                            <VueDatePicker v-model="newSal.saldata" day-picker auto-apply :enable-time-picker="false">
                            </VueDatePicker>
                        </div>
                    </div>



                    <div class="gap-4 mt-2 flex justify-center">
                        <button @click="toggleFunc"
                            class="border-2 border-black transition-all duration-500
                                                                                                                                bg-transparent hover:bg-black hover:text-white rounded-full
                                                                                                                                hover:-translate-y-1">

                            <p class="font-sofia w-32 my-2 text-center">
                                Назад
                            </p>
                        </button>

                        <button type="submit"
                            class="border-2 border-black transition-all duration-500
                                                                                                                                bg-black text-white hover:bg-white hover:text-black rounded-full
                                                                                                                                hover:-translate-y-1">

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
import { onMounted } from 'vue';
import useWorkers from '../../../../composables/workers';

const { worker, getWorker, addSalary, updateWorker, errors } = useWorkers();


const props = defineProps({
    id: {
        required: true,
        type: String
    },
    toggleFunc: {
        required: true
    },
    salaryObj: {
        required: true
    }
})

onMounted(() => getWorker(props.id));
</script>

<script>
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

export default {
    components: { VueDatePicker },

    data() {
        return {
            newSal: {
                salvalue: '12400',
                saldata: { "day": 5, "month": 5, "year": 2023 },
            },
        }
    },

    methods:
    {
        addSalaryPop() {
            this.salaryObj.push(this.newSal);
            this.addSalary(this.salaryObj, this.id);
            this.toggleFunc()
        }
    }
}
</script>