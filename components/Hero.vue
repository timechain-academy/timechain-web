<template> 
  <section>
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="py-12 md:py-20">
        <div class="text-center pb-10 md:pb-16 max-w-4xl mx-auto">
          <h1 class="text-5xl md:text-6xl font-bold leading-tighter tracking-tighter mb-6 font-heading">
            Free template for <span class='hidden md:inline'>starting a website using</span>
            <span>
              Nuxt.js
            </span>
            + <span class="sm:whitespace-nowrap">
                Tailwind CSS
            </span>
          </h1>
          <div class="max-w-3xl mx-auto">
            <p class="text-xl text-gray-600 mb-6 dark:text-slate-400">
              <span class='hidden md:inline'>TailNuxt is a production ready template to start your new website using Nuxt.js + Tailwind CSS.</span> It has
              been designed following Best Practices, SEO, Accessibility, Dark Mode, great Page Speed, image
              optimization.
            </p>
            <div class="max-w-none px-4 flex flex-nowrap flex-col sm:flex-row sm:justify-center gap-4">
              <div class="flex w-full sm:w-auto">
                <a
                  class="btn text-white border border-primary-600 bg-primary-600 hover:bg-primary-800 hover:border-primary-800 sm:mb-0 font-bold w-full px-10 py-3 rounded-md"
                  href="https://github.com/bitkarrot/tailnuxt"
                >
                  Get template
                </a>
              </div>
              <div class="flex w-full sm:w-auto">
                <a
                  class="btn bg-transparent border border-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800 w-full px-10 py-3 rounded-md"
                  href="#features"
                >
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="relative mb-8 m-auto max-w-5xl">
            <nuxt-img
              src="https://images.unsplash.com/photo-1502101872923-d48509bff386?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
              width="1024"
              height="576"
              class="mx-auto rounded-md shadow-lg bg-gray-400 dark:bg-slate-700 w-full"/>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<style>
/* change .dark to be .dark-mode so that it can work with @nuxtjs/color-mode  */

.dark-mode .dark\:hover\:bg-gray-800:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(31 41 55 / var(--tw-bg-opacity));
} 
</style>