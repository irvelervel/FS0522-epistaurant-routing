import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import CustomNavbar from './components/CustomNavbar'
import Home from './components/Home'
import ReservationForm from './components/ReservationForm'
import ReservationList from './components/ReservationList'
import { Col, Container, Row } from 'react-bootstrap'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NotFound from './components/NotFound'
import Menu from './components/Menu'
import Details from './components/Details'
import ClassComponent from './components/ClassComponent'

// with react-router-dom we'll be able to split different components
// into different routes (urls, sections) of our website

// we need 3 components from react-router-dom to achieve this:
// BrowserRouter
// Routes
// Route

// BrowserRouter is a main Router wrapper, wrap everything into it to be sure
// Routes is another wrapper, this time just for Route components
// Route defines a single route in your application

// Routes will be used to wrap just the sections you want to dynamically load
// upon specific paths

// and then Route will take care of declaring individual routes
// a route can be thought like this: "I want to load this component on this url"

function App() {
  return (
    <BrowserRouter>
      <div>
        {/* a prop is an additional piece of info you add on the
      INVOCATION of a component */}
        <CustomNavbar additionalBrand="Best Italian Restaurant" />
        {/* you can have as many Routes blocks as you want! */}
        {/* <Routes>
          <Route path="/" element={<h2>HOMEPAGE!</h2>} />
          <Route path="/bati" element={<h2>BATI'S PAGE!</h2>} />
          <Route path="/stefano" element={<h2>STEFANO'S PAGE</h2>} />
        </Routes> */}
        {/* so far we still don't know how to create a new "page"
      for our restaurant website, so let's put the reservation
      section here, temporarily! */}

        {/* I want to write Container, Row and Col in a single place */}
        <Container>
          <Row className="mt-3 justify-content-center">
            <Col xs={12} md={6} className="text-center">
              <Routes>
                <Route element={<Home />} path="/" />
                <Route element={<ReservationForm />} path="/booking" />
                {/* NESTED ROUTE EXAMPLE */}
                {/* <Route path="/booking"> */}
                {/* the following route happens on /booking/user */}
                {/* <Route path="user" element={<ReservationForm />} /> */}
                {/* the following route happens on /booking/admin */}
                {/* <Route path="admin" element={<p>admin section</p>} /> */}
                {/* </Route> */}
                <Route element={<ReservationList />} path="/admin" />
                <Route element={<Menu />} path="/menu" />
                {/* we need to create a special kind of route, something
                DYNAMIC (that works with a variety of similar URLs) */}
                <Route element={<Details />} path="/details/:pastaId" />
                <Route element={<ClassComponent />} path="/class" />
                <Route element={<NotFound />} path="*" />
              </Routes>
            </Col>
          </Row>
        </Container>
      </div>
    </BrowserRouter>
  )
}

export default App
