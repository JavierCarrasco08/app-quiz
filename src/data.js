let history = {
  YouTube: {
    name: "YouTube",
    history: `YouTube (an American online video sharing platform owned by Google) was launched on February 14, 2005 by Chad Hurley, Steve Chen, and Jawed Karim three former PayPal employees. The founders of YouTube wanted to create an easy way on how people could upload and share videos worldwide. Before YouTube was introduced, there were no reliable sources for one to share videos on the internet. For this reason, the three buddies, Chad Hurley, Steve Chen, and Jawed Karim thought of starting a platform where people could share their beautiful experiences through online videos.
    Before YouTube was founded, other video platforms such as Realplayer, Windows Media Player, Google Video, and ShareYourWorld were available. However, these sites required many processes before uploading videos and were expensive to the users as one was required to pay before sharing videos.
    uploading platforms, YouTube grew to become the world’s best video-sharing website.`,
  },
  Instagram: {
    name: "Instagram",
    history: `Instagram was started in San Francisco by Kevin Systrom and Mike Krieger, who initially tried creating a platform similar to Foursquare but then turned their attention exclusively to photo sharing. The word Instagram is an amalgam of "instant camera" and "telegram."
    The iOS app was released through the iTunes App Store on Oct. 6, 2010, and the Android app was released on April 3, 2012. The platform's popularity skyrocketed, with the company reporting more than 40 million active users just two years after launch. This caught the attention of Facebook, which officially purchased Instagram for $1 billion in the summer of 2012.
  As of April 2017, the company had 700 million active users, more than double Twitter's total user base
    `,
  },
  Twitter: {
    name: "Twitter",
    history: `The origin of Twitter starts with Evan Williams and Noah Glass. The two Silicon Valley entrepreneurs came together to create Odeo, a podcasting platform that would eventually become obsolete thanks to Apple iTunes. This didn’t stop Evan Williams from successfully growing Blogger, which led to a multi-million dollar sale to Google in 2003.
    Meanwhile, a side feature of Odeo was set to become the latest microblog and social network platform. Known first as Twttr, the service allowed users to send short messaging service, or SMS, to groups. Six months later, the name was changed to Twitter.
    Twitter is now known as a social networking and online news site. It offers easily digestible content and allows you to search for and follow friends, celebrities, and business accounts. It’s been described as a marketing tool, amateur news reporting platform, and social messaging service. In 2020, had over 5,500 employees and total assets over $13.3 billion.`,
  },
  Microsoft: {
    name: "Microsoft",
    history: `Microsoft Corp., U.S. computer firm, the leading developer of personal-computer software systems and applications. Microsoft, headquartered in Redmond, Wash., also publishes books and multimedia titles and manufactures hardware. It was founded in 1975 by Bill Gates and Paul G. Allen (b. 1954), who adapted BASIC for use on personal computers. They licensed versions of it to various companies, developed other programming languages, and in 1981 released MS-DOS for the IBM PC. The subsequent adoption of MS-DOS by most other personal-computer manufacturers generated vast revenues for Microsoft, which became a publicly owned corporation in 1986. It issued the first version of Microsoft Word, its popular word-processing program, in 1983, and Microsoft Windows, a graphical user interface for MS-DOS-based computers, in 1985. In 2001 Microsoft released Xbox, a video game console that quickly captured second place in the $10 billion video gaming market. In 2002 Microsoft launched Xbox Live, a broadband gaming network for their consoles.`,
  },
  Linux: {
    name: "Linux",
    history: `Linux, computer operating system created in the early 1990s by Finnish software engineer Linus Torvalds and the Free Software Foundation (FSF).
    While still a student at the University of Helsinki, Torvalds started developing Linux to create a system similar to MINIX, a UNIX operating system. In 1991 he released version 0.02; Version 1.0 of the Linux kernel, the core of the operating system, was released in 1994. About the same time, American software developer Richard Stallman and the FSF made efforts to create an open-source UNIX-like operating system called GNU. 
    Linux grew throughout the 1990s because of the efforts of hobbyist developers. Although Linux is not as user-friendly as the popular Microsoft Windows and Mac OS operating systems, it is an efficient and reliable system that rarely crashes. Combined with Apache, an open-source Web server, Linux accounts for most of the servers used on the Internet.`,
  },
  Apple: {
    name: "Apple",
    history: `Apple Inc., formerly Apple Computer, Inc., Microcomputer design and manufacturing company, the first successful personal-computer company. It was founded in 1976 by Steven P. Jobs and Stephen G. Wozniak, whose first computer was manufactured in the Jobs family’s garage. The Apple II (1977), with its plastic case and colour graphics, launched the company to success, earning Apple over $100 million by 1980, the year the company first offered stock to the public. The Macintosh, introduced in 1984, was the first personal computer to use a graphical user interface and a mouse. The “Mac” initially sold poorly, and Jobs left the company in 1985, but eventually it found its niche in the desktop publishing market. Apple recalled Jobs in 1997. He returned the company to profitability by introducing more innovative products, such as the iMac. Apple introduced iTunes, software for playing music that has been converted to the MP3 format, and the iPod portable MP3 music player in 2001; in 2003 the company began selling downloadable copies of major record company songs in MP3 format over the Internet. Apple introduced the iPhone, a touch-screen smartphone, in 2007 and the iPad, which created a new market for tablet computers, in 2010.`,
  },
};
export let allQuestions = {
  YouTube: [
    {
      id: 0,
      question: "Who created YouTube?",
      answer: [
        "Mark Zuckerberg",
        "Spongebob",
        "Chad Hurley, Steve Chen, and Jawed Karim",
        "I do not know",
      ],
    },
    {
      id: 1,
      question: "What was the job of the creators of YouTube?",
      answer: ["PayPal", "Disney", "Burger King", "I do not know"],
    },
    {
      id: 2,
      question: "What day and year YouTube was created?",
      answer: [
        "February 1, 2006",
        "February 14, 2005",
        "December 3, 2015",
        "I do not know",
      ],
    },
    {
      id: 3,
      question: "What was YouTube created for?",
      answer: [
        "Created to play",
        "Chat application",
        "share videos worldwide",
        "I do not know",
      ],
    },
    {
      id: 4,
      question: "There were reliable sources before YouTube appeared.",
      answer: [
        "there were no reliable sources for one to share videos on the internet.",
        "there were reliable sources for one to share videos on the internet.",
      ],
    },
  ],
  Instagram: [
    {
      id: 5,
      question: "Where was instagram created?",
      answer: ["San Francisco", "Venezuela", "Dubai", "Chicago Cubs"],
    },
    {
      id: 6,
      question: "Who created Instagram?",
      answer: [
        "Kevin Systrom y Mike Krieger",
        "Queen Isabelle",
        "McLamore y David Edgerton",
        "I do not Know",
      ],
    },
    {
      id: 7,
      question: "What day was the Android application launched?",
      answer: [
        "April 3, 2012",
        "February 27, 2010",
        "December 3, 2015",
        "I do not know",
      ],
    },
    {
      id: 8,
      question: "At this moment Instagram to whom does it belong'?",
      answer: ["Facebook", "Twitter"],
    },
    {
      id: 9,
      question:
        "In 2017, Instagram had more than twice as many active users as Twitter?",
      answer: [
        "As of April 2017, the company had 700 million active users, more than double Twitter's total user base",
        "By April 2017, the company did not have 700 million active users",
      ],
    },
  ],
  Twitter: [
    {
      id: 10,
      question: "How is Twitter known?",
      answer: [
        "Twitter is now known as a social networking and online news site",
        "Restaurant",
        "Baseball team",
        "A Neighborhood",
      ],
    },
    {
      id: 11,
      question: "What was the first name of Twitter?",
      answer: ["Twitter", "Twttr", "WWE", "I do not know"],
    },
    {
      id: 12,
      question: "What is the origin of Twitter?",
      answer: [
        "With the big bang",
        "with Evan Williams and Noah Glass",
        "With the Super Boll",
        "I do not know",
      ],
    },
    {
      id: 13,
      question: "How many employees did Twitter have in 2020?",
      answer: ["Less than 4,000", "7.000", "I do not know", "5,500"],
    },
    {
      id: 14,
      question: "Why has Odeo become obsolete?",
      answer: ["Apple iTunes", "Facebook", "Twitter", "I do not know"],
    },
  ],
  Microsoft: [
    {
      id: 15,
      question: "Who founded Microsoft?",
      answer: [
        "Bill Gates and Paul G.",
        "Evan Williams",
        "Mike",
        "Bill Gates and Mark Zuckerberg",
      ],
    },
    {
      id: 16,
      question: "What year was Microsoft founded?",
      answer: ["1975", "1974", "2000", "I do not know"],
    },
    {
      id: 17,
      question: "What did you adapt for your personal computer applications?",
      answer: ["Linux", "Apple", "Basic", "I do not Know"],
    },
    {
      id: 18,
      question: "Which video game console did Microsoft release?",
      answer: ["Nintendo", "Xbox", "Play Station", "Game Boy"],
    },
    {
      id: 19,
      question: "Where is Microsoft's headquarters?",
      answer: [
        "Redmond (Washington)",
        "Venezuela Caracas",
        "Mexico",
        "I do not know",
      ],
    },
  ],
  Linux: [
    {
      id: 20,
      question: "Who created Linux?",
      answer: [
        "Kevin Systrom y Mike Krieger",
        "Linus Torvalds",
        "McLamore y David Edgerton",
        "I do not Know",
      ],
    },
    {
      id: 21,
      question: "What was Linux created for?",
      answer: [
        "to create a system similar to MINIX",
        "Boredom",
        "To make servers",
        "I do not know",
      ],
    },
    {
      id: 22,
      question: "When was version 1 released?",
      answer: ["1994", "1990", "1993", "I do not know"],
    },
    {
      id: 23,
      question: "Linux grew throughout the 1990s because _____?",
      answer: [
        "the efforts of hobbyist developers",
        "No competition",
        "It was the best",
        "I do not know",
      ],
    },
    {
      id: 24,
      question: "When was version 0.02 released?",
      answer: ["1991", "1994", "1995", "I do not know"],
    },
  ],
  Apple: [
    {
      id: 25,
      question: "When was Apple founded?",
      answer: ["1976", "1980", "1990", "I do not know"],
    },
    {
      id: 26,
      question: "Where was the first computer created?",
      answer: [
        "in the Jobs family’s garage",
        "in the Zuckerberg family’s garage",
        "in the Torvalds family’s garage",
        "I do not know",
      ],
    },
    {
      id: 27,
      question: "In what year did Apple rehire Jobs?",
      answer: ["2001", "1997", "2000", "1999"],
    },
    {
      id: 28,
      question: "When Jobs resigned from Apple?",
      answer: ["1985", "1990", "1991", "1992"],
    },
    {
      id: 29,
      question: "Who founded Apple?",
      answer: [
        "Kevin Systrom y Mike Krieger",
        "Bill Gates and Paul G.",
        "Steven P. Jobs y Stephen G",
        "Steven P. Jobs y Paul G.",
      ],
    },
  ],
};

export default history;
