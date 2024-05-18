import type { AsyncDataOptions } from '#app';
import type { News } from '~/types';

export default class NewsService {
  private readonly PREFIX: string;
  private readonly $fetch: typeof $fetch;

  constructor(fetch: typeof $fetch, prefix: string) {
    this.$fetch = fetch;
    this.PREFIX = prefix;
  }

  index(query: News.Index.Query, options?: AsyncDataOptions<News.Index.Response>) {
    return useAsyncData<News.Index.Response>(
      'index-news',
      () => this.$fetch(`${this.PREFIX}`, { method: 'GET', query }),
      options
    );
  }

  show(params: News.Show.Params, options?: AsyncDataOptions<News.Show.Response>) {
    return useAsyncData<News.Show.Response>(
      'show-news',
      () => this.$fetch(`${this.PREFIX}/${params.id}`, { method: 'GET' }),
      options
    );
  }
}
