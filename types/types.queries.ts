import type { INews, IProject } from '@/types';

export namespace News {
  export namespace Index {
    export interface Query {
      page: number;
      limit: number;
      sort?: string;
    }

    export interface Response {
      total: number;
      news: INews[];
    }
  }

  export namespace Show {
    export interface Params {
      id: string;
    }
    export interface Response {
      news: INews;
    }
  }
}

export namespace Project {
  export namespace Index {
    export interface Query {
      page: number;
      limit: number;
      sort?: string;
    }

    export interface Response {
      total: number;
      projects: IProject[];
    }
  }

  export namespace Show {
    export interface Params {
      id: string;
    }
    export interface Response {
      project: IProject;
    }
  }
}
