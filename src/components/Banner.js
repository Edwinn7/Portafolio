import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/Low code development-amico.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Desarrollador back-end", "Desarrollador web", "Desarrollador móvil"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="inicio">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Bienvenido a mi Portafolio</span>
                  <h1>{`Hola! Soy Edwin`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Desarrollador back-end", "Desarrollador web", "Desarrollador móvil" ]'><span className="wrap">{text}</span></span></h1>
                  <p>Persona comprometida y orientada a objetivos con habilidades para colaborar en equipo. Me entusiasma trabajar en entornos dinámicos y desafiantes, siempre en busca de nuevas oportunidades para mejorar tanto personal como profesionalmente. Estoy interesado en explorar nuevas tecnologías y herramientas para estar al día con las últimas tendencias en desarrollo.</p>
                  <a href="/#contacto" style={{ textDecoration: "none" }}><button>Contacto<ArrowRightCircle size={25} /></button></a>
                  <a href="https://drive.google.com/file/d/1hs-2WRsMD7JBoh-g8KdyjxAJ4Q5iOZu7/view" style={{ textDecoration: "none" }}><button>Ver currículum<ArrowRightCircle size={25} /></button></a>
                </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img" />
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}