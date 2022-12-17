<template>
    <div class="container">
        <section class="articles">
            <div class="max-w-5xl"> 
                <a class="font-medium font-bold text-indigo-600 dark:text-orange-300 hover:text-gray-400 dark:hover:text-gray-400 px-4 py-3 flex-1 transition duration-150 ease-in-out"
                  href="https://github.com/timechain-academy/timechain-web/blob/master/content">
                  + Add a post
                </a>
            </div>
            <div class="column is-8 is-offset-2">

                  <BlogPostCard 
                        v-for="blogPost in blogPostList" 
                        :key="blogPost._path" 
                        :post="blogPost" />
            </div>
        </section>
    </div>
</template>


<script setup>
    const { data: blogPostList } = useAsyncData('blogPostList', () => {
        return queryContent('/posts').find()
    })
</script>
