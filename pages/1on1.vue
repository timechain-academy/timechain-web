<template>
        <NuxtLayout :name="layout">
         <Header />
            <div class="flex text-center p-6">
                <div class="flex-1">
                    <h1 class="text-5xl md:text-6xl dark:text-white  font-bold leading-tighter tracking-tighter mb-6 font-heading">
                        1 on 1 sessions
                    </h1>
                    <p class=" text-lg font-medium dark:text-white">
                        Book a 1 on 1 session with a timechain academy instructor here.
                    </p>
                    <a class="font-medium font-bold text-indigo-600 dark:text-orange-300 hover:text-gray-400 dark:hover:text-gray-400 px-4 py-3 flex-1 transition duration-150 ease-in-out"
                  href="https://github.com/timechain-academy/timechain-web/blob/master/content">
                  + Add an instructor
                    </a>
                </div>
            </div>
            <div class="flex p-3 text-center">
                <TeachPage />
            </div>
        </NuxtLayout>
</template>

<script setup> 
    const layout = "default";
</script>