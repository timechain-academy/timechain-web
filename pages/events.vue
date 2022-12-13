<template>
  <NuxtLayout :name="layout">
    <Header />
    <main class="bg-white md:bg-white/90 dark:bg-slate-900 dark:md:bg-slate-900 border-b dark:border-b-0">
      <div class="py-6 text-center pb-10 md:pb-16 max-w-4xl mx-auto">
        <h1 class="text-5xl md:text-6xl dark:text-white font-bold leading-tighter tracking-tighter mb-6 font-heading">
          Events
        </h1>
        <section>
          <ul class="flex">
            <li class="flex-1 mr-2">
              <a class="text-center block border border-blue-500 rounded py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white"
                href="#">Upcoming</a>
            </li>
            <li class="flex-1 mr-2">
              <a class="text-center block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-2 px-4"
                href="#">Past Events</a>
            </li>
          </ul>
        </section>

        <section class="flex p-8 justify-center">
          <!-- calendar here -->
          <ContentDoc path="/upcoming_events" class="flex-1 mr-2 prose dark:prose-invert" />
          </section>
          <section class="flex p-8 justify-center">
          <ContentDoc path="/past_events" class="flex-1 mr-2 prose dark:prose-invert" />
        </section>
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

        <section>
          <p class="dark:text-white py-6">
            <a class="font-medium hover:text-gray-400 dark:hover:text-gray px-4 py-3 flex items-center transition duration-150 ease-in-out"
              href="/">
            + Add your Event   
            </a>       
          </p>
        </section>
      </div>
    </main>
  </NuxtLayout>
</template>

<script setup>
const layout = "default";
</script>