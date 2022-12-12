<template>
  <NuxtLayout :name="layout">
    <Header />
    <!--
                    This page needs to read content dynamically from a component
     -->
    <main class="bg-white md:bg-white/90 dark:bg-slate-900 dark:md:bg-slate-900 border-b dark:border-b-0">
      <div class="py-6 text-center pb-10 md:pb-16 max-w-4xl mx-auto">
        <h1 class="text-5xl md:text-6xl dark:text-white font-bold leading-tighter tracking-tighter mb-6 font-heading">
          Events
        </h1>
        <section>
          <div class="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
              <div class="relative z-10 lg:py-16">
                <div class="relative h-64 sm:h-80 lg:h-full">
                  <nuxt-img alt="Events" src="/sample-imgs/sd3.png"
                    class="absolute inset-0 h-full w-full object-cover" />
                </div>
              </div>
              <div class="relative flex items-center bg-gray-100">
                <span class="hidden lg:absolute lg:inset-y-0 lg:-left-16 lg:block lg:w-16 lg:bg-gray-100"></span>

                <div class="p-8 sm:p-16 lg:p-24">
                  <h2 class="text-2xl font-bold sm:text-3xl text-black">
                    Join our Awesome Events.
                  </h2>

                  <p class="mt-4 text-gray-600">
                    This is an Event Calendar placeholder.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  </NuxtLayout>
</template>

<script setup>
const layout = "default";
</script>