<template>
  <NuxtLayout :name="layout">
    <Header />
    <main class="py-6 bg-white md:bg-white/90 dark:bg-slate-900 dark:md:bg-slate-900 border-b dark:border-b-0">
      <div class="py-6 text-center pb-10 md:pb-16 max-w-4xl mx-auto">
        <h1 class="text-5xl md:text-6xl dark:text-white font-bold leading-tighter tracking-tighter mb-6 font-heading">
          Connect
        </h1>
        <p class="py-6 dark:text-white font-bold">
          Join us on Discord, Twitter, or Github
        </p>
          <div class="p-4">
            <a href="https://github.com/timechain-academy"
              class="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-300 rounded-lg text-sm p-2.5">
              <DiscordIcon class='w-10 h-10' />  
            </a>

            <a href="https://twitter.com/timechainAcdmy"
              class="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-300 rounded-lg text-sm p-2.5">
              <TwitterIcon class="w-10 h-10" />
            </a>

            <a href="https://github.com/timechain-academy/timechain-web"
              class="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-300 rounded-lg text-sm p-2.5">
              <GitIcon class='w-10 h-10' />
            </a>
          </div>

          <h3 class="p-8 text-5xl md:text-6xl dark:text-white font-bold leading-tighter tracking-tighter mb-6 font-heading">
          Creators
          </h3>
            <div class="p-8 content-center"> 
            <Creators/>
            </div>

          <h3 class="p-8 sm:p-16 lg:p-24 text-5xl md:text-6xl dark:text-white font-bold leading-tighter tracking-tighter mb-6 font-heading">
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