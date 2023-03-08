import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled, { keyframes } from "styled-components"

const getStatusColor = (status) => {
  switch (status) {
    case "stable":
      return "#22bb33"
    case "beta":
      return "#ffbb33"
    case "alpha":
      return "#ff4444"
    default:
      return "#666666"
  }
}

const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`

const scaleIn = keyframes`
  0% { transform: scale(0); }
  100% { transform: scale(1); }
`

const CoursesContainer = styled.section`
  text-align: center;
`

const CoursesHeader = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
`

const CourseCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
  display: inline-block;
  margin: 1rem;
  overflow: hidden;
  position: relative;
  width: 300px;

  &:hover {
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
  }

  .course-hero-image {
    height: 150px;
    overflow: hidden;

    img {
      height: 100%;
      object-fit: cover;
      width: 100%;
    }
  }

  .course-details {
    padding: 1rem;

    h3 {
      font-size: 1.5rem;
      margin-bottom: 0.5rem;
    }

    p {
      font-size: 1.1rem;
      margin-bottom: 1rem;
    }

    .course-status {
      font-size: 1.2rem;
      font-weight: bold;
      margin-bottom: 1rem;
      text-transform: uppercase;

      &:before {
        content: "";
        display: inline-block;
        height: 10px;
        margin-right: 0.5rem;
        width: 10px;
      }

      &.stable:before {
        background-color: #22bb33;
        border-radius: 50%;
      }

      &.beta:before {
        background-color: #ffbb33;
        border-radius: 50%;
      }

      &.alpha:before {
        background-color: #ff4444;
        border-radius: 50%;
      }

      &.default:before {
        background-color: #666666;
        border-radius: 50%;
      }
    }

    a {
      background-color: #22bb33;
      border-radius: 3px;
      color: #fff;
      display: block;
      font-weight: bold;
      margin-bottom: 0.5rem;
      padding: 0.5rem;
      text-align: center;
      text-decoration: none;
      text-transform: uppercase;
      transition: background-color 0.2s ease;

      &:hover {
        background-color: #1e9e2d;
      }
    }
  }

  animation: ${fadeIn} 0.5s ease forwards, ${scaleIn} 0.5s ease forwards;
  animation-delay: ${props => props.index * 0.1}s;
`

const Courses = () => {
  const data = useStaticQuery(graphql `query { allCoursesYaml { edges { node { id name description repository status videos webpage heroImage } } } } ` )

const courses = data.allCoursesYaml.edges.map(function (edge) {
return edge.node;
});

return (
<CoursesContainer>
<CoursesHeader>Courses</CoursesHeader>
{courses.map((course, index) => (
<CourseCard key={course.id} index={index}>
{course.heroImage && (
<div className="course-hero-image">
<img
src={course.heroImage}
alt={`Hero image for ${course.name}`}
/>
</div>
)}
<div className="course-details">
<h3>{course.name}</h3>
<p>{course.description}</p>
<div className={`course-status ${course.status}`}>
{course.status}
</div>
<a href={course.repository}>Repository</a>
<a href={course.webpage}>Webpage</a>
{course.videos && <a href={course.videos}>Video Playlist</a>}
</div>
</CourseCard>
))}
</CoursesContainer>
)
}

export default Courses
