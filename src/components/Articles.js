import { useStaticQuery, graphql, Link } from "gatsby";
import * as React from "react";
import Colors from "./colors";
export default function Template() {
    const data = useStaticQuery(graphql`
        query MyQuery {
            allMdx(
                limit: 10
                sort: { fields: frontmatter___date }
                filter: { frontmatter: { type: { eq: "listedPost" } } }
            ) {
                nodes {
                    slug
                    excerpt(pruneLength: 100)
                    frontmatter {
                        date
                        description
                        title
                    }
                    tableOfContents
                    timeToRead
                }
            }
        }
    `);
    return (
        <div style={{ margin: "6px" }}>
            <h2 style={{ color: Colors.red, textShadow: " 0 0 2px " + Colors.red + "e6" }}>Posts</h2>
            <ul>
                {data.allMdx.nodes.map((node, i) => (
                    <li key={i}>
                        <Link to={"/" + node.slug}>{node.frontmatter.title}</Link> (
                        {node.frontmatter.date}) Read it in {node.timeToRead} minute
                        {node.timeToRead > 1 && <a>s</a>} <p> {node.frontmatter.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
