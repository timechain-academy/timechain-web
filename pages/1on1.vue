<template>
        <NuxtLayout :name="layout">
         <Header />
            <div class="flex text-center p-6">
                <div class="flex-1">
                    <h1 class="text-5xl md:text-6xl dark:text-white  font-bold leading-tighter tracking-tighter mb-6 font-heading">
                        1 on 1 sessions
                    </h1>
                    <p class=" text-lg font-medium dark:text-white">
                        Book a 1 on 1 session with a timechain academy instructor here.
                    </p>
                </div>
            </div>
            <div class="flex text-center py-6">
                    <div class="flex-1 p-6">
                        <Instructor />
                    </div>
            </div>
        </NuxtLayout>
</template>

<script setup> 
    const layout = "default";
</script>