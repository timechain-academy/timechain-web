<template>
    <div class="mt-8 p-6 grid grid-cols-1 gap-8 md:grid-cols-2  dark:text-white">
            <TeachCard 
            v-for="teacher in teachList" 
            :key="teacher._path" 
            :teacher="teacher" />
    </div>
</template>

<script setup>
const { data: teachList } = useAsyncData('teachList', () => {
        return queryContent('/instructors').find()
    })
</script>
