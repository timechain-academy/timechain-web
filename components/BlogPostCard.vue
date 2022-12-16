<template>
<!--
  This component uses @tailwindcss/line-clamp

  yarn add @tailwindcss/line-clamp
  npm install @tailwindcss/line-clamp

  plugins: [require('@tailwindcss/line-clamp')]
-->
<div class="p-6 py-6">

<article class="flex bg-white transition hover:shadow-xl">
  <div class="rotate-180 p-2 [writing-mode:_vertical-lr]">
    <time
      datetime="2022-10-10"
      class="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
    >
      <span class="w-px flex-1 bg-gray-900/10"></span>
      <span>{{ post.date }}</span>
    </time>
  </div>
  
  <div class="hidden sm:block sm:basis-56">
    <img
      alt="Guitar"
      :src=post.image
      class="aspect-square h-full w-full object-cover"
    />
  </div>

  <div class="flex flex-1 flex-col justify-between">
    <div class="border-l border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
      <a href="#">
        <h3 class="font-bold uppercase text-gray-900">
          {{ post.title }}
        </h3>
      </a>

      <p class="mt-2 text-sm leading-relaxed text-gray-700 line-clamp-3">
       {{ post.description }}

      </p>
    </div>

    <div class="sm:flex sm:items-end sm:justify-end">
      <a
        :href=post._path
        class="block bg-indigo-700 text-white px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-indigo-500"
      >
        Read Blog
      </a>
    </div>
  </div>
</article>

</div>
</template>


<script>
export default { 
  name:'BlogPostCard',
  props: { 
    post: Object
  }
}
</script>