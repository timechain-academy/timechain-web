<template>
    <NuxtLayout :name="layout">
        <Header />
            <Hero />
            <Kickstart/>
            <Splash />
    </NuxtLayout>
</template>

<script setup> 
  const layout = "default";
</script>

