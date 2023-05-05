import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg2 from "../assets/img/Programming-pana.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Enviar');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Enviando...");
    let response = await fetch("https://probable-metal-scorpio.glitch.me/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Enviar");
    let result = await response.json();
    let timeout;
    setFormDetails(formInitialDetails);
    if (result.code === 200) {
      setStatus({ succes: true, message: 'Mensaje enviado con éxito' });
      timeout = setTimeout(() => {
        setStatus(false);
      }, 10000);
    } else {
      setStatus({ succes: false, message: 'Algo salió mal, inténtalo de nuevo más tarde.' });
    }
  };

  return (
    <section className="contact" id="contacto">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg2} alt="Contact Us" />
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Ponerse en contacto</h2>
                  <form onSubmit={handleSubmit}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" value={formDetails.firstName} placeholder="Nombre" onChange={(e) => onFormUpdate('firstName', e.target.value)} pattern="[A-Za-z]+" required />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" value={formDetails.lastName} placeholder="Apellido" onChange={(e) => onFormUpdate('lastName', e.target.value)} pattern="[A-Za-z]+" required />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="email" value={formDetails.email} placeholder="Correo " onChange={(e) => onFormUpdate('email', e.target.value)} pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$" required />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="tel" value={formDetails.phone} placeholder="Número de teléfono" onChange={(e) => onFormUpdate('phone', e.target.value)} pattern="^\+\d{1,3}\d{9}$" required />
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea rows="6" value={formDetails.message} placeholder="Mensaje" onChange={(e) => onFormUpdate('message', e.target.value)} required></textarea>
                        <button type="submit"><span>{buttonText}</span></button>
                      </Col>
                      {
                        status.message &&
                        <Col>
                          <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                        </Col>
                      }
                    </Row>
                  </form>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
