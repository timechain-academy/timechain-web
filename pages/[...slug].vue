<template>
        <NuxtLayout :name="layout">
            <Header />
        
            <div class="p-4 text-center pb-10 md:pb-16 max-w-4xl mx-auto">
                <p class="dark:text-white">{{ $route.params }}</p>
                <article class="">
                    <ContentDoc path="/blog" class="p-2 prose dark:prose-invert text-left" />
                </article>
            </div>

        </NuxtLayout>

</template>

<script setup> 
  const layout = "default";
</script>
