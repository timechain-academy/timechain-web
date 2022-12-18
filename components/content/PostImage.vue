<template>
    <nuxt-img :src=path width="800"/> 
</template>

<script>
 
export default { 
    name: 'Postimage',
    props: { 
        path: {
            type: String,
            default: ''
        }
    }
}
</script>