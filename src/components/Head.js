import { useStaticQuery, graphql, Link } from "gatsby";
import * as React from "react";

const headStyle = {
    backgroundColor: "#a0a0a0",
    padding: "2px",
    color: "#121212",
    display: "flex",
    justifyContent: "space-between",
    position: "sticky",
    top: 0,
};

const linkStyle = {
    color: "#121212",
    margin: "0 10px 0 10px",
};

const divStyle = {
    display: "inline-block",
    margin: "0 10px 0 00px",
};

const divStyleBuild = {
    display: "inline-block",
    margin: "0 10px 0 00px",
    fontSize: "x-small",
};

export default function Template() {
    return (
        <div style={headStyle}>
            <div style={divStyle}>
                <Link style={linkStyle} to={"/"}>
                    START
                </Link>
                |
                <Link style={linkStyle} to={"/posts"}>
                    POSTS
                </Link>
            </div>
            <div style={divStyleBuild}>BUILD: {process.env.GATSBY_BUILDINFO}</div>
        </div>
    );
}
