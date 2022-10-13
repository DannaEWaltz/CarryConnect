import { Button, Form } from 'react-bootstrap';

function SignUp() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formNamel">
        <Form.Label>Name</Form.Label>
        <Form.Control type="name" placeholder="Enter name" />
        <Form.Text className="text-muted">Preferred Name</Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>     
      <Button variant="danger" type="submit">Submit</Button>
    </Form>
  );
}

export default SignUp;