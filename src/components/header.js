import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`

const NavLink = styled(Link)`
  margin-left: 1rem;
  color: #333;
  text-decoration: none;
`

const Header = () => (
  <HeaderWrapper>
    <Link to="/">Home</Link>
    <nav>
      <NavLink to="/courses">Courses</NavLink>
      <NavLink to="/blog">Blog</NavLink>
    </nav>
  </HeaderWrapper>
)

export default Header

