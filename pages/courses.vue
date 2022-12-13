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
            <div class="p-6">
                <ContentDoc path="/courses" class="table-auto prose dark:prose-invert justify-center" />
                <!-- <table class="table-auto bg-white dark:bg-slate-900 dark:text-white ">
                    <thead>
                        <tr>
                            <th class="px-4 py-2">Title</th>
                            <th class="px-4 py-2">Instructor</th>
                            <th class="px-4 py-2">Start Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="border px-4 py-2">Intro to CSS</td>
                            <td class="border px-4 py-2">Adam</td>
                            <td class="border px-4 py-2">10/8/2022</td>
                        </tr>
                        <tr>
                            <td class="border px-4 py-2 dark-mode:bg-slate-400">A Long and Winding Tour of the History of UI Frameworks and
                                Tools and the Impact on Design</td>
                            <td class="border px-4 py-2">Adam</td>
                            <td class="border px-4 py-2">11/9/2022</td>
                        </tr>
                        <tr>
                            <td class="border px-4 py-2">Intro to JavaScript</td>
                            <td class="border px-4 py-2">Chris</td>
                            <td class="border px-4 py-2">12/2/2022</td>
                        </tr>
                    </tbody>
                </table> -->
            </div>
            <section>
              <p class="dark:text-white p-6 flex items-center">
                Interested in teaching? 
                <a class="font-medium font-bold text-orange-600  hover:text-gray-400 dark:hover:text-gray px-4 py-3 flex items-center transition duration-150 ease-in-out"
                href="https://github.com/bitkarrot/timechain-web/blob/master/content/courses.md">
                + Add your Course
                </a>       
                </p>
            </section>
        </div>
        <Footer/>
        </NuxtLayout>
</template>

<script setup> 
  const layout = "default";
</script>