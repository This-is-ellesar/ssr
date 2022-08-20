export interface BuildConfig {
  head?: Head;
  plugins?: Plugin[];
}

export interface Head {
  lang: string;
  title: string;
  meta?: HeadMeta;
  script?: HeadScript;
}

export interface HeadMeta {
  [key: string]: string;
}

export interface HeadScript {
  src: string;
  async?: boolean;
  defer?: boolean;
}

export interface Plugin {
  src: string;
  mode: PluginMode;
}

export enum PluginMode {
  CLIENT = "CLIENT",
  SERVER = "SERVER",
}
