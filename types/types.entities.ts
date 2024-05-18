export interface INews {
  id: string;
  title: string;
  reporter: string;
  content: string;
  date: string;
  pinned: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface IProject {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

export interface IPartner {
  logo: string;
  href: string;
  width: string | number;
  height: string | number;
  background: string;
}
