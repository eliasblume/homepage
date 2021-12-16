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

export default ({ children, pageContext }) => {
    return (
        <div>
            <Header />

            {pageContext.frontmatter.title && (
                <div style={contentStyle}>
                    <h1>
                        {pageContext.frontmatter.title} <i>({pageContext.frontmatter.date})</i>
                    </h1>
                </div>
            )}

            <div style={contentStyle}>
                <MDXProvider components={shortcodes}>{children}</MDXProvider>
                <hr />
            </div>
            <Articles />
        </div>
    );
};
