<script setup lang="ts">
definePageMeta({ layout: 'default' });

const { $api } = useNuxtApp();
const localeRoute = useLocaleRoute();
const query = reactive({ limit: 10, page: 1 });
const { data } = await $api.project.index(query, { watch: [query] });
</script>

<template>
  <div class="flex h-full justify-center">
    <ul class="p-4">
      <li v-for="project of data?.projects" class="mt-3 text-xl text-center">
        <UiLink :to="localeRoute({ name: 'project-id', params: { id: project.id } })">
          {{ project.title }}
        </UiLink>
      </li>
    </ul>
  </div>
</template>
