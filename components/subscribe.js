import Jumbotron from 'react-bootstrap/Jumbotron'
import Image from 'next/Image'
import Layout from '../components/layout'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'


function Subscribe () {
    return(
    <Layout>
        <Form>
            <div className="subscribe_container">
                <div className="subscribe_image">
                    <Image
                    src="/images/xtreeme logo1.png"
                    alt="xtreeme fitness logo" 
                    width={500}
                    height={500}
                    />    
                </div>
                <div className="subscribe_form">
                    <Form.Group controlId="formName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="name" placeholder="First Name" />
                    </Form.Group>
                    <Form.Group controlId="formName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="name" placeholder="Last Name" />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </div>
            </div>
        </Form>
    </Layout>
    )

}

export default Subscribe