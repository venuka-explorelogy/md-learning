import React from 'react'
import { graphql } from "gatsby"
import Layout from '../components/layout'

export default function Templateblog({ data }) {

  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark

  return (
    <Layout>
      <div className="blog-post-container ">
        <div className="blog-post container">
          <p className="blog-post-date">{frontmatter.date}</p>
          <span>{frontmatter.title}</span>
          <p>{frontmatter.subtitle}</p>
          <hr />
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      fields {
        slug
      }
      frontmatter {
        slug
        subtitle
        title
        date(fromNow: true)
      }
    }
  }
`