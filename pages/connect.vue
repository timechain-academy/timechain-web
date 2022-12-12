<template>
    <NuxtLayout :name="layout">
      <Header />
      <!--
                      This page needs to read content dynamically from a component
       -->
      <main class="bg-white md:bg-white/90 dark:bg-slate-900 dark:md:bg-slate-900 border-b dark:border-b-0">
        <div class="text-center pb-10 md:pb-16 max-w-4xl mx-auto">
          <h1 class="text-5xl md:text-6xl dark:text-white font-bold leading-tighter tracking-tighter mb-6 font-heading">
            Connect
          </h1>
          <div class="p-8 sm:p-16 lg:p-24">
                    <h2 class="text-2xl font-bold sm:text-3xl text-black dark:text-white">
                      Join us on Discord, Twitter, Github
                    </h2>
                    <a href="#"
                      class="mt-8 inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500">
                      Get in Touch
                    </a>
                  </div>


        </div>
      </main>
    </NuxtLayout>
  </template>
  
  <script setup>
  const layout = "default";
  </script>