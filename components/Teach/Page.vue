<template>
    <div class="mt-8 p-6 grid grid-cols-1 gap-8 md:grid-cols-2  dark:text-white">
    
        <TeachCard/>
        <TeachCard/>
        <TeachCard/>
        <TeachCard/>

    </div>


</template>

<script setup>
    const people = ref([
        { 
            name: 'Randy McMillian', 
            title: 'Bitcoin Core Developer', 
            imgpath: '/instructors/randy.jpg',
            link: 'https://github.com/RandyMcMillan',
            description: 'A little bit about me.',
        }, 
        {   
            name: 'Bitkarrot', 
            title: 'Lightning Dev', 
            imgpath:'/instructors/bitkarrot.jpg', 
            link: 'https://calendly.com/bitkarrot',
            description: 'A short story about me, an all around haystack',
        },
        {   
            name: 'Instructor One', 
            title: 'Artemis', 
            imgpath:'/tca-icon.png', 
            link: 'https://github.com/',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        },
        {   
            name: 'Instructor Two', 
            title: 'Aquarius', 
            imgpath:'/tca-icon.png', 
            link: 'https://github.com/',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        },

    ])
</script>


<!-- <div class="grid grid-cols-2 gap-4 dark:text-white">
    <div class="justify-center md:flex" v-for="item in people">
        <div class="md:flex-shrink-0">
            <figure class="relative flex flex-col-reverse bg-slate-50 rounded-lg p-6 dark:bg-slate-800 dark:highlight-white/5">

                <blockquote class="mt-6 text-slate-700 dark:text-slate-300">
                    <p>{{item.description}}</p>
                </blockquote>

                <figcaption class="flex items-center space-x-4">
                    <nuxt-img :src="item.imgpath" alt="" class="flex-none w-14 h-14 rounded-full object-cover" loading="lazy"
                        decoding="async" />
                    <div class="flex-auto">
                        <div class="text-base text-slate-900 font-semibold dark:text-slate-300">
                            <NuxtLink :to="item.link" class="underline text-gray-900 dark:text-white hover:underline">
                                {{item.name}}
                            </NuxtLink>
                        </div>
                        <div class="mt-0.5 text-black dark:text-white">
                            <NuxtLink :to="item.link" class="underline text-gray-900 dark:text-white hover:underline">
                                {{item.title}}
                            </NuxtLink>
                
                        </div>
                    </div>
                </figcaption>
            </figure>

        </div>
    </div>
</div> -->

<!-- <template>
    <div class="grid grid-cols-1 gap-6 lg:gap-8 sm:grid-cols-3 lg:grid-cols-3 max-h-[33rem] ">
        <div class="justify-center md:flex" v-for="item in people">

        <figure class="relative flex flex-col-reverse bg-slate-50 rounded-lg p-6 dark:bg-slate-800 dark:highlight-white/5">
            <blockquote class="mt-6 text-slate-700 dark:text-slate-300">
                <p>{{item.description}}</p>
            </blockquote>
            <figcaption class="flex items-center space-x-4">
                <nuxt-img :src="item.imgpath" alt=""
                    class="flex-none w-14 h-14 rounded-full object-cover" loading="lazy" decoding="async" />
                <div class="flex-auto">
                    <div class="text-base text-slate-900 font-semibold dark:text-slate-300">                      
                            <span class="absolute inset-0"></span>{{item.name}}                        
                    </div>
                    <div class="mt-0.5 text-black dark:text-white">{{item.title}}</div>
                </div>
                <div class="text-sky-500 dark:text-sky-400">
                    <p> <a :href="item.link">Book a session</a></p>
                </div>
            </figcaption>
        </figure>
        </div>
    </div>

</template> -->