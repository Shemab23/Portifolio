const navLinks = ["Work", "ToolKit", "Process", "Education", "Contact"] as const;
type NavLinks = typeof navLinks[number];

export interface Nav {
    logo:{
        label:string,
        link:string
    },
    links:
    {
        label:NavLinks,
        link:string
    }[]
}

export type HeroType = {
    name:string,
    title:string,
    degree:{
        name:string,
        institution:string,
        cgpa:string
    },
    statement: string,
    cta:string[],
    image:string
}

export type WorkType = {
    id: string;
    title: string;
    category: string;
    featured: boolean;
    tagline: string;
    description: string; // Combined problem, contribution, and outcome into a clean paragraph
    technologies: string[];
    role: string;
    year: string;
    company?: string;
    metrics?: string; // Highlighting your real-world achievements
    links: {
      live?: string;
      github?: string;
    };
}


const ToolKitCategories = ["languages", "web-mobile", "backend", "infrastructure"] as const;

type ToolKitCategoriesType = typeof ToolKitCategories[number];
export type ToolkitType = Record<ToolKitCategoriesType, {name: string, featured: boolean}[]>;


export type HOW_I_WORK_CONTENTType = {
  header: {
    index: string,
    title: string,
    subtitle:
      string,
  },
  steps:
  {
      num: string,
      title: string,
      description: string,
    }[]
};


export type EDUCATION_CONTENTType = {
  header: {
    index: string,
    title: string,
  },
  degree: {
    title: string,
    institution: string,
    location: string,
    date: string,
    gpa: string,
  },
  trainings:
    {
      subject: string,
      provider: string,
      date: string,
      id: string,
      verifyUrl: string, // Replace with your actual link if available
    }[],
  bootcamp: {
    title: string,
    note: string,
  },
};
