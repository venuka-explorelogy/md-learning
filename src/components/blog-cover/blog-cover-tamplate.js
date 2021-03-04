import React from 'react';
import { Link } from 'gatsby'

const BlogCover = ({ title, subtitle, date, to }) => {
    return (
        <Link to={to}>
            <div>
                <div className="blog-main">
                    <div className="blog-content">
                        <div className="blog-title">
                            <span>{title}</span>
                            <span style={{ fontSize: 14 }}>{date}</span>
                            <span className="blog-cover-footer-text">{subtitle}</span>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default BlogCover