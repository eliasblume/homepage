import { Link } from "gatsby";
import * as React from "react";
import { MDXProvider } from "@mdx-js/react";
import Colors from "./colors";
import Articles from "./Articles";
import Header from "./Head";

const contentStyle = {
    margin: "6px",
};

const Colorize = props => <a style={{ color: Colors[props.color] }}> {props.children} </a>;
const Inverted = props => (
    <a style={{ color: Colors.background, backgroundColor: Colors.foreground }}> {props.children} </a>
);
const shortcodes = { Link, Colorize, Inverted };

export default ({ children }) => (
    <div>
        <Header />
        <div style={contentStyle}>
            <MDXProvider components={shortcodes}>{children}</MDXProvider>
            <hr />
            <Articles />
        </div>
    </div>
);
