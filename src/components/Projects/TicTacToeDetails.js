import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function TicTacToeDetails() {
  return (
    <Container>
      <Row>
        <Col>
          <h1>AI Tic-Tac-Toe Game</h1>
          <p>Created an AI to play tic-tac-toe using a minimax algorithm with alpha-beta pruning. The AI is unbeatable and will always win or draw. The game is implemented in Python and uses the Pygame library for the GUI.</p>
          <img src="path_to_image1.jpg" alt="Detailed view of AI Tic-Tac-Toe Game" />
          {/* Add more images and annotations as needed */}
        </Col>
      </Row>
    </Container>
  );
}

export default TicTacToeDetails;