<template>
    <NuxtLayout :name="layout">
        <Header />
        <main class="bg-white md:bg-white/90 dark:bg-slate-900 dark:md:bg-slate-900 border-b dark:border-b-0">
            <div class="text-center pb-10 md:pb-16 max-w-4xl mx-auto">
                <h1 class="py-5 mx-auto text-center text-5xl md:text-6xl text-gray-900 dark:text-white font-bold mb-6">
                    Build
                </h1>

                <div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                    <div class="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
                    <nuxt-img src="/sample-imgs/sd2.png" alt="buildings" class="p-3 mx-auto" width="400" height="400"></nuxt-img>
                    </div>
                    <div>
                        <article class="px-5 mx-auto text-left">
                            <ContentDoc path="/build" class="prose dark:prose-invert" />
                        </article>
                    </div>

                </div>
            </div>
        </main>
    </NuxtLayout>
</template>

<script setup> 
  const layout = "default";
</script>
