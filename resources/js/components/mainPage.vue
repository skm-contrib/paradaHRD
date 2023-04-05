<template>
    <div class="font-sofia flex flex-row">
        <div class="flex flex-col justify-center items-center">
            <div>
                <img
            :src="'/storage/images/ParadaLogo.png'"
            alt="no image"
            class="pt-18 px-32"
            >
            </div>

            <div>
                <h1 class="text-5xl font-sofia">Відділ кадрів</h1>
            </div>
            <div>
                <router-link to="/login">
                    <button class="mt-12 text-white transition-all duration-500
                    bg-red-400 rounded-full
                    shadow-red-600/60 shadow-lg hover:-translate-y-1">
                        <p class="font-sofia text-2xl mx-10 p-4"
                >Увійти</p>
                    </button>
                </router-link>
                    
            </div>
        </div>
        <div class="bg-red-400 w-full flex flex-col h-screen shadow-red-600/60 shadow-2xl">
            <div class="m-auto">
                <p class="text-white font-sofia font-light text-4xl mx-10">
                <span class="font-bold">Праця нашого підприємства <br> — <br> </span>
                це великий досвід, це справа, яка приносить
                задоволення та радість — створювати красу,
                піднімати настрій прекрасній половині людства.
                Ужгородська  швейна фабрика — свідок 75-річної історії моди,
                яка творилася на її очах і разом з нею, працювала у період
                кардинальних змін.
            </p>
            </div>

            <div class="p-4 gap-4 flex justify-end pr-44 pb-10">
                <router-link to="/about" class="mt-12 border-2 border-black transition-all duration-500
                    bg-transparent hover:bg-black hover:text-white rounded-full
                    hover:-translate-y-1">
                        <p class="font-sofia w-32 my-2 text-center">
                            Інформація
                        </p>
                </router-link>
                <router-link to="/contacts" class="mt-12 border-2 border-black transition-all duration-500
                    bg-transparent hover:bg-black hover:text-white rounded-full
                    hover:-translate-y-1">
                        <p class="font-sofia w-32 my-2 text-center">
                            Контакти
                        </p>
                </router-link>
        </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        
    }
}
</script>