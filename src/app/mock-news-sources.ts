export interface ISource {
  id: string;
  name: string;
  description: string;
  url: string;
  category: string;
}

export const SOURCES: ISource[] = [
  {
    id: "abc-news",
    name: "ABC News",
    description: "Your trusted source for breaking news, analysis, e…interviews, headlines, and videos at ABCNews.com.",
    url: "https://abcnews.go.com",
    category: "general"
  },
  {
    id: "abc-news-au",
    name: "ABC News (AU)",
    description: "Australia's most trusted source of local, national…is, the latest business, sport, weather and more.",
    url: "http://www.abc.net.au/news",
    category: "general"
  },
  {
    id: "aftenposten",
    name: "Aftenposten",
    description: "Norges ledende nettavis med alltid oppdaterte nyheter innenfor innenriks, utenriks, sport og kultur.",
    url: "https://www.aftenposten.no",
    category: "general",
  },
  {
    id: "al-jazeera-english",
    name: "Al Jazeera English",
    description: "News, analysis from the Middle East and worldwide,…ies, podcasts, long reads and broadcast schedule.",
    url: "http://www.aljazeera.com",
    category: "general"
  },
  {
    id: "ansa",
    name: "ANSA.it",
    description: "Agenzia ANSA: ultime notizie, foto, video e approf…ioni, mondo, sport, calcio, cultura e tecnologia.",
    url: "http://www.ansa.it",
    category: "general",
  }
];


/*
{id: "argaam", name: "Argaam", description: "ارقام موقع متخصص في متابعة سوق الأسهم السعودي تداو…البتروكيماويات , تقارير مالية الاكتتابات الجديده ", url: "http://www.argaam.com", category: "business", …}
  {id: "ars-technica", name: "Ars Technica", description: "The PC enthusiast's resource. Power users and the tools they love, without computing religion.", url: "http://arstechnica.com", category: "technology", …}
  {id: "ary-news", name: "Ary News", description: "ARY News is a Pakistani news channel committed to …ries from around Pakistan and all over the world.", url: "https://arynews.tv/ud/", category: "general", …}
  {id: "associated-press", name: "Associated Press", description: "The AP delivers in-depth coverage on the internati…ics, lifestyle, business, and entertainment news.", url: "https://apnews.com/", category: "general", …}
  {id: "australian-financial-review", name: "Australian Financial Review", description: "The Australian Financial Review reports the latest… reading for the business and investor community.", url: "http://www.afr.com", category: "business", …}
  {id: "axios", name: "Axios", description: "Axios are a new media company delivering vital, tr…icient, illuminating and shareable ways possible.", url: "https://www.axios.com", category: "general", …}
  {id: "bbc-news", name: "BBC News", description: "Use BBC News for up-to-the-minute news, breaking n…t, business, science, technology and health news.", url: "http://www.bbc.co.uk/news", category: "general", …}
  {id: "bbc-sport", name: "BBC Sport", description: "The home of BBC Sport online. Includes live sports…rts, plus major events such as the Olympic Games.", url: "http://www.bbc.co.uk/sport", category: "sports", …}
  {id: "bild", name: "Bild", description: "Die Seite 1 für aktuelle Nachrichten und Themen, B…ws, Wirtschaft, Politik, Show, Sport, und Promis.", url: "http://www.bild.de", category: "general", …}
  {id: "blasting-news-br", name: "Blasting News (BR)", description: "Descubra a seção brasileira da Blasting News, a pr…endentes. Junte-se a nós e torne- se um repórter.", url: "http://br.blastingnews.com", category: "general", …}
  {id: "bleacher-report", name: "Bleacher Report", description: "Sports journalists and bloggers covering NFL, MLB,…ck drafts, game scores, player profiles and more!", url: "http://www.bleacherreport.com", category: "sports", …}
  {id: "bloomberg", name: "Bloomberg", description: "Bloomberg delivers business and markets news, data…ing stories from Businessweek and Bloomberg News.", url: "http://www.bloomberg.com", category: "business", …}
  {id: "breitbart-news", name: "Breitbart News", description: "Syndicated news and opinion website providing cont…dated headlines to top news and analysis sources.", url: "http://www.breitbart.com", category: "general", …}
  {id: "business-insider", name: "Business Insider", description: "Business Insider is a fast-growing business site w…is now the largest business news site on the web.", url: "http://www.businessinsider.com", category: "business", …}
  {id: "business-insider-uk", name: "Business Insider (UK)", description: "Business Insider is a fast-growing business site w…is now the largest business news site on the web.", url: "http://uk.businessinsider.com", category: "business", …}
  */