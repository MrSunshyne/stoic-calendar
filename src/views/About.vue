<template>
  <div class="container mx-auto">
    <div class="prose py-10 text-gray-500">
      <router-link :to="{ name: 'Home' }" class="flex items-center gap-2 mb-4 text-black"
        ><div>
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"></path>
          </svg>
        </div>
        Back to the calendar</router-link
      >
      <h1>What is a stoic calendar?</h1>
      <p>
        This calendar was designed as an interactive tool to help you harness the concept by visualizing your life week by week. 
        By filling a new square with each passing week, you'll hopefully experience improved focus, a heightened perspective on life, and a rush of motivation to take consistent action.
        Being aware of your mortality may sound scary, but it’s an extremely effective catalyst for reflection and change.
        It puts all the things that don’t matter into perspective, melts away fears, and clears a path for you to focus on what's truly important.
        The weekly ritual of filling in a new square will jolt you into the present moment and give you the motivation and drive to take action week after week.
      </p>
      <h2>Inspiration</h2>
      <p>From this post <a class="text-black" href="https://stoicreflections.com/products/memento-mori-life-calendar-framed">Stoic Reflections</a></p>

      <h2>Contribute?</h2>
      <p>This project open source. Feel free to take a look <a class="text-black" href="https://github.com/MrSunshyne/stoic-calendar"> on github</a></p>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.prose a {
  color: theme(colors.black);
}

.prose a:hover {
  color: theme(colors.gray.500);
}
</style>
>
