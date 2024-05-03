<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  msg: string
}>()

const form = ref({
  a: 1,
  b: 2,
  c: 3,
  d: 4,
})

async function register() {
  await new Promise(() => ({
    a: form.value.a,
    b: form.value.b,
    c: form.value.c,
    d: form.value.d,
  }))
}
void register()
</script>

<template>
  <div class="greetings">
    <h1 class="green">
      {{ msg }}
    </h1>
    <h3>
      You’ve successfully created a project with
      <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.
    </h3>
  </div>
  {{ form }}
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
