import { FormEvent, useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const FormComponent = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [checkboxValue, setCheckboxValue] = useState(false)

  const navigate = useNavigate()

  const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value)
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    console.log(firstName, lastName, checkboxValue)
    // let's redirect the user home
    setTimeout(() => {
      navigate('/')
    }, 2000)
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Firstname</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter name"
          value={firstName}
          onChange={handleFirstNameChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Lastname</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter surname"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Check
          type="checkbox"
          label="Check me out"
          checked={checkboxValue}
          onChange={(e) => setCheckboxValue(e.target.checked)}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
}

export default FormComponent
