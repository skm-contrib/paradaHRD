<template>
    <router-view v-slot="{ Component }">
        <component :is="Component"></component>
    </router-view>
</template>

<script>
</script>

<style>
.route-enter-from {
    opacity: 0;
}

.route-enter-active {
    transition: all 0.5s ease-in-out;
}

.route-leave-to {
    opacity: 0;
}

.route-leave-active {
    transition: all 0.5s ease-in-out;
}
</style>