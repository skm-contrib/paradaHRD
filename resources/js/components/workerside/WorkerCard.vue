<template>
    WorkerCard
    {{ $route.params.id }}
    <button @click="logout()">logout
        <img :src="'/storage/images/icons/exit.png'" alt="no image" class="mt-4 h-6 hover:-translate-y-1 duration-300">
    </button>
</template>