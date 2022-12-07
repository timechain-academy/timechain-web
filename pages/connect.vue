<template>
    <!--
                    This page needs to read content dynamically from a component
     -->
     <NuxtLayout :name="layout">
        <Header />
        <div class="text-center pb-10 md:pb-16 max-w-4xl mx-auto">
            <h1 class="text-5xl md:text-6xl font-bold leading-tighter tracking-tighter mb-6 font-heading">
                Connect
            </h1>
            <h3 class="font-bold">
                Examples of things that might go here:
            </h3>
            <div class="py-5"> 
                <p>
                <ul>
                    <li>
                        - A Contact Form
                    </li>
                    <li>
                        - Link to Discord
                    </li>
                    <li>
                        - Register for courses
                    </li>
                    <li>
                        - Book 1 on 1 sessions
                    </li>
                </ul>
                </p>
                <p class="py-6"> FOSS Sites where we can get tailwind components from, with no license, and will
                    blend in with this site: </p>
                    <li >
                        <a href="https://www.hyperui.dev/">https://www.hyperui.dev/</a>
                    </li>
                    <li><a href="https://tailwindcss-forms.vercel.app/">https://tailwindcss-forms.vercel.app/</a>
                    </li>


            </div>
        </div>
    </NuxtLayout>
</template>

<script setup> 
  const layout = "default";
</script>