<template>
  <NuxtLayout :name="layout">
    <Header />
    <main class="bg-white md:bg-white/90 dark:bg-slate-900 dark:md:bg-slate-900 border-b dark:border-b-0">
      <div class="py-6 text-center pb-10 md:pb-16 max-w-4xl mx-auto">
        <h1 class="text-5xl md:text-6xl dark:text-white font-bold leading-tighter tracking-tighter mb-6 font-heading">
          Events
        </h1>
        <section class="flex">
              <h2 class="flex-1 text-3xl font-bold dark:text-white">
                <a href="/events#upcoming-events" :class="upcoming" @click="isOpen = true"> Upcoming </a>
                &nbsp; | &nbsp;
                <a href="/events#past-events" :class="past" @click="isOpen = false"> Past Events </a>     
              </h2>
        </section>

        <!-- add your event -->
        <section class="flex">
              <p class="flex-1 dark:text-white p-6 items-center">
                Interested in teaching or hosting? 
                <a class="font-medium font-bold text-indigo-600 dark:text-orange-300 hover:text-gray-400 dark:hover:text-gray-400 px-4 py-3 flex-1 transition duration-150 ease-in-out"
                  href="https://github.com/timechain-academy/timechain-web/blob/master/content/upcoming_events.md">
                  + Add your Event
                </a>
              </p>
        </section>

        <!-- calendar here -->
        <section class="flex p-8 justify-center">
          <ContentDoc :path=drawer() class="flex-1 mr-2 prose dark:prose-invert" />
        </section>

      </div>
    </main>
  </NuxtLayout>
</template>

<script>
export default {
  data() {
    return {
      isOpen: true,
      layout: "default",
      upcoming: "text-indigo-600 dark:text-orange-300 hover:text-gray-400 dark:hover:text-gray-400",
      past: "text-gray-900 dark:text-white hover:text-gray-400 dark:hover:text-gray-400"
    };
  },
  methods: {
    drawer() {
      if (this.isOpen) { 
        this.contentpath = "/upcoming_events"; 
        this.past = "text-gray-900 dark:text-white hover:text-gray-400 dark:hover:text-gray-400";
        this.upcoming = "text-indigo-600 dark:text-orange-300 hover:text-gray-400 dark:hover:text-gray-400";
      } else { 
        this.contentpath = "/past_events";
        this.upcoming = "text-gray-900 dark:text-white hover:text-gray-400 dark:hover:text-gray-400";
        this.past = "text-indigo-600 dark:text-orange-300 hover:text-gray-400 dark:hover:text-gray-400";
      }
      return this.contentpath;
    }
  }
}
</script>
