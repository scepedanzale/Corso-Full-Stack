
import { Container, Card} from 'react-bootstrap';

function Welcome() {
  return (
      <Container fluid className='py-4 border-bottom border-1 border-black'>
        <Card className='border-0'>
            <Card.Body>
            <Card.Text>
                <h1>EpiBooks</h1>
                vendo solo libri che piacciono a me
            </Card.Text>
            </Card.Body>
        </Card>
      </Container>
  );
}

export default Welcome;
