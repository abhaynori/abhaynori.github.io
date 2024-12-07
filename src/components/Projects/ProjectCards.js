import React from "react";
import { Card, Button } from "react-bootstrap";

function ProjectCard({ imgPath, isBlog, title, description, ghLink, demoLink }) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text style={{ textAlign: "left" }}>
          {description}
        </Card.Text>
        {ghLink && (
          <Button variant="primary" href={ghLink} target="_blank">
            GitHub
          </Button>
        )}
        {"\n"}
        {demoLink && (
          <Button variant="primary" href={demoLink} target="_blank" style={{ marginLeft: "10px" }}>
            Demo
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;