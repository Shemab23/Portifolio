export interface StorySection {
  id: string; // "quiet-house"
  anchor: string; // "Childhood"
  date: string; // "2003–2016"
  title: string; // "Quiet house, strong hands"
  body: string[];
  quote?: string;
}

export interface StoryData {
  label: string;
  headline: string;
  intro: string[];
  sections: StorySection[];
  closing: {
    anchor: string;
    date: string;
    title: string;
    body: string[];
    quote: string; // final line, standalone
  };
}
