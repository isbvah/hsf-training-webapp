import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"

const Filter = () => {
  const [status, setStatus] = useState("all")
  const [hasVideos, setHasVideos] = useState(false)

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

  const filteredCourses = courses.filter((course) => {
    // Filter by status
    if (status !== "all" && course.status !== status) {
      return false
    }

    // Filter by videos
    if (hasVideos && !course.videos) {
      return false
    }

    return true
  })

  const handleStatusChange = (e) => {
    setStatus(e.target.value)
  }

  const handleHasVideosChange = (e) => {
    setHasVideos(e.target.checked)
  }

  return (
    <section id="filter">
      <h2>Filter</h2>
      <div className="filter-container">
        <div className="filter-item">
          <label htmlFor="status">Status:</label>
          <select id="status" value={status} onChange={handleStatusChange}>
            <option value="all">All</option>
            <option value="stable">Stable</option>
            <option value="beta">Beta</option>
            <option value="alpha">Alpha</option>
          </select>
        </div>
        <div className="filter-item">
          <label htmlFor="videos">Videos:</label>
          <input
            id="videos"
            type="checkbox"
            checked={hasVideos}
            onChange={handleHasVideosChange}
          />
        </div>
      </div>
      <div className="courses-container">
        {filteredCourses.map((course) => (
          <div key={course.id} className="course-card">
            <h3>{course.name}</h3>
            <p>{course.description}</p>
            <a href={course.repository}>Repository</a>
            <a href={course.webpage}>Webpage</a>
            {course.videos && (
              <a href={course.videos}>Video playlist</a>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Filter

