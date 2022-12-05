<template>
  <header
    class="sticky top-0 z-40 flex-none mx-auto w-full  bg-white  md:bg-white/90 dark:bg-slate-900 dark:md:bg-slate-900/90 md:backdrop-blur-sm border-b dark:border-b-0">
    <div class="py-3 px-3 mx-auto w-full md:flex md:justify-between max-w-6xl md:px-4">
      <div class="flex justify-between">
        <a class="flex items-center" href="#">
          <Logo />
        </a>
        <div class="flex items-center md:hidden"></div>
      </div>
      <nav class="items-center w-full md:w-auto hidden md:flex  h-screen md:h-auto" id="menu">
        <ul class="flex flex-col pt-8 md:pt-0 md:flex-row md:self-center md:w-auto collapsed text-xl md:text-base">
          <li>
            <a class="font-medium hover:text-gray-400 dark:hover:text-white px-4 py-3 flex items-center transition duration-150 ease-in-out"
              href="/#">
              Pages
            </a>
          </li>
          <li>
            <a class="font-medium hover:text-gray-400 dark:hover:text-white px-4 py-3 flex items-center transition duration-150 ease-in-out"
              href="/#">
              Resources
            </a>
          </li>
          <li>
            <a class="font-medium hover:text-gray-400 dark:hover:text-white px-4 py-3 flex items-center transition duration-150 ease-in-out"
              href="/#">
              Blog
            </a>
          </li>
          <li class="md:hidden">
            <a class="font-bold hover:text-gray-900 dark:hover:text-white px-4 py-3 flex items-center transition duration-150 ease-in-out"
              href="https://github.com/bitkarrot/tailnuxt">
              Github
            </a>
          </li>
        </ul>
        <div class="md:self-center flex items-center mb-4 md:mb-0 ml-2">
          <div class="hidden items-center md:flex">
            <button @click="toggleDarkMode"
              class="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5">
              <IconSun class="w-5 h-5" />
            </button>
            <a href="https://github.com/bitkarrot/tailnuxt"
              class="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5">
              <GitIcon class='w-5 h-5' />
            </a>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>


<script setup>
const colorMode = useColorMode()
console.log("initial color mode: ", colorMode.preference)
function toggleDarkMode() {
  if (colorMode.preference === "dark") {
    colorMode.preference = "light"
  } else if (colorMode.preference == "light") {
    colorMode.preference = "dark"
  }
  console.log("local is now set to : ", colorMode.preference)
}
</script>


<style>
    body {
      background-color: #fff;
      color: rgba(0, 0, 0, 0.8);
    }

    .dark-mode body {
      background-color: rgb(15 23 42);
      color: #ebf4f1;
    }

     .bg-white {
      --tw-bg-opacity: 1;
      background-color: rgb(255 255 255 / var(--tw-bg-opacity));
    } 
    
    @media (min-width: 768px) {
      .dark-mode .dark\:md\:bg-slate-900\/90 {
        background-color: rgb(15 23 42 / 0.9);
      }
    }

    @media (min-width: 768px) {
      .md\:bg-white\/90 {
        background-color: rgb(255 255 255 / 0.9);
      }
    }

</style>