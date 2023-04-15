import { Container, Row, Col, Button } from 'react-bootstrap';
import React from "react";
import Wallet from "@/components/Wallet";

export default function Home() {
  return (
      <Container>
        <Row className="justify-content-center mt-5">
          <Col xs={12} md={6} className="text-center">
            <h1>Welcome to Ethereum Wallet</h1>
            <p>
              Create and manage your Ethereum wallet with a modern and responsive user interface.
            </p>

              <Wallet />
          </Col>
        </Row>
      </Container>
  );
}
