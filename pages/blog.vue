<template>
	<NuxtLayout :name="layout">
    	<Header />
		<main class="bg-white md:bg-white/90 dark:bg-slate-900 dark:md:bg-slate-900 border-b dark:border-b-0">
		<div class="text-center pb-10 md:pb-16 max-w-4xl mx-auto">
			<h1 class="py-5 mx-auto text-center text-5xl md:text-6xl text-gray-900 dark:text-white font-bold mb-6">
				 Blog 
			</h1>
			<div class="px-5 mx-auto text-left">
					<article>
						<ContentDoc path="/blog/" class="prose dark:prose-invert" />
					</article>
			</div>
		<div class="px-5 mx-auto text-left">
			<div class="text-gray-900 dark:text-white">
				This code block below is generated in markdown
				and added here by a `ContentDoc` tag. The section below is text in markdown.
				CSS styles on this page are scoped to the blog.vue page.
			</div>

			<p class="py-5 text-gray-900 dark:text-white text-left"><b>Node.js sample code, formatted with color from Markdown source</b>
			</p>

			<ContentDoc path="/blog/codeblock" class="prose dark:prose-invert text-left" />
		</div>
	</div>

</main>
	</NuxtLayout>
</template>

<script setup> 
  const layout = "default";
</script>


<style scoped>
/* change .dark to be .dark-mode so that it can work with @nuxtjs/color-mode  */
</style>
