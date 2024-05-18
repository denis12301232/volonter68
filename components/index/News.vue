<script setup lang="ts">
const { t, d } = useI18n();
const localeRoute = useLocaleRoute();
const query = reactive({ limit: 10, page: 1 });
const { $api } = useNuxtApp();
const { data, pending } = await $api.news.index(query);
</script>

<template>
  <div
    v-animateonscroll="{
      enterClass: 'transition-opacity duration-500 ease-in opacity-100',
      threshold: [0.1],
    }"
    class="mt-7 flex flex-col items-center px-3 pb-24 pt-3"
  >
    <h1 class="text-center text-4xl font-normal sm:text-6xl" id="news">
      {{ t('index.news.title') }}
    </h1>
    <div class="mt-8 flex w-full max-w-6xl flex-wrap justify-center gap-4">
      <div v-if="pending" class="flex w-full justify-center py-10">
        <Wheel class="text-primary-700" aria-label="Loading" size="50" />
      </div>
      <div v-else-if="data?.total" class="h-80 w-full !px-10">
        <ClientOnly>
          <Swiper
            :modules="[SwiperPagination]"
            slides-per-view="auto"
            space-between="20"
            :loop="false"
            :pagination="{
              el: '.swiper-news-pagination',
              clickable: true,
              bulletClass: 'mr-1 h-2 w-2 rounded-full bg-slate-300 dark:bg-slate-600',
              bulletActiveClass: '!bg-blue-700 dark:!bg-blue-700',
              clickableClass: 'cursor-pointer',
            }"
          >
            <SwiperSlide
              v-for="item of data.news"
              class="!flex !w-64 select-none items-center justify-center"
            >
              <Card class="mt-4 w-full bg-slate-200">
                <template #title>{{ item.title }}</template>
                <template #subtitle>{{ d(item.createdAt) }}</template>
                <template #footer>
                  <NuxtLink :to="localeRoute({ name: 'news-id', params: { id: item.id } })">
                    <Button class="w-fit" :label="t('index.news.messages.open')" />
                  </NuxtLink>
                </template>
              </Card>
            </SwiperSlide>
            <div class="swiper-news-pagination mt-20 flex justify-center"></div>
          </Swiper>
        </ClientOnly>
        <div class="flex justify-end">
          <NuxtLink
            class="mt-5 flex items-center hover:text-primary-500"
            :to="localeRoute({ name: 'news' })"
          >
            <span class="border-b border-b-black">{{ t('index.news.messages.all') }}</span>
            <Icon name="eva:arrow-ios-forward-outline"></Icon>
          </NuxtLink>
        </div>
      </div>
      <div v-else>
        <div class="mt-5 p-5 text-lg">{{ t('index.news.messages.none') }}</div>
      </div>
    </div>
  </div>
</template>
