<template>
    <NuxtLayout :name="layout">
        <Header />
            <LandingHero />
            <LandingKickstart/>
            <LandingSplash />
    </NuxtLayout>
</template>

<script setup> 
  const layout = "default";
</script>

