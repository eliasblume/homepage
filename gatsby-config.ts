import rehypeHighlight from "rehype-highlight";
import remarkHighlight from "remark-highlight.js";
import "dotenv/config";

module.exports = {
    siteMetadata: {
        siteUrl: "https://elias-blu.me",
        title: "Homepage",
    },
    plugins: [
        "gatsby-plugin-image",
        "gatsby-plugin-sitemap",
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                icon: "src/images/icon.png",
            },
        },
        {
            resolve: `gatsby-plugin-mdx`,
            options: {
                rehypePlugins: [
                    // Generate heading ids for rehype-autolink-headings
                    // require("rehype-slug"),
                    // To pass options, use a 2-element array with the
                    // configuration in an object in the second element
                    //[require("rehype-autolink-headings"), { behavior: "wrap" }],
                    //[require("remark-highlight.js"), {}],
                    [rehypeHighlight],
                ],
                defaultLayouts: {
                    // posts: require.resolve("./src/components/posts-layout.js"),
                    default: require.resolve("./src/components/default-page-layout.js"),
                },
            },
        },
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: "./src/images/",
            },
            __key: "images",
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "pages",
                path: "./src/pages/",
            },
            __key: "pages",
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `posts`,
                path: `./src/posts/`,
            },
        },
        {
            resolve: "gatsby-plugin-page-creator",
            options: {
                path: `./src/posts`,
            },
        },
    ],
};
