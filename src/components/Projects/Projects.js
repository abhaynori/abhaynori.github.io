import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Airline Integration Management System (AIMS)"
              description="I worked on this project during my internship at Thales Avionics. I developed a comprehensive system to manage and integrate mutliple components of airline operations using Docker, PostgreSQL, ReactJS, and Flask Python"
              // ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://docs.google.com/document/d/1AAInRtNVyArexcvarPEegn2vpq_ePrCHyKQkzNe3p_k/preview?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Online Java Course"
              description="Developed a comprehensive Java course for underprivileged children, which was adopted by three local schools and benefited over 100 students. Partnered up with Codecademy and published our course on their website. This project underscores my dedication to using technology for social impact. By increasing student interest in computer science by 40%, I demonstrated the transformative potential of education and technology in empowering communities."
              // ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://www.codecademy.com/learn/learn-java"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={true}
              title="AI Tic-Tac-Toe Game"
              description="Created an AI to play tic-tac-toe using a minimax algorithm with alpha-beta pruning. The AI is unbeatable and will always win or draw. The game is implemented in Python and uses the Pygame library for the GUI."
              ghLink="https://github.com/abhaynori/AI-Tic-Tac-Toe"
              demoLink="https://docs.google.com/document/d/1wwaObhPdCvbVN00F0MmUIf8hvpARiXobcpC9DC6IC5A/preview?tab=t.0"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
