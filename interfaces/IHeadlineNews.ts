interface ISource {
  id: string;
  name: string;
}
export default interface IHeadlineNews {
  source: ISource;
  author: string | null;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}
