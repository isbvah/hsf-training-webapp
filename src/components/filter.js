import React from "react"
import styled from "styled-components"

const FilterWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`

const Filter = () => (
  <FilterWrapper>
    <select>
      <option value="">Filter Option 1</option>
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
    </select>
    <select>
      <option value="">Filter Option 2</option>
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
    </select>
    <input type="text" placeholder="Search..." />
  </FilterWrapper>
)

export default Filter

