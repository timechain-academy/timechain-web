<template>
    <div class="container">
        <section class="articles">
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
