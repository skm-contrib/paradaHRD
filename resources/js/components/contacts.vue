<template>
    <div class="flex flex-row gap-4 bg-red-400 h-screen">
        <div class="flex flex-col w-2/3">
            <div>
            <img
            :src="'/storage/images/ParadaLogo.png'"
            alt="no image"
            class="h-20"
            >
        </div>
        <div class="font-sofia text-white text-2xl">
            <p>
                — український бренд жіночого одягу, для впевненої жінки, такої різної, жіночної, легкої, енергійної й елегантної.
                Створюючи одяг – наші спеціалісти сповнюють жінку шармом, шиють одяг, від вишуканої сукні до зручного повсякденного
                одягу для прогулянок та для комфортної роботи в офісі.
            </p>     
            <br>   
            <p>
                Автори ТМ Парада прагнуть завжди бути на висоті, та розвивати ринок
            </p>      

            <p class="font-black">
                made in Ukraine
            </p>
            <p>
                продемонструвати, що одяг зроблений в Україні є якісним, доступним і зроблений зі смаком. 
            </p>
            <br>
            <p>
                Ми використовуємо передові елементи, якісну фурнітуру та тканини, які додадуть оновленої форми та стилю одягу ТМ Парада. 
            </p>
            <br>
            <p>
                Ужгородська швейна фабрика — успішне українське підприємство з хорошою репутацією,
                що створює жіночий одяг, який користується попитом і за межами країни.
            </p>
    

        </div>
        </div>

        
        <div class="bg-white w-1/3">
            <div class="bg-blue-800 h-2/3">image</div>
            <div class="p-4 gap-4 flex">
                <router-link to="/about" class="mt-12 border-2 border-black transition-all duration-500
                    bg-transparent hover:bg-black hover:text-white rounded-full
                    hover:-translate-y-1">
                        <p class="font-sofia w-32 my-2 text-center">
                            Інформація
                        </p>
                </router-link>
                <router-link to="/" class="mt-12 border-2 border-black transition-all duration-500
                    bg-transparent bg-black font-black hover:bg-white hover:text-black text-white rounded-full
                    hover:-translate-y-1">
                        <p class="font-sofia w-32 my-2 text-center">
                            Додому
                        </p>
                </router-link>
        </div>
        </div>
        
    </div>
</template>