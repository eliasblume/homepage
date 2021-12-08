import { useStaticQuery, graphql, Link } from "gatsby";
import * as React from "react";

const headStyle = {
    backgroundColor: "#a0a0a0",
    padding: "2px",
};

const linkStyle = {
    color: "#121212",
    marginLeft: "20px",
    textDecoration: "none",
};

export default function Template() {
    return (
        <div style={headStyle}>
            <Link style={linkStyle} to={"/"}>
                START
            </Link>
        </div>
    );
}
