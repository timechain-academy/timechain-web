<template>
    <NuxtLayout :name="layout">
    	<Header />
        <div class="text-center pb-10 md:pb-16 max-w-4xl mx-auto">
            <h1 class="py-6 text-5xl dark:text-white md:text-6xl font-bold leading-tighter tracking-tighter mb-6 font-heading">
                Courses
            </h1>
            <p class="py-6 text-gray-900 dark:text-white">
               Current courses offered by our fabulous instructors.
            </p>
            <div class="flex p-6 justify-center">
                <ContentDoc path="/courses" class="flex-1 prose dark:prose-invert" />
            </div>
            <section>
              <p class="dark:text-white p-6 flex items-center">
                Interested in teaching? 
                <a class="font-medium font-bold text-indigo-600 dark:text-orange-300  hover:text-gray-400 dark:hover:text-gray px-4 py-3 flex items-center transition duration-150 ease-in-out"
                href="https://github.com/bitkarrot/timechain-web/blob/master/content/courses.md">
                + Add your Course
                </a>       
                </p>
            </section>
        </div>
        </NuxtLayout>
</template>

<script setup> 
  const layout = "default";
</script>