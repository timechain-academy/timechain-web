<template>
        <NuxtLayout :name="layout">  
            <Header/>
                    <h2 class="py-6 flex-1 text-2xl text-center font-bold dark:text-white underline">
                        <a href="/blog" :class="headerClass" @click="isOpen = true"> Back to Blog List </a>
                    </h2>

                    <div class="p-6 text-left max-w-4xl mx-auto dark:text-white">
                        <p>Date: {{blogPost.date}}</p>
                        <p>Title: {{blogPost.title}}</p>
                        <p>Author: {{blogPost.author}}</p>

                    </div>
                   <ContentDoc class="p-6 prose dark:prose-invert text-left max-w-4xl mx-auto" />
        </NuxtLayout>
</template>


<script setup>
    const layout = "default";
    const { path } = useRoute()
    const headerClass = "text-indigo-700 dark:text-orange-300 hover:text-gray-400 dark:hover:text-gray-400";

    const { data: blogPost } = await useAsyncData(`content-${path}`, () => {
        return queryContent().where({ _path: path }).findOne()
    })

</script>
