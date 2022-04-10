import { v4 as uuid } from "uuid";

/**
 * Videos Database can be added here.
 * You can add videos of your wish with different attributes
 * */

export const videos = [
  //Javascript
  {
    _id: uuid(),
    title: "Map, Filter and Reduce",
    url: "https://www.youtube.com/watch?v=zdp0zrpKzIE&t=1957s",
    thumbnail: {
      altTxt: "Map, Filter and Reduce",
      url: "https://i.ytimg.com/vi/zdp0zrpKzIE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBwoOnC1M5t9L9FxkDB7w1y6Huq9g",
    },
    channel: "Namaste JS",
    profile: {
      altTxt: "Namaste JS",
      url: "https://yt3.ggpht.com/ytc/AKedOLR8gqN3fHHNYbehMcsJ49rapBPhJMGPYSrl6YQyNg=s176-c-k-c0x00ffffff-no-rj",
    },
    category: "Javascript",
    description:
      "Map, filter & reduce Array functions are the most popular Higher-Order Functions in JavaScript. This episode covers map(), filter() & reduce() along with 11 detailed code examples from easy to tricky ones.❤️ ",
    views: "200K",
    uploadTime: "2 weeks",
    playbackTime: 37,
    likes: "43,289",
    isInWatchLater: false,
    isLiked: false,
    isMustWatch: true,
  },

  {
    _id: uuid(),
    title: "Higher Order Functions",
    url: "https://www.youtube.com/watch?v=HkWxvB1RJq0",
    thumbnail: {
      altTxt: "Higher Order Functions",
      url: "https://i.ytimg.com/vi/HkWxvB1RJq0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDIWWWNSGzYh2J8RjXXXiRPjWf5Og",
    },
    channel: "Namaste JS",
    profile: {
      altTxt: "Namaste JS",
      url: "https://yt3.ggpht.com/ytc/AKedOLR8gqN3fHHNYbehMcsJ49rapBPhJMGPYSrl6YQyNg=s176-c-k-c0x00ffffff-no-rj",
    },
    category: "Javascript",
    description:
      "Functional Programming is powered by Higher-Order Functions in JavaScript. And all this is possible because functions are first-class citizens in JS. This episode covers everything about Higher-Order functions and how they can be leveraged to do functional programming. ❤️",
    views: "100K",
    uploadTime: "4 weeks",
    playbackTime: 24,
    likes: "20,765",
    isInWatchLater: false,
    isLiked: false,
    isMustWatch: false,
  },

  {
    _id: uuid(),
    title: "Set Timeout() | Decoded",
    url: "https://www.youtube.com/watch?v=nqsPmuicJJc&t=21s",
    thumbnail: {
      altTxt: "Set Timeout() | Decoded",
      url: "https://i.ytimg.com/vi/nqsPmuicJJc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBxFFI5HQKMT7IN04ARDi550XZkdQ",
    },
    channel: "Namaste JS",
    profile: {
      altTxt: "Namaste JS",
      url: "https://yt3.ggpht.com/ytc/AKedOLR8gqN3fHHNYbehMcsJ49rapBPhJMGPYSrl6YQyNg=s176-c-k-c0x00ffffff-no-rj",
    },
    category: "Javascript",
    description:
      "We also discover that setTimeout does not guarantee that the callback method will be executed exactly after a certain delay. Hence, there are trust issues with setTimeout. 😅",
    views: "93K",
    uploadTime: "5 weeks",
    playbackTime: 26,
    likes: "10,765",
    isInWatchLater: false,
    isLiked: false,
    isMustWatch: false,
  },

  {
    _id: uuid(),
    title: "Asynchronous Javascript and Event Loop",
    url: "https://www.youtube.com/watch?v=8zKuNo4ay8E",
    thumbnail: {
      altTxt: "Asynchronous Javascript and Event Loop",
      url: "https://i.ytimg.com/vi/8zKuNo4ay8E/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA3H5Z79o1dIpMm215mAgGUSdE1WA",
    },
    channel: "Namaste JS",
    profile: {
      altTxt: "Namaste JS",
      url: "https://yt3.ggpht.com/ytc/AKedOLR8gqN3fHHNYbehMcsJ49rapBPhJMGPYSrl6YQyNg=s176-c-k-c0x00ffffff-no-rj",
    },
    category: "Javascript",
    description:
      "In-depth explanation of Event Loop, Web APIs, MicroTask Callback Queue, and how JavaScript works asynchronously in the web browser. Understand how setTimeout works behind the scenes along with fetch and event listeners.",
    views: "297K",
    uploadTime: "12 weeks",
    playbackTime: 41,
    likes: "100,765",
    isInWatchLater: false,
    isLiked: false,
    isMustWatch: false,
  },

  //HTML
  {
    _id: uuid(),
    title: "Learn HTML from scratch | Simplilearn",
    url: "https://www.youtube.com/watch?v=MDLn5-zSQQI",
    thumbnail: {
      altTxt: "Learn HTML from scratch | Simplilearn",
      url: "https://i.ytimg.com/vi/MDLn5-zSQQI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAYNFziKueIAxXDOWAVUO1rN80HNA",
    },
    channel: "Simplilearn",
    profile: {
      altTxt: "Simplilearn",
      url: "https://yt3.ggpht.com/ytc/AKedOLTaNnIZrEVNHk-OgfTRlO1n2aeAZ657f5FrG-5EaA=s68-c-k-c0x00ffffff-no-rj",
    },
    category: "HTML",
    description:
      "In this Simplilearn video, we go through the basic concepts of HTML and it's various tags. In the end, we also code a simple web page using HTML and CSS, so as to give you a practical perspective on developing a webpage.",
    views: "2K",
    uploadTime: "5 weeks",
    playbackTime: 10,
    likes: "2,987",
    isInWatchLater: false,
    isLiked: false,
    isMustWatch: false,
  },

  {
    _id: uuid(),
    title: "HTML Zero to Hero | Mosh",
    url: "https://www.youtube.com/watch?v=qz0aGYrrlhU",
    thumbnail: {
      altTxt: "HTML Zero to Hero | Mosh",
      url: "https://i.ytimg.com/vi/qz0aGYrrlhU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD2atY5v7B_RiGRNjykbLKft3eyVw",
    },
    channel: "Mosh",
    profile: {
      altTxt: "Mosh",
      url: "https://yt3.ggpht.com/tBEPr-zTNXEeae7VZKSZYfiy6azzs9OHowq5ZvogJeHoVtKtEw2PXSwzMBKVR7W0MI7gyND8=s68-c-k-c0x00ffffff-no-rj",
    },
    category: "HTML",
    description:
      "HTML Tutorial for Beginners - Learn HTML for a career in web development. This HTML tutorial teaches you everything you need to get started.",
    views: "3M",
    uploadTime: "7 weeks",
    playbackTime: 60,
    likes: "90,763",
    isInWatchLater: false,
    isLiked: false,
    isMustWatch: true,
  },

  {
    _id: uuid(),
    title: "Basics of HTML | Edureka",
    url: "https://www.youtube.com/watch?v=88PXJAA6szs",
    thumbnail: {
      altTxt: "Basics of HTML | Edureka",
      url: "https://i.ytimg.com/vi/88PXJAA6szs/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCgi6ehtM6up-KxDcBqY0mTYwZKjQ",
    },
    channel: "Edureka",
    profile: {
      altTxt: "Edureka",
      url: "https://yt3.ggpht.com/OtB--dcR_oNUZUaUsuyk2ShT5nFYjEcj9Yxx50-Nner03vXKt4IWXtP--JrnSGQbwRSHYuVb38g=s68-c-k-c0x00ffffff-no-rj",
    },
    category: "HTML",
    description:
      "This Edureka video on HTML will provide you with a detailed and comprehensive knowledge about HTML. In this HTML Tutorial for Beginners you will learn HTML concepts from scratch and also how to create your first web page using HTML Tags.",
    views: "500K",
    uploadTime: "8 weeks",
    playbackTime: 29,
    likes: "8,865",
    isInWatchLater: false,
    isLiked: false,
    isMustWatch: false,
  },

  {
    _id: uuid(),
    title: "HTML Tutorial - Website Crash Course for Beginners",
    url: "https://www.youtube.com/watch?v=916GWv2Qs08",
    thumbnail: {
      altTxt: "HTML Tutorial - Website Crash Course for Beginners",
      url: "https://i.ytimg.com/vi/916GWv2Qs08/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCDIRe-izQb5XmVpwM9y3k7kAHzRg",
    },
    channel: "freeCodeCamp",
    profile: {
      altTxt: "freeCodeCamp",
      url: "https://yt3.ggpht.com/ytc/AKedOLRyPFojwY3CXV5ks5TwPrt2VifQn-nYNfkgLvVPkw=s68-c-k-c0x00ffffff-no-rj",
    },
    category: "HTML",
    description:
      "Learn the basics of HTML in this crash course.✏️ This course was developed by Beau Carnes.",
    views: "304K",
    uploadTime: "10 weeks",
    playbackTime: 45,
    likes: "5,234",
    isInWatchLater: false,
    isLiked: false,
    isMustWatch: false,
  },

  //CSS
  {
    _id: uuid(),
    title: "Learn CSS basics in a simplified way | WDS",
    url: "https://www.youtube.com/watch?v=1PnVor36_40",
    thumbnail: {
      altTxt: "Learn CSS basics in a simplified way | WDS",
      url: "https://tpc.googlesyndication.com/simgad/4931567278696975789",
    },
    channel: "Web Dev simplified",
    profile: {
      altTxt: "Web Dev simplified",
      url: "https://yt3.ggpht.com/ytc/AKedOLQpvSjzSCSo8ZKCjBZS7TRX7omb_kyQirh2zgEY=s68-c-k-c0x00ffffff-no-rj",
    },
    category: "CSS",
    description:
      "In this video we will cover everything you need to know to get up and running with CSS in only 20 minutes. We will cover CSS syntax, how to add CSS to your HTML, CSS colors, CSS units, the box model, and best practices for CSS walking through a full example of CSS being used to style an HTML page.",
    views: "828K",
    uploadTime: "4 weeks",
    playbackTime: 23,
    likes: "20,897",
    isInWatchLater: false,
    isLiked: false,
    isMustWatch: false,
  },

  {
    _id: uuid(),
    title: "CSS Tutorial - Zero to Hero | For beginners",
    url: "https://www.youtube.com/watch?v=r1xBCi5SOjw",
    thumbnail: {
      altTxt: "CSS Tutorial - Zero to Hero | For beginners",
      url: "https://i.ytimg.com/vi/1Rs2ND1ryYc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDCEhBJOuSZooep7mbF4mBmkVDZAg",
    },
    channel: "freeCodeCamp",
    profile: {
      altTxt: "freeCodeCamp",
      url: "https://yt3.ggpht.com/ytc/AKedOLRyPFojwY3CXV5ks5TwPrt2VifQn-nYNfkgLvVPkw=s68-c-k-c0x00ffffff-no-rj",
    },
    category: "CSS",
    description:
      "Learn CSS in this full course for beginners. CSS, or Cascading Style Sheet, is responsible for the styling and looks of a website. In this course, we cover CSS from the ground up. You will learn everything from basic skills, such as coloring and text, to highly advanced skills, like custom animations.",
    views: "2M",
    uploadTime: "16 weeks",
    playbackTime: 23,
    likes: "52,453",
    isInWatchLater: false,
    isLiked: false,
    isMustWatch: true,
  },

  {
    _id: uuid(),
    title:
      "What is CSS | CSS Explained For Beginners | Web Development Tutorial | Edureka",
    url: "https://www.youtube.com/watch?v=6vbgZnQrpbU",
    thumbnail: {
      altTxt:
        "What is CSS | CSS Explained For Beginners | Web Development Tutorial | Edureka",
      url: "https://i.ytimg.com/vi/6vbgZnQrpbU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCQWSzMxLxVesPyDW7GMey-z0JeOw",
    },
    channel: "Edureka",
    profile: {
      altTxt: "Edureka",
      url: "https://yt3.ggpht.com/OtB--dcR_oNUZUaUsuyk2ShT5nFYjEcj9Yxx50-Nner03vXKt4IWXtP--JrnSGQbwRSHYuVb38g=s68-c-k-c0x00ffffff-no-rj",
    },
    category: "CSS",
    description:
      "This Edureka video on CSS explains what is CSS along with all the varied elements and fundamentals of CSS.",
    views: "133K",
    uploadTime: "12 weeks",
    playbackTime: 7,
    likes: "2,878",
    isInWatchLater: false,
    isLiked: false,
    isMustWatch: false,
  },

  {
    _id: uuid(),
    title: "How Do We Include CSS In Our HTML | Basics Of CSS",
    url: "https://www.youtube.com/watch?v=F_feF3-NGtQ",
    thumbnail: {
      altTxt: "How Do We Include CSS In Our HTML | Basics Of CSS",
      url: "https://i.ytimg.com/vi/F_feF3-NGtQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAV0dgRQZwYxY0nua54e50SVejilQ",
    },
    channel: "CareerFoundry",
    profile: {
      altTxt: "CareerFoundry",
      url: "https://yt3.ggpht.com/IRgDpgFolu8eHLU9ElcWkaY1TA7mNPGQUV05TCLRKJqEVm9HYggTiVeX42Dq1cIdH2v5LNNglg=s68-c-k-c0x00ffffff-no-rj",
    },
    category: "CSS",
    description:
      "Looking to learn more about CSS? This is the video for you.Build your very first web page from scratch.",
    views: "13K",
    uploadTime: "14 weeks",
    playbackTime: 36,
    likes: "253",
    isInWatchLater: false,
    isLiked: false,
    isMustWatch: false,
  },

  //React
  {
    _id: uuid(),
    title: "A High Level Overview of React",
    url: "https://www.youtube.com/watch?v=FRjlF74_EZk",
    thumbnail: {
      altTxt: "A High Level Overview of React",
      url: "https://i.ytimg.com/vi/FRjlF74_EZk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAhx1FH4E3YsMCWHRIitlFM8HqHuQ",
    },
    channel: "Zac Gordon",
    profile: {
      altTxt: "Zac Gordon",
      url: "https://yt3.ggpht.com/ytc/AKedOLSHtbAzxAVLaJR8KdYG-qzhO75hDCHp4tdYAzE2HA=s68-c-k-c0x00ffffff-no-rj",
    },
    category: "React",
    description: "This is an excerpt from the course and book React Explained.",
    views: "63K",
    uploadTime: "15 weeks",
    playbackTime: 12,
    likes: "1,423",
    isInWatchLater: false,
    isLiked: false,
    isMustWatch: true,
  },

  {
    _id: uuid(),
    title:
      "What Is ReactJS? | ReactJS Basics | Learn ReactJS | ReactJS Tutorial For Beginners",
    url: "https://www.youtube.com/watch?v=Y6aYx_KKM7A",
    thumbnail: {
      altTxt:
        "What Is ReactJS? | ReactJS Basics | Learn ReactJS | ReactJS Tutorial For Beginners",
      url: "https://i.ytimg.com/vi/Y6aYx_KKM7A/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDZdGhmpg3F2WVHgOr418cVRLmxfw",
    },
    channel: "Simplilearn",
    profile: {
      altTxt: "Simplilearn",
      url: "https://yt3.ggpht.com/ytc/AKedOLTaNnIZrEVNHk-OgfTRlO1n2aeAZ657f5FrG-5EaA=s68-c-k-c0x00ffffff-no-rj",
    },
    category: "React",
    description:
      "In this video, we learn all about ReactJS, it's features and some basic concepts required to build a React Application. React is a JavaScript library used for building fast and interactive user interfaces for the web as well as mobile applications. It is an open-source, reusable component-based front-end library used by many developers across the globe. ",
    views: "126K",
    uploadTime: "16 weeks",
    playbackTime: 10,
    likes: "2,786",
    isInWatchLater: false,
    isLiked: false,
    isMustWatch: false,
  },

  {
    _id: uuid(),
    title: "Absolute Basics of React | Edureka",
    url: "https://www.youtube.com/watch?v=iwdBLit85TM",
    thumbnail: {
      altTxt: "Absolute Basics of React | Edureka",
      url: "https://i.ytimg.com/vi/iwdBLit85TM/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB7i88IEss45hgHE5sOOI9j0Kthbw",
    },
    channel: "Edureka",
    profile: {
      altTxt: "Edureka",
      url: "https://yt3.ggpht.com/OtB--dcR_oNUZUaUsuyk2ShT5nFYjEcj9Yxx50-Nner03vXKt4IWXtP--JrnSGQbwRSHYuVb38g=s68-c-k-c0x00ffffff-no-rj",
    },
    category: "React",
    description:
      "This Edureka video will help you understand the fundamentals of ReactJS and help you in building a strong foundation in React by understanding the advantages of ReactJS along with its features and major aspects.",
    views: "23K",
    uploadTime: "17 weeks",
    playbackTime: 15,
    likes: "1,922",
    isInWatchLater: false,
    isLiked: false,
    isMustWatch: false,
  },

  {
    _id: uuid(),
    title: "Introducing React Hooks | Traversy Media",
    url: "https://www.youtube.com/watch?v=mxK8b99iJTg",
    thumbnail: {
      altTxt: "Introducing React Hooks | Traversy Media",
      url: "https://i.ytimg.com/vi/mxK8b99iJTg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLADG_4v3JtUaPr-BD8Qxw2lroMgOw",
    },
    channel: "Traversy Media",
    profile: {
      altTxt: "Traversy Media",
      url: "https://yt3.ggpht.com/ytc/AKedOLSxHOOxxa9Af8Bfb2XMop3lm4tor9bViWiC-d5aaw=s68-c-k-c0x00ffffff-no-rj",
    },
    category: "React",
    description:
      "In this video we will look at the new hooks feature proposal in React 16.7, specifically the useState hook which allows us to store state in a functional component.",
    views: "329K",
    uploadTime: "18 weeks",
    playbackTime: 15,
    likes: "6,897",
    isInWatchLater: false,
    isLiked: false,
    isMustWatch: false,
  },
];

// {
//   _id: "Wo5dMEP_BbI",
//   title: "Awesome Video about Coding",
//   description:
//     "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
//   creator: "Soham Shah",
// },
