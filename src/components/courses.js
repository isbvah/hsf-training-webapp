// src/components/Courses.js

import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Courses = () => {
  const data = useStaticQuery(graphql`
    query {
      allCoursesYaml {
        edges {
          node {
            id
            name
            description
            repository
            status
            videos
            webpage
          }
        }
      }
    }
  `)

  const courses = data.allCoursesYaml.edges.map((edge) => edge.node)

  return (
    <section id="courses">
      <h2>Courses</h2>
      <div className="courses-container">
        {courses.map((course) => (
          <div key={course.id} className="course-card">
            <h3>{course.name}</h3>
            <p>{course.description}</p>
            <a href={course.repository}>Repository</a>
            <a href={course.webpage}>Webpage</a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Courses

