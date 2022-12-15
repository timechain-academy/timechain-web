<template>
  <header
    class="sticky top-0 z-40 flex-none mx-auto w-full bg-white md:bg-white/90 dark:bg-slate-900 dark:md:bg-slate-900 md:backdrop-blur-sm border-b dark:border-b-0">
    <div class="py-3 px-3 mx-auto w-full md:flex md:justify-between max-w-6xl md:px-4">
      <div class="flex justify-between">
        <a class="flex items-center" href="/">
          <IconLogo />
        </a>

          <!-- Mobile toggle -->
          <div class="md:hidden">
            <button @click="drawer">
              <svg 
                class="h-8 w-8 fill-current text-black dark:text-white"
                fill="none" stroke-linecap="round" 
                stroke-linejoin="round" stroke-width="2" 
                viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
      </div>

      <!-- Main Navbar -->
      <nav 
			class="items-center w-full md:w-auto hidden md:flex text-gray-600 dark:text-slate-200 h-[calc(100vh-100px)] md:h-auto overflow-y-auto md:overflow-visible"
			aria-label="Main navigation">
        <ul class="flex flex-col pt-8 md:pt-0 md:flex-row md:self-center md:w-auto collapsed text-xl md:text-base">
            <a class="font-medium hover:text-gray-400 dark:hover:text-gray px-4 py-3 flex items-center transition duration-150 ease-in-out"
              href="/events">
              Events
            </a>
          <li>
            <a class="font-medium hover:text-gray-400 dark:hover:text-gray px-4 py-3 flex items-center transition duration-150 ease-in-out"
              href="/#Kickstart">
              Learn
            </a>
          </li>
          <li>
            <a class="font-medium hover:text-gray-400 dark:hover:text-gray px-4 py-3 flex items-center transition duration-150 ease-in-out"
              href="/build">
              Build
            </a>
          </li>
          <li>
            <a class="font-medium hover:text-gray-400 dark:hover:text-gray px-4 py-3 flex items-center transition duration-150 ease-in-out"
              href="/blog">
              Blog
            </a>
          </li>
          <li>
            <a class="font-medium hover:text-gray-400 dark:hover:text-gray px-4 py-3 flex items-center transition duration-150 ease-in-out"
              href="/connect">
              Connect
            </a>
          </li>
          <li class="md:hidden">
            <a class="font-bold hover:text-gray-900 dark:hover:text-gray px-4 py-3 flex items-center transition duration-150 ease-in-out"
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
          </div>
        </div>
      </nav>
      <!-- End Main Navbar -->

      <!-- Dark Background Transition -->
      <transition enter-class="opacity-0" enter-active-class="ease-out transition-medium" enter-to-class="opacity-100"
        leave-class="opacity-100" leave-active-class="ease-out transition-medium" leave-to-class="opacity-0">
        <div @keydown.esc="isOpen = false" v-show="isOpen" class="z-10 fixed inset-0 transition-opacity">
          <div @click="isOpen = false" class="absolute inset-0 bg-black opacity-50" tabindex="0"></div>
        </div>
      </transition>


       <!-- Begin Drawer Menu -->
       <aside class="p-5 transform top-0 left-0 w-64 bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30" :class="isOpen ? 'translate-x-0' : '-translate-x-full'">
        <div class="close">
          <button class="absolute top-0 right-0 mt-4 mr-4" @click=" isOpen = false">
            <svg 
              class="w-6 h-6"
              fill="none" stroke-linecap="round" 
              stroke-linejoin="round" stroke-width="2"
              viewBox="0 0 24 24" stroke="currentColor">
              <path d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        
        <span @click="isOpen = false" class="flex w-full items-center p-4 border-b">
          <nuxt-img src="/tca-icon.png" width="50" height="50"/>
        </span>

        <ul class="divide-y font-sans">
          <li><a href="/events" @click="isOpen = false" class="my-4 inline-block">Events</a></li>
          <li><a href="/1on1" @click="isOpen = false" class="my-4 inline-block">1on1 Sessions</a></li>
          <li><a href="/build" @click="isOpen = false" class="my-4 inline-block">Build</a></li>
            <li><a href="https://github.com/PLEBNET-PLAYGROUND/" @click="isOpen = false" class="my-4 inline-block">Plebnet</a></li>
            <li><a href="https://timechain-docs.vercel.app/" @click="isOpen = false" class="my-4 inline-block">Tools</a></li>
          <li><a href="/blog" @click="isOpen = false" class="my-4 inline-block">Blog</a></li>
          <li><a href="/connect" @click="isOpen = false" class="my-8 w-full text-center font-semibold cta inline-block bg-blue-500 hover:bg-blue-600 px-3 py-2 rounded text-white">Connect</a></li>
        </ul>

        <div class="follow">
          <p class="italic font-sans text-sm">follow us:</p>
          <div class="social flex space-x-5 mt-4 ">
            <a href="https://twitter.com/timechainAcdmy"
              class="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-300 rounded-lg text-sm p-2.5">
              <IconTwitter/>
            </a>
            <a href="https://github.com/timechain-academy"
              class="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-300 rounded-lg text-sm p-2.5">
              <IconGit class='w-5 h-5' />
            </a>
            <button @click="toggleDarkMode"
              class="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-300 rounded-lg text-sm p-2.5">
              <IconSun class="w-5 h-5" />
            </button>
          </div>
        </div>
      </aside>
       <!-- End Drawer Menu -->

    </div>
  </header>
</template>


<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggleDarkMode() {
      let colorMode = useColorMode()
      if (colorMode.preference === "dark") {
        colorMode.preference = "light"
      } else if (colorMode.preference == "light") {
        colorMode.preference = "dark"
      } else if (colorMode.preference == "system") {
        colorMode.preference = "dark"
      }
      console.log("local is now set to : ", colorMode.preference)
    },
    drawer() {
      this.isOpen = !this.isOpen;
    }
  },
  watch: {
    isOpen: {
      immediate: true,
      handler(isOpen) {
        if (process.client) {
          if (isOpen) document.body.style.setProperty("overflow", "hidden");
          else document.body.style.removeProperty("overflow");
        }
      }
    }
  },
  mounted() {
    document.addEventListener("keydown", e => {
      if (e.keyCode == 27 && this.isOpen) this.isOpen = false;
    });
  }
};
</script>
