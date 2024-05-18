<script setup lang="ts">
definePageMeta({ layout: 'default' });

const { $api } = useNuxtApp();
const route = useRoute();
const localeRoute = useLocaleRoute();
const query = reactive({ limit: 10, page: 1 });
const { data } = await $api.project.index(query, { watch: [query] });
const project = computed(() => data.value?.projects.find((item) => item.id === route.params.id));
</script>

<template>
  <div class="flex h-full">
    <ul class="hidden max-w-xs border-r border-r-slate-200 dark:border-r-slate-700 p-4 lg:block">
      <li v-for="project of data?.projects" class="mt-3 text-center text-xl">
        <UiLink
          activeClass="text-sky-500"
          :to="localeRoute({ name: 'project-id', params: { id: project.id } })"
        >
          {{ project.title }}
        </UiLink>
      </li>
    </ul>
    <div v-html="project?.content" class="w-full p-5"></div>
  </div>
</template>
