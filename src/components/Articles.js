import { useStaticQuery, graphql, Link } from "gatsby";
import * as React from "react";
import Colors from "./colors";
export default function Template() {
    const data = useStaticQuery(graphql`
        query MyQuery {
            allMdx(filter: { fileAbsolutePath: { regex: "/posts/g" } }) {
                nodes {
                    slug
                    frontmatter {
                        title
                    }
                    tableOfContents
                    excerpt
                }
            }
        }
    `);
    console.log(data);
    return (
        <div style={{ margin: "6px" }}>
            <h2 style={{ color: Colors.red }}>Posts</h2>
            <ul>
                {data.allMdx.nodes.map(node => (
                    <li>
                        <Link to={"/" + node.slug}>{node.frontmatter.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
