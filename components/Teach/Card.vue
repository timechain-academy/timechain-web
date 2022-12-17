<template>
    <article class="p-6 block rounded-xl border border-gray-700 bg-gray-800 p-4">
        <div class="flex items-center">
            <img alt="Instructor Image"
                :src=showImage(teacher.image)
                class="h-16 w-16 rounded-full object-cover" />
            <div class="ml-3">
                <h3 class="text-lg font-medium text-white">
                    {{ teacher.author }}
                </h3>
                <div class="ml-3 ">
                    <ul class="-m-1 flex flex-wrap">
                        <li class="p-1 leading-none">
                            <a href="#" class="text-sm font-medium text-gray-300"> 
                            {{ teacher.title }}
                            </a>
                        </li> 
                    </ul>
                </div>
            </div>
        </div>
        <div class="ml-3 p-3">
            <p class="mt-1 text-sm font-medium text-gray-300 text-left">
               {{ teacher.description}}
            </p>
            <p class="mt-3 text-sm text-left" >
                <a :href=teacher.link class="text-sm font-bold text-orange-300 hover:text-gray-500">
                    + Book Me
                </a>
            </p>
        </div>
    </article>
</template>

<script> 
export default { 
    name:'TeachCard',
    props: { 
        teacher: Object,
    },
    methods: { 
        showImage(img){ 
            if (img) { 
                return img
            } else { 
                return "tca-icon.png"
            }
        }, 
    },
}
</script>