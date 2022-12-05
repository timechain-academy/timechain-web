<template>
    <NuxtLayout :name="layout">
      <Header />
      <NuxtPage/>
    </NuxtLayout>
  </template>
  
<script setup> 
  const layout = "default";
</script>