import { useEffect, useState } from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import BookComponent from './BookComponent'
import { IBook } from '../interfaces/IBook'

const FetchComponent = () => {
  const URL = 'https://striveschool-api.herokuapp.com/food-books'

  const [books, setBooks] = useState<IBook[]>([])
  // type inference here is doing instead a terrible job!
  // without any shape on the array, is automatically assigning to books
  // a type of never[]
  // type never --> a value that never happens, that never exists

  // so, let's provide TS with a shape for the book object!

  const sayHello = (person: string) => {
    console.log('Hello, ' + person)
  }

  const fetchBooks = async () => {
    try {
      let response = await fetch(URL)
      if (response.ok) {
        let booksFromApi = await response.json()
        console.log(booksFromApi)
        setBooks(booksFromApi)
      } else {
        console.log('Error! :(')
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchBooks()
  }, [])

  return (
    <Container>
      <Row className="justify-content-center">
        <Col className="text-center">
          <h2>Food Books from the internet! :)</h2>
        </Col>
      </Row>
      <Row>
        {books.map((b) => (
          <Col xs={12} md={4} lg={3} className="text-dark" key={b.id}>
            <BookComponent book={b} sayHello={sayHello} />
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default FetchComponent
