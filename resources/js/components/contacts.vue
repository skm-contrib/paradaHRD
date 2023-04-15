<template>
  <div class="flex flex-col sm:flex-row gap-4 bg-red-400 h-screen">
    <div class="flex flex-col mt-20 items-center sm:w-2/3">
      <div>
        <img
          :src="'/storage/images/ParadaLogoWhite.png'"
          alt="no image"
          class="h-20"
        />
      </div>
      <div class="font-sofia text-white text-2xl mt-10">
        <p>
          <span class="font-black text-4xl">КОНТАКТИ</span>
          <br />
          Менеджер з роздрібної торгівлі:
          <br />
          Телефон: +38 050 43 88 303<br />
          E-Mail: shop@parada-ua.com<br />
          E-Mail: mod@ua-parada.com<br /><br />

          Менеджер з гуртової торгівлі:<br />
          Телефон: +38 050 43 88 303<br />
          E-Mail: mod@ua-parada.com<br /><br />

          Графік роботи:<br />
          Понеділок-П'ятниця 8:30 - 16:30<br />
          Субота - вихідний<br />
          Неділя - вихідний<br />
        </p>
      </div>
    </div>

    <div class="bg-white sm:w-1/3">
      <div class="bg-blue-800 sm:h-4/5">image</div>
      <div class="p-4 gap-4 flex justify-center items-center align-baseline">
        <router-link
          to="/about"
          class="mt-12 border-2 border-black transition-all duration-500 bg-transparent hover:bg-black hover:text-white rounded-full hover:-translate-y-1"
        >
          <p class="font-sofia w-32 my-2 text-center">Інформація</p>
        </router-link>
        <router-link
          to="/"
          class="mt-12 border-2 border-black transition-all duration-500 hover:bg-white font-black bg-black hover:text-black text-white rounded-full hover:-translate-y-1"
        >
          <p class="font-sofia w-32 my-2 text-center">Додому</p>
        </router-link>
      </div>
    </div>
  </div>
</template>
