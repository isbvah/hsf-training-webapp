import React, { useState } from "react";
import Courses from "./courses.js";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";

// Create styled components
const Section = styled.section`
  padding: 20px;
  border: 1px solid #ccc;
`;

const H2 = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

const FilterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 20px;
`;

const FilterItem = styled.div`
  display: flex;
  align-items: center;
`;

const Label = styled.label`
  margin-right: 10px;
`;

const Select = styled.select`
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Input = styled.input`
  margin-right: 5px;
`;

const Filter = () => {
  const [status, setStatus] = useState("all");
  const [hasVideos, setHasVideos] = useState(false);

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
            heroImage
          }
        }
      }
    }
  `);

  const courses = data.allCoursesYaml.edges.map(function (edge) {
    return edge.node;
  });

  const filteredCourses = courses.filter(function (course) {
    // Filter by status
    if (status !== "all" && course.status !== status) {
      return false;
    }

    // Filter by videos
    if (hasVideos && !course.videos) {
      return false;
    }

    return true;
  });

  function handleStatusChange(e) {
    setStatus(e.target.value);
  }

  function handleHasVideosChange(e) {
    setHasVideos(e.target.checked);
  }

  return (
    <Section id="filter">
      <H2>Filter</H2>
      <FilterContainer>
        <FilterItem>
          <Label htmlFor="status">Status:</Label>
          <Select id="status" value={status} onChange={handleStatusChange}>
            <option value="all">All</option>
            <option value="stable">Stable</option>
            <option value="beta">Beta</option>
            <option value="alpha">Alpha</option>
          </Select>
        </FilterItem>
        <FilterItem>
          <Label htmlFor="videos">Videos:</Label>
          <Input
            id="videos"
            type="checkbox"
            checked={hasVideos}
            onChange={handleHasVideosChange}
          />
        </FilterItem>
      </FilterContainer>
      <Courses courses={filteredCourses} />
    </Section>
  );
};

export default Filter;

