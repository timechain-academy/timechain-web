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
						<ContentDoc path="/" class="prose dark:prose-invert" />
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

			<ContentDoc path="/codeblock" class="prose dark:prose-invert text-left" />
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


/* .dark body {
      background-color: rgb(15 23 42);
      color: #ebf4f1;
    }  */

/* @tailwind base; 

@layer base {
*/
		/* p {
			@apply text-xl text-gray-500 mb-6;
		} */
/* 		
		h1 {
			@apply text-5xl md:text-6xl font-bold mb-6;
		}
		h2 {
			@apply text-3xl md:text-4xl font-bold mb-4;
		}
	}   */

</style>
