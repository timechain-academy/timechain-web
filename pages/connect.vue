<template>
  <NuxtLayout :name="layout">
    <Header />
    <main class="py-6 bg-white md:bg-white/90 dark:bg-slate-900 dark:md:bg-slate-900 border-b dark:border-b-0">
      <div class="py-6 text-center pb-10 md:pb-16 max-w-4xl mx-auto">
        <h1 class="text-5xl md:text-6xl dark:text-white font-bold leading-tighter tracking-tighter mb-6 font-heading">
          Connect
        </h1>
        <div class="p-4 content-center"> 
            <Stats/>
            </div>
        <h2 class="p-2 dark:text-white font-bold text-3xl md:text-4xl">
          Join us on Discord, Twitter, or Github
        </h2>
          <div class="">
            <a href="https://discord.gg/XkxafTyQZC"
              class="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-300 rounded-lg text-sm p-2.5">
              <IconDiscord class='w-10 h-10' />  
            </a>

            <a href="https://twitter.com/timechainAcdmy"
              class="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-300 rounded-lg text-sm p-2.5">
              <IconTwitter class="w-10 h-10" /> 
            </a>

            <a href="https://github.com/timechain-academy"
              class="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-300 rounded-lg text-sm p-2.5">
              <IconGit class='w-10 h-10' />
            </a>
          </div>

          <div class="p-10">
              <h3 class="p-8 text-5xl md:text-6xl dark:text-white font-bold leading-tighter tracking-tighter mb-6 font-heading">
              Creators
            </h3>
            <div class="content-center"> 
              <Creators/>
            </div>
        </div>

        <div class="p-10">
          <h3 class="p-8 sm:p-16 lg:p-24 text-5xl md:text-6xl dark:text-white font-bold leading-tighter tracking-tighter mb-6 font-heading">
          Sponsors
          </h3>
          <p class="dark:text-white">
            Your Name could be here!
          </p>
          <div class="p-8 sm:p-16 lg:p-24 dark:text-white font-bold">
            <a
                  class="btn text-white border border-indigo-600 bg-indigo-600 hover:bg-indigo-800 hover:border-indigo-800 sm:mb-0 font-bold px-10 py-3 rounded-md"
                  href=""
                >
                  Donate
                </a>
          </div>
        </div>

      </div>
    </main>
  </NuxtLayout>
</template>
  
<script setup>
  const layout = "default";
</script>
