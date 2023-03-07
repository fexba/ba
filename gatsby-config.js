console.log(process.env.NODE_ENV);

const isDev = "development" === process.env.NODE_ENV;

const baseUrl = isDev ? "http://localhost:8000" : `https://ba.js.cool`;

module.exports = {
  siteMetadata: {
    name: `面霸`,
    description: `面霸 - 前端面试专题`,
    keywords: [`面试`, `vue`, `react`, `前端`],
    siteUrl: `${baseUrl}`,
    siteImage: `${baseUrl}/images/graph-image.jpg`,
    profileImage: `${baseUrl}/images/profile-image.jpg`,
    lang: `zh`,
    config: {
      sidebarWidth: 280,
    },
  },
  plugins: [
    {
      resolve: `@pauliescanlon/gatsby-theme-terminal`,
      options: {
        source: [
          {
            name: "JavaScript",
            dir: "js",
          },
          {
            name: "ECMAScript6",
            dir: "es6",
          },
          {
            name: "TypeScript",
            dir: "ts",
          },
          {
            name: "CSS",
            dir: "css",
          },
          {
            name: "Vue",
            dir: "vue",
          },
          {
            name: "React",
            dir: "react",
          },

          {
            name: "Nodejs",
            dir: "node",
          },
          {
            name: "源码解析",
            dir: "code",
          },
          {
            name: "构建工具",
            dir: "build",
          },
        ],
      },
    },
    // {
    //   resolve: 'gatsby-plugin-google-analytics',
    //   options: {
    //     trackingId: 'UA-76055934-8',
    //   },
    // },
  ],
};
