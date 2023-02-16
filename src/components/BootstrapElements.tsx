import { Container, Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/esm/Button'
import Jumbotron from 'react-bootstrap/esm/Jumbotron'

const BootstrapElements = () => {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col className="text-dark">
          <Jumbotron>
            <h1>Hello, world!</h1>
            <p>
              This is a simple hero unit, a simple jumbotron-style component for
              calling extra attention to featured content or information.
            </p>
            <p>
              <Button variant="success">Learn more</Button>
            </p>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  )
}

export default BootstrapElements
