import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/github.svg";
import navIcon3 from "../assets/img/cv.svg";
import logo from "../assets/img/logo.svg";
export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col lg={12}>
            <div className="newsletter-bx wow slideInUp">
              <h3>Espero que mi portafolio haya sido una demostración de mi pasión por la programación<br></br>y mi compromiso con la calidad y el rendimiento en cada proyecto en el que trabajo.</h3>
            </div>
          </Col>
          <Col size={12} sm={6}>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/edwin-nieto-b85607240/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/Edwinn7?tab=repositories"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://drive.google.com/file/d/1hs-2WRsMD7JBoh-g8KdyjxAJ4Q5iOZu7/view"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
