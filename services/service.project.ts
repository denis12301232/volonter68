import type { AsyncDataOptions } from '#app';
import type { Project } from '~/types';
import type { FetchError } from 'ofetch';

export default class ProjectModule {
  private readonly PREFIX: string;
  private readonly $fetch: typeof $fetch;

  constructor(fetch: typeof $fetch, prefix: string) {
    this.$fetch = fetch;
    this.PREFIX = prefix;
  }

  index(query: Project.Index.Query, options?: AsyncDataOptions<Project.Index.Response>) {
    return useAsyncData<Project.Index.Response, FetchError>(
      'index-news',
      () => this.$fetch(`${this.PREFIX}`, { method: 'GET', query }),
      options
    );
  }

  show(params: Project.Show.Params, options?: AsyncDataOptions<Project.Show.Response>) {
    return useAsyncData<Project.Show.Response, FetchError>(
      'show-news',
      () => this.$fetch(`${this.PREFIX}/${params.id}`, { method: 'GET' }),
      options
    );
  }
}
