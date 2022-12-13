<template>
    <NuxtLayout :name="layout">
        <Header />
            <Hero />
            <Kickstart/>
            <Splash />
            <hr/>
          <Footer />
    </NuxtLayout>
</template>

<script setup> 
  const layout = "default";
</script>

