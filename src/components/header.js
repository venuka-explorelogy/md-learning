import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = () => (
  <div className="main-header">
    <ul>
      <Link to="/">
        <li>Home</li>
      </Link>
      <Link to="/blog">
        <li>Blog</li>
      </Link>
    </ul>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
