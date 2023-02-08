// let's create now our Custom Navbar component, starting from the
// responsive navbar example in the react-bootstrap documentation!

// which component should I create for this?
// this is not going to be a very powerful or important component,
// it will not hold a lot of logic... so I will use a function!

import { Navbar, Nav, Button } from 'react-bootstrap'
import { Link, useLocation, useNavigate } from 'react-router-dom'

// our Navbar works, but the links are not getting highlighted correctly when
// I click on any of them! How can I apply the className of "active" to the
// currently selected navbar-link?

// so the question is: how can a component know which page the browser is
// currently sitting in?

const CustomNavbar = (props) => {
  // console.log(props)

  const location = useLocation()
  console.log('location object:', location)

  const navigate = useNavigate()
  // navigate is now a function that redirects the user programmatically
  // similar to window.location.redirect, but BETTER (does not refresh the browser)

  return (
    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
      <Link to="/">
        <Navbar.Brand>Epistaurant - {props.additionalBrand}</Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Link to="/booking">
            <div
              className={
                location.pathname === '/booking'
                  ? 'nav-link active'
                  : 'nav-link'
              }
            >
              Booking
            </div>
          </Link>
          <Link to="/menu">
            <div
              // template literal example: more elegant, less readable 8)
              className={`nav-link${
                location.pathname === '/menu' ? ' active' : ''
              }`}
            >
              Menu
            </div>
          </Link>
          <Link to="/contact">
            <div
              className={
                location.pathname === '/contact'
                  ? 'nav-link active'
                  : 'nav-link'
              }
            >
              Contact
            </div>
          </Link>
          <Button variant="warning" onClick={() => navigate('/')}>
            GO HOME
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default CustomNavbar
