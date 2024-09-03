import React from "react";
import styled from "styled-components";

const CardComponents = styled.div`
  background-color: var(--second);
  width: 300px;
  height: 400px;
  padding: 20px;
`;

const ProjectCard = () => {
  return <CardComponents></CardComponents>;
};

export default ProjectCard;
