import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #f8f8f8;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`

const HomeLink = styled(Link)`
  font-size: 1.5rem;
  color: #333;
  text-decoration: none;
`

const NavLinks = styled.nav`
  display: flex;
`

const NavLink = styled(Link)`
  margin-left: 1rem;
  color: #333;
  text-decoration: none;
  font-weight: bold;
  &:hover {
    text-decoration: underline;
  }
`

const Header = () => (
  <HeaderWrapper>
    <HomeLink to="/">Home</HomeLink>
    <NavLinks>
      <NavLink to="/courses">Courses</NavLink>
      <NavLink to="/blog">Blog</NavLink>
    </NavLinks>
  </HeaderWrapper>
)

export default Header

