import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Link from 'next/link'
import Image from 'next/Image'
import Layout from '../components/layout'

// import NavDropdown from 'react-bootstrap/NavDropdown'

function Navb () {
  return (
    <Layout>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        
          <Link href='/'>
            <Navbar.Brand href="/">
              <Image
                src="/images/xtreeme_logo2_cropped.png"
                alt="xtreeme fitness logo" 
                width={100}
                height={50}
              />
            </Navbar.Brand>
          </Link>
        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Link href='/about'><a><Nav.Link href="#about">About</Nav.Link></a></Link>
            <Link href='/personal_training'><a><Nav.Link href="#personal_training">Personal Training</Nav.Link></a></Link>
            <Link href='/bootcamp'><a><Nav.Link href="#bootcamp">Boot Camp</Nav.Link></a></Link>
            <Link href='/online_training'><a><Nav.Link href="#online_training">Online Training</Nav.Link></a></Link>
            <Link href='/merch'><a><Nav.Link href="merch">Merch</Nav.Link></a></Link>
            {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          {/* <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
          </Nav> */}
        </Navbar.Collapse>
      </Navbar>

      <style jsx global>{`
        .nav_logo {
    
        }
      `}</style>

  </Layout>  
  )
}

export default Navb