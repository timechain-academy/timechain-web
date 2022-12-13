<template>
  <NuxtLayout :name="layout">
    <Header />
    <main class="py-6 bg-white md:bg-white/90 dark:bg-slate-900 dark:md:bg-slate-900 border-b dark:border-b-0">
      <div class="py-6 text-center pb-10 md:pb-16 max-w-4xl mx-auto">
        <h1 class="text-5xl md:text-6xl dark:text-white font-bold leading-tighter tracking-tighter mb-6 font-heading">
          Connect
        </h1>
        <p class="py-6 dark:text-white">
          Join us on Discord, Twitter or Github
        </p>
          <div class="p-8 sm:p-16 lg:p-24">
            <a href="https://github.com/timechain-academy"
              class="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-300 rounded-lg text-sm p-2.5">
              <DiscordIcon class='w-10 h-10' />  
            </a>

            <a href="https://twitter.com/timechainAcdmy"
              class="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-300 rounded-lg text-sm p-2.5">
              <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter"
                class="h-10 w-10 fill-current text-gray-600" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="gray-300"
                  d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z">
                </path>
              </svg>
            </a>

            <a href="https://github.com/timechain-academy/timechain-web"
              class="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-300 rounded-lg text-sm p-2.5">
              <GitIcon class='w-10 h-10' />
            </a>
          </div>

          <h3 class="text-5xl md:text-6xl dark:text-white font-bold leading-tighter tracking-tighter mb-6 font-heading">
          Creators
          </h3>
          <div class="p-8 sm:p-16 lg:p-24 dark:text-white font-bold">
            Who made this crazy place? 
            <div class="grid grid-cols-2 gap-1 py-3">
              <Card/>
              <Card/>
            </div>

          </div>

          <h3 class="text-5xl md:text-6xl dark:text-white font-bold leading-tighter tracking-tighter mb-6 font-heading">
          Sponsors
          </h3>
          <p class="dark:text-white">
            Your Name could be here!
          </p>
          <div class="p-8 sm:p-16 lg:p-24 dark:text-white font-bold">
            <a
                  class="btn text-white border border-primary-600 bg-primary-600 hover:bg-primary-800 hover:border-primary-800 sm:mb-0 font-bold px-10 py-3 rounded-md"
                  href=""
                >
                  Donate
                </a>
          </div>


      </div>
    </main>
  </NuxtLayout>
</template>
  
<script setup>
  const layout = "default";
</script>