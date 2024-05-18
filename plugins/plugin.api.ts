import { NewsService, ProjectService } from '~/services';

export default defineNuxtPlugin((app) => {
  const $api = $fetch.create({ baseURL: app.$config.public.API_URL });

  return {
    provide: {
      api: {
        news: new NewsService($api, 'news'),
        project: new ProjectService($api, 'projects'),
      },
    },
  };
});
