import { Link } from "gatsby";
import * as React from "react";
import { MDXProvider } from "@mdx-js/react";
import Colors from "./colors";
import Articles from "./Articles";
import Header from "./Head";

const contentStyle = {
    margin: "6px",
};

const Colorize = props => (
    <a style={{ color: Colors[props.color], textShadow: " 0 0 2px " + Colors[props.color] + "e6" }}>
        {props.children}
    </a>
);
const Inverted = props => (
    <a style={{ color: Colors.background, backgroundColor: Colors.foreground }}> {props.children} </a>
);

const shortcodes = { Link, Colorize, Inverted };

export default props => {
    const { pageContext, children } = props;
    const { frontmatter } = pageContext;
    console.log(frontmatter);
    return (
        <div>
            <Header />

            {frontmatter.title && frontmatter.date && (
                <div style={contentStyle}>
                    <h1>
                        {frontmatter.title} <i>({frontmatter.date})</i>
                    </h1>
                </div>
            )}

            <div style={contentStyle}>
                <MDXProvider components={shortcodes}>{children}</MDXProvider>
            </div>

            {frontmatter.displayPosts !== false && (
                <div>
                    <hr />
                    <Articles />
                </div>
            )}
        </div>
    );
};
