export interface AboutMe {
  name: string;
  title: string;
  institution: string;
  description: string;
  email: string;
  imageUrl?: string;
  blogUrl?: string;
  cvUrl?: string;
  googleScholarUrl?: string;
  twitterUsername?: string;
  githubUsername?: string;
  linkedinUsername?: string;
  funDescription?: string; // Gets placed in the left sidebar
  secretDescription?: string; // Gets placed in the bottom
  altName?: string;
  institutionUrl?: string;
}

export const aboutMe: AboutMe = {
  name: "Yuvanesh Anand",
  title: "Undergraduate Student",
  institution: "Virginia Tech",
  // Note that links work in the description
  description:
    "I'm a sophmore(junior in standing) at Virginia Tech hacking on whatever I find interesting!",
  email: "yuvanesha@vt.edu",
  imageUrl: "/images/pfp.png",
  googleScholarUrl: "https://scholar.google.com/citations?user=mgSsK3kAAAAJ&hl=en&authuser=1",
  githubUsername: "yuvanesh-ux",
  linkedinUsername: "yuvanesh-anand-760521233",
  twitterUsername: "yuvaaa___",
  blogUrl: "https://",
  cvUrl: "https://",
  institutionUrl: "https://www.vt.edu",
  // altName: "",
  // secretDescription: "I like dogs.",
};
