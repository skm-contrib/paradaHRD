<template>
    <div class="w-fit">
        <div class="flex flex-col justify-start text-center my-6">
            <h2 class="text-6xl text-neutral-700">Оберіть дію</h2>
        </div>

        <div class="flex w-full">
            <div class="grid grid-cols-3 ">
                <router-link to="/create"
                class="fastbutton bg-neutral-700 text-white justify-center align-baseline items-center flex p-6 rounded-2xl m-6">
                <img
                    :src="'/storage/images/icons/newworker.png'"
                    alt="no image"
                    class="w-10 mr-10"
                    >
                    <p>Додати нового працівника</p>
                </router-link>
            
                <button
                class="fastbutton bg-neutral-700 text-white justify-center align-baseline items-center flex p-6 rounded-2xl m-6">
                <img
                    :src="'/storage/images/icons/delete.png'"
                    alt="no image"
                    class="w-10 mr-10"
                    >
                    <p>Звільнити працівника</p>
                </button>
            
                <button
                class="fastbutton bg-neutral-700 text-white justify-center align-baseline items-center flex p-6 rounded-2xl m-6">
                <img
                    :src="'/storage/images/icons/edit.png'"
                    alt="no image"
                    class="w-10 mr-10"
                    >
                    <p>Редагувати працівника</p>
                </button>

                <button
                class="fastbutton bg-neutral-700 text-white justify-center align-baseline items-center flex p-6 rounded-2xl m-6">
                <img
                    :src="'/storage/images/icons/workcard.png'"
                    alt="no image"
                    class="w-10 mr-10"
                    >
                    <p>Переглянути картки працівників</p>
                </button>
            
                <button
                class="fastbutton bg-neutral-700 text-white justify-center align-baseline items-center flex p-6 rounded-2xl m-6">
                <img
                    :src="'/storage/images/icons/alarm.png'"
                    alt="no image"
                    class="w-10 mr-10"
                    >
                    <p>Надати відпустку</p>
                </button>
            
                <button
                class="fastbutton bg-neutral-700 text-white justify-center align-baseline items-center flex p-6 rounded-2xl m-6">
                <img
                    :src="'/storage/images/icons/money.png'"
                    alt="no image"
                    class="w-10 mr-10"
                    >
                    <p>Видати заробітню плату</p>
                </button>
            </div>
        </div>
    </div>
</template>

<style>

button.fastbutton:hover {
    transform: translateY(-5px);
    background-color: #262626;
    transition: 0.3s ease-out;
}
button.fastbutton {
    transition: 0.3s ease-out;
}

</style>