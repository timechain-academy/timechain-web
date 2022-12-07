<template>
    <NuxtLayout :name="layout">
    <Header />
        <main>
            <div class="text-center pb-10 md:pb-16 max-w-4xl mx-auto">
                <h1 class="text-5xl md:text-6xl font-bold leading-tighter tracking-tighter mb-6 font-heading">         
                Resources
                </h1> 
                <p>
                    Place holder text here. 
                </p>
            </div>        
        </main>
    </NuxtLayout>
</template>


<script setup> 
  const layout = "default";
</script>