import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo'
import BlogCover from '../components/blog-cover/blog-cover-tamplate'
import { graphql, useStaticQuery } from 'gatsby';

const Blog = () => {

    const data = useStaticQuery(graphql`
    query MyQuery {
        allMarkdownRemark(sort: {order: DESC, fields: frontmatter___date}) {
          nodes {
            frontmatter {
              date(fromNow: true)
              slug
              title
              subtitle
            }
          }
        }
      }
      
      
    `)

    console.log(data.allMarkdownRemark.nodes)
    const post = data.allMarkdownRemark.nodes
    return (
        <Layout>
            <SEO title="Blog | Latest blogs" />
            <div className="container">
                <div className="title">
                    <span>Latest Blogs</span>
                </div>
                <div className="row blog-section">
                    {
                        post.map((post, index) => {
                            return (
                                <div className="col-md-6" key={index}>
                                    <BlogCover
                                        to={post.frontmatter.slug}
                                        title={post.frontmatter.title}
                                        date={post.frontmatter.date}
                                        subtitle={post.frontmatter.subtitle}
                                    />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </Layout>
    )
}

export default Blog
