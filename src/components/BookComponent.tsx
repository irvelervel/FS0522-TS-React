import { Card, Button } from 'react-bootstrap'
import { IBook } from '../interfaces/IBook'

interface BookComponentProps {
  book: IBook
  sayHello: (person: string) => void
}

const BookComponent = (props: BookComponentProps) => (
  <Card style={{ fontSize: '0.5em' }}>
    <Card.Img variant="top" src={props.book.imageUrl} />
    <Card.Body>
      <Card.Title>{props.book.title}</Card.Title>
      <Card.Text>
        {props.book.description} - {props.book.price}
      </Card.Text>
      <Button onClick={() => props.sayHello('Stefano')}>Say hello!</Button>
    </Card.Body>
  </Card>
)

export default BookComponent
