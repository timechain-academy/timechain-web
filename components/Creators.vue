<template>
<div class="grid grid-cols-2 grid-rows-1 gap-4  dark:text-white">
    <div class="text-center md:flex" v-for="item in items">
        <div class="md:flex-shrink-0">
            <img class="h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto"
                :src="item.imgpath"
                alt="creator">
             <div class="uppercase tracking-wide text-sm text-indigo-600 font-bold">{{item.title}}</div>
            <a :href="item.link" class="block mt-1 text-lg leading-tight font-semibold text-gray-900 dark:text-white hover:underline">
                {{item.name}}
            </a>
        </div>
    </div>
</div>
</template>

<script setup>
    const items = ref([
        { 
            name: 'Randy McMillian', 
            title: 'smurf one', 
            imgpath: '/randy.jpg',
            link: 'https://github.com/RandyMcMillan',
        }, 
        {   
            name: 'Bitkarrot', 
            title: 'smurf two', 
            imgpath:'/bitkarrot.jpg', 
            link: 'https://github.com/bitkarrot',
        },
    ])

</script>