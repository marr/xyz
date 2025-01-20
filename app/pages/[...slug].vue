<script setup lang="ts">
const { data: home } = await useAsyncData(() => queryCollection('content').path('/').first())

useSeoMeta({
  title: home.value?.title,
  description: home.value?.description
})
</script>

<template>
  <ContentRenderer v-if="home" :value="home" class="prose dark:prose-invert prose-slate md:prose-lg lg:prose-xl"/>
  <div v-else>Home not found</div>
</template>
