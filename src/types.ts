export interface AppItem {
  name: string;
  homepage: string;
  repository?: string;
  icon: string;
  keywords?: string[];
  darkInvert?: true;
  lessRadius?: true;
}

export interface CateItem {
  title: string;
  children: AppItem[];
}
