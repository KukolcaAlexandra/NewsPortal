export interface IShortSource {
  id: string;
  name: string;
}
    
export interface INews {
  author: string;
  title: string;
  content?: string;
  description?: string;
  publishedAt?: string;
  source?: IShortSource;
  url?: string;
  urlToImage?: string;
  id?: string,
  text?: string,
  date?: string,
}
