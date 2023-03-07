import React from "react"
import styled from "styled-components"
import Header from "../components/header"
import Filter from "../components/filter"
import Courses from "../components/courses"
import Footer from "../components/footer"

const HomePageWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
`

const HomePage = () => (
  <HomePageWrapper>
    <Header />
    <Filter />
    <Courses />
    <Footer />
  </HomePageWrapper>
)

export default HomePage

