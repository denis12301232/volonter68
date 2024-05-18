<script setup lang="ts">
const { t } = useI18n();
const route = useRoute();
definePageMeta({ layout: 'default' });
useSeoMeta({
  title: `${t('news.report.pageTitle')} | Волонтер 68, Харків`,
  description: t('news.report.pageTitle'),
});
const { $api } = useNuxtApp();
const params = reactive({ id: computed(() => String(route.params.id)) });
const { data, pending } = $api.news.show(params, { watch: [params] });
</script>

<template>
  <div v-if="pending" class="flex h-screen w-screen items-center justify-center">
    <Wheel class="text-blue-700" size="50" />
  </div>
  <div v-else-if="data?.news" class="flex flex-col items-center p-4">
    <h1 class="block py-5 text-4xl">{{ data.news.title }}</h1>
    <div v-html="data.news.content" class="w-full max-w-4xl"></div>
  </div>
</template>
