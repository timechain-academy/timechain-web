<template>
    <NuxtLayout :name="layout">
    	<Header />
        <div class="text-center pb-10 md:pb-16 max-w-4xl mx-auto">
            <h1 class="py-6 text-5xl dark:text-white md:text-6xl font-bold leading-tighter tracking-tighter mb-6 font-heading">
                Courses
            </h1>
            <p class="py-6 text-gray-900 dark:text-white">
                Description about the course setup here. 
            </p>
            <div class="py-6">
                <table class="table-auto bg-white dark:bg-slate-900 dark:text-white ">
                    <thead>
                        <tr>
                            <th class="px-4 py-2">Title</th>
                            <th class="px-4 py-2">Author</th>
                            <th class="px-4 py-2">Views</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="border px-4 py-2">Intro to CSS</td>
                            <td class="border px-4 py-2">Adam</td>
                            <td class="border px-4 py-2">858</td>
                        </tr>
                        <tr>
                            <td class="border px-4 py-2 dark-mode:bg-slate-400">A Long and Winding Tour of the History of UI Frameworks and
                                Tools and the Impact on Design</td>
                            <td class="border px-4 py-2">Adam</td>
                            <td class="border px-4 py-2">112</td>
                        </tr>
                        <tr>
                            <td class="border px-4 py-2">Intro to JavaScript</td>
                            <td class="border px-4 py-2">Chris</td>
                            <td class="border px-4 py-2">1,280</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        </NuxtLayout>
</template>

<script setup> 
  const layout = "default";
</script>