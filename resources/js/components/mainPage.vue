<template>
  <div class="font-sofia flex flex-row">
    <div id="getIn" class="flex flex-col justify-center items-center">
      <div>
        <img
          :src="'/storage/images/ParadaLogo.png'"
          alt="no image"
          class="pt-18 px-32"
        />
      </div>

      <div>
        <h1 class="text-4xl font-sofia">Відділ кадрів</h1>
        <p
          class="text-2xl font-bold text-center text-neutral-700 visible sm:invisible"
          @click="openInfo()"
        >
          Інформація
        </p>
      </div>
      <div>
        <router-link to="/login">
          <button
            class="mt-12 text-white transition-all duration-500 bg-red-400 rounded-full shadow-red-600/60 shadow-lg hover:-translate-y-1"
          >
            <p class="font-sofia text-2xl mx-10 p-4">Увійти</p>
          </button>
        </router-link>
      </div>
    </div>
    <div
      id="info"
      class="bg-red-400 w-0 invisible sm:visible sm:w-full flex flex-col h-screen shadow-red-600/60 shadow-2xl"
    >
      <div class="m-auto">
        <p class="text-white font-sofia font-light text-xl sm:text-4xl mx-10">
          <span class="font-bold"
            >Праця нашого підприємства <br />
            — <br />
          </span>
          це великий досвід, це справа, яка приносить задоволення та радість —
          створювати красу, піднімати настрій прекрасній половині людства.
          Ужгородська швейна фабрика — свідок 75-річної історії моди, яка
          творилася на її очах і разом з нею, працювала у період кардинальних
          змін.
        </p>
      </div>

      <div class="p-4 gap-4 flex justify-end sm:pr-44 pb-10">
        <button
          id="closeinfobtn"
          class="invisible sm:invisible mt-12 px-2 border-2 border-black transition-all duration-500 bg-transparent hover:bg-black hover:text-white rounded-full hover:-translate-y-1"
          @click="closeInfo()"
        >
          Закрити
        </button>
        <router-link
          to="/about"
          class="mt-12 border-2 border-black transition-all duration-500 bg-transparent hover:bg-black hover:text-white rounded-full hover:-translate-y-1"
        >
          <p class="font-sofia w-32 my-2 text-center">Інформація</p>
        </router-link>
        <router-link
          to="/contacts"
          class="mt-12 border-2 border-black transition-all duration-500 bg-transparent hover:bg-black hover:text-white rounded-full hover:-translate-y-1"
        >
          <p class="font-sofia w-32 my-2 text-center">Контакти</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    openInfo() {
      document.getElementById("getIn").classList.add("invisible");
      document.getElementById("getIn").classList.add("w-0");

      document.getElementById("info").classList.add("visible");
      document.getElementById("info").classList.remove("invisible");
      document.getElementById("info").classList.remove("w-0");
      document.getElementById("info").classList.add("w-screen");
      document.getElementById("closeinfobtn").classList.remove("invisible");
      document.getElementById("closeinfobtn").classList.add("visible");
    },
    closeInfo() {
      document.getElementById("info").classList.add("invisible");
      document.getElementById("info").classList.add("w-0");

      document.getElementById("getIn").classList.add("visible");
      document.getElementById("getIn").classList.remove("invisible");
      document.getElementById("getIn").classList.remove("w-0");
      document.getElementById("getIn").classList.add("w-screen");
      document.getElementById("closeinfobtn").classList.remove("visible");
      document.getElementById("closeinfobtn").classList.add("invisible");
    },
  },
};
</script>
