<template>
    <!--
                    This page needs to read content dynamically from a component
     -->
    <main>
            <div class="text-center py-6"> 
                <h1 class="text-5xl md:text-6xl font-bold leading-tighter tracking-tighter mb-6 font-heading">         
                1 on 1 sessions
            </h1> 

                <p class="text-lg font-medium ">
                            Book a 1 on 1 session with a timechain academy instructor here. 
            </p>
            </div>

            <div class="grid grid-cols-1 gap-6 lg:gap8 sm:grid-cols-3 lg:grid-cols-3 max-h-[33rem] ">
                <ul class="space-y-8">
                    <li class="text-sm leading-6">
                        <Instructor/>
                    </li>
                    <li class="text-sm leading-6">
                        <Instructor/>
                    </li>
                </ul>
                <ul class="space-y-8">
                    <li class="text-sm leading-6">
                        <Instructor/>
                    </li>
                    <li class="text-sm leading-6">
                        <Instructor/>
                    </li>
                </ul>
                <ul class="space-y-8">
                    <li class="text-sm leading-6">
                        <Instructor/>
                    </li>
                    <li class="text-sm leading-6">
                        <Instructor/>
                    </li>
                </ul>

            </div>
                    
    </main>
</template>