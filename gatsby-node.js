exports.createSchemaCustomization = ({ actions: { createTypes } }) => {
    createTypes(`
    type Mdx implements Node {
      frontmatter2: MdxFrontmatter
    }

    type MdxFrontmatter {
 
      content: String @mdx
    }
  `);
};
