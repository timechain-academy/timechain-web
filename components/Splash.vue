<template>
<section>
<!-- <section class="bg-white md:bg-white/90 dark:bg-slate-900 dark:md:bg-slate-900 border-b dark:border-b-0"> -->
        <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                <div class="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
                    <nuxt-img alt="Party"
                    src="/sample-imgs/sd6.png"
                    class="absolute inset-0 h-full w-full object-cover" />
                </div>

                <div class="lg:py-24">
                    <h2 class="text-3xl font-bold dark:text-white sm:text-4xl">Expand your mind</h2>

                    <p class="mt-4 text-gray-600 dark:text-slate-400">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui hic
                        atque tenetur quis eius quos ea neque sunt, accusantium soluta minus
                        veniam tempora deserunt? Molestiae eius quidem quam repellat.
                    </p>

                    <a href="/connect"
                        class="mt-8 inline-flex items-center rounded border border-indigo-600 bg-indigo-600 px-8 py-3 text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500">
                        <span class="text-sm font-medium"> Connect with us </span>

                        <svg class="ml-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>