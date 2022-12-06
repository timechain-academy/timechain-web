<template>

    <!-- TODO: turn this into an actual component with dynamic cards -->

    <figure class="relative flex flex-col-reverse bg-slate-50 rounded-lg p-6 dark:bg-slate-800 dark:highlight-white/5">
        <blockquote class="mt-6 text-slate-700 dark:text-slate-300">
            <p>Tailwind solves a complex problem in an elegant way. It provides a ready-to-use UI, all while not
                compromising on enabling developers to quickly build anything imaginable.</p>
        </blockquote>
        <figcaption class="flex items-center space-x-4"><img src="https://tailwindcss.com/_next/static/media/brentgarner.09ab30c4.jpg" alt=""
                class="flex-none w-14 h-14 rounded-full object-cover" loading="lazy" decoding="async">
            <div class="flex-auto">
                <div class="text-base text-slate-900 font-semibold dark:text-slate-300">
                    <a
                        href="/connect" tabindex="-1">
                        <span
                            class="absolute inset-0"></span>Brent Garner
                        </a>
                </div>
                <div class="mt-0.5 text-black">Developer</div>
            </div>
            <div class="text-sky-500 dark:text-sky-400">
               <p> <a href="/connect" class="font-bold">Book a session</a></p>
            </div>
        </figcaption>
    
    </figure>
</template>