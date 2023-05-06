import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/Captura2.PNG";
import projImg3 from "../assets/img/Captura4.png";
import projImg4 from "../assets/img/Captura3.PNG";
import projImg5 from "../assets/img/ChatApp.png";
import projImg from "../assets/img/Captura.PNG";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Aplicación del tiempo",
      description:"Programa que muestra la información meteorológica y la hora de la ubicación solicitada. (Click para ver en vivo)",
      imgUrl: projImg1,
      linkUrl:"https://app-meteorologica-5e217.web.app/"
    },
    {
      title: "Restaurante",
      description: "Web de un restaurante para registro de platos, empleados y reservas",
      imgUrl: projImg,
      linkUrl:"https://github.com/Edwinn7/restaurante"
    },
    {
      title: "Hotel",
      description: "interfaz de un hotel desarrollado en angular ",
      imgUrl: projImg2,
      linkUrl:"https://github.com/Edwinn7/InterfazHotel"
    },
    {
      title: "Aplicación de noticias",
      description: "Aplicación simple de noticias, permite ver y buscar las últimas noticias relevantes. (Click para ver en vivo)",
      imgUrl: projImg4,
      linkUrl:"https://appetize.io/app/fxf5dboitmzcya6huntvb3i57a?device=pixel4&osVersion=11.0&scale=75"
    },
    {
      title: "Aplicación de chat",
      description: "Aplicación de mensajería sencilla, permite la interacción de varios usuarios, permite adjuntar archivos y es en tiempo real con la API chatengine.io",
      imgUrl: projImg5,
      linkUrl:"https://github.com/Edwinn7/ChatApp"
    },
    {
      title: "Web de películas",
      description: "Página web que permite ver informacion general sobre peliculas y programas de tv. (Click para ver en vivo)",
      imgUrl: projImg3,
      linkUrl:"https://webmovie-c926b.web.app/"
    },
  ];

  return (
    <section className="project" id="projectos">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projectos</h2>
                <p>Algunos de los proyectos más recientes que he realizado</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Pronto...</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>Pronto...</p>
                    </Tab.Pane>

                    <Tab.Pane eventKey="third">
                      <p>Pronto...</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
