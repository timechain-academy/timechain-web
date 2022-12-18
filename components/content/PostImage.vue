<template>
    <div class="grid place-items-center">
        <nuxt-img :src=path :width=wd :height=ht></nuxt-img>
    </div>
</template>

<script>
 
export default { 
    name: 'Postimage',
    props: { 
        path: String,
        wd: Number,
        ht: Number,
    }
}
</script>