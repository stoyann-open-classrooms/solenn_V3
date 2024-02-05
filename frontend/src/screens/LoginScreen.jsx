
import { Form, Button, Row, Col } from 'react-bootstrap'



import { toast } from 'react-toastify'
import bg from '../assets/solar_panel_bg.jpg'

const LoginScreen = () => {

  return (
    <Row className="login-row">
    <Col md={6} className="login-image" style={{
      backgroundImage: `url('${bg}')`,
      backgroundSize: 'cover',
      opacity: 0.9,
      borderRadius: '10px 0px 0px 10px',
    }}>
      {/* Empty column to show background image */}
    </Col>
    <Col md={6}>
      <div className="form-container">
        <h1>Connexion</h1>
          <Form >
            <Form.Group className="my-3" controlId="email">
              <Form.Label>Votre adresse email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Entrer votre email"
                
              ></Form.Control>
            </Form.Group>
            <Form.Group className="my-3" controlId="password">
              <Form.Label>Votre mot de passe</Form.Label>
              <Form.Control
                type="password"
                placeholder="Entrer votre mot de passe"
               
              ></Form.Control>
            </Form.Group>

            <Button
              type="submit"
              variant="primary"
              className="mt-2"
             
            >
              Connection
            </Button>
           
          </Form>

        </div>
      </Col>
    </Row>
  )
}

export default LoginScreen
