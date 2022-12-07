<template>
	<NuxtLayout :name="layout">
    	<Header />
		<main>
		<div class="text-center pb-10 md:pb-16 max-w-4xl mx-auto">
		<h1>
			Blog
        </h1>

		<div class="px-5 mx-auto">
			<div class="text-left">
				This code block below is generated in markdown
				and added here by a `ContentDoc` tag. The section below is text in markdown.
				CSS styles on this page are scoped to the blog.vue page.
			</div>

			<p class="py-5 text-left"><b>Node.js sample code, formatted with color.</b></p>

			<div class="container">
			<ContentDoc path="/codeblock" class="prose text-left" />
	        </div>
		</div>
			<div class="px-5 mx-auto text-left">
				<h2>Not sure why the markdown isn't rendering properly here, need to fix </h2>
				<ContentDoc path="/" class="prose text-left" />
			</div>
    </div>
	</main>
	</NuxtLayout>
</template>

<script setup> 
  const layout = "default";
</script>


<style scoped>
@tailwind base; 

@layer base {
		p {
			@apply text-xl text-gray-500 mb-6;
		}
		h1 {
			@apply text-5xl md:text-6xl font-bold leading-tight tracking-tighter mb-6;
		}
		h2 {
			@apply text-4xl md:text-5xl font-bold leading-tight tracking-tighter mb-4;
		}
	}
	.container {  
		background: #1e1e1e;  
		padding: 2rem 2rem;
		position: relative;  
		margin-top: 1rem;  
		margin-bottom: 1rem;  
		overflow: hidden;  
		border-radius: 0.3rem;}
</style>
