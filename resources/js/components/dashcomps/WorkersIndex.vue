<template>
    <div class="flex justify-evenly text-center my-6">
            <h2 class="text-6xl text-neutral-700">Картки працівників</h2>
        </div>
        
            <div class="flex w-full flex-col">
                
  <div class="overflow-x-auto bg-neutral-700 mx-10 rounded-3xl h-full">
    <div class="w-full">
      <div class="overflow-hidden">
        <router-link to="/create"
                class="fastbutton bg-neutral-700 text-white justify-center align-baseline items-center flex p-6 rounded-2xl m-6">
                <img
                    :src="'/storage/images/icons/newworker.png'"
                    alt="no image"
                    class="w-10 mr-10"
                    >
                    <p>Додати нового працівника</p>
    </router-link>
    <table class="w-full">
        <thead class="">
        </thead>
        <tbody class="">
            <tr v-for="worker in workers" :key="worker.id" class="">
                <td class="px-6 py-4">
                    <div class="bg-neutral-700 flex flex-row text-xl text-white border-4 border-neutral-400 rounded-2xl">
                        <div class="w-28 h-32 bg-gray-300 rounded-xl"></div>
                        <div class="flex flex-col items-start justify-center py-2 pl-2 w-full">
                            <router-link :to="{name: 'WorkerWatch', params:{id: worker.id}}" class="text-2xl">{{ worker.name }}</router-link>
                            <div class="bg-neutral-500 text-sm w-fit p-2 rounded-3xl">
                                <p>{{ worker.post }}</p>
                            </div>
                        </div>
                        <div class="flex flex-col items-center justify-center pr-4">
                                <router-link class=" w-full bg-green-400 m-2 p-2 rounded-xl"
                                :to="{name: 'WorkerEdit', params:{id: worker.id}}">Редагувати</router-link>
                                <button class="w-full bg-red-400 m-2 p-2 rounded-xl" @click="destroyWorker(worker.id)">Звільнити</button>
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
import useWorkers from '../../../composables/workers';
import { onMounted } from 'vue';

const { workers, getWorkers, destroyWorker} = useWorkers();

onMounted(() => getWorkers());
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