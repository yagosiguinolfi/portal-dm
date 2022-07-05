import { Container } from './styles';
import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { FiHome } from 'react-icons/fi';

export function MenuHeader() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Container>
        <button onClick={handleShow} className="botao" >
          <MenuIcon />
        </button>
      </Container>

      {/* <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu Democrata </Offcanvas.Title>
        </Offcanvas.Header >
        <Offcanvas.Body>
          <Accordion defaultActiveKey="20">
            <ListGroup.Item><Link to="/"><FiHome /> Home</Link></ListGroup.Item>
            <Accordion.Item eventKey="0">
              <Accordion.Header style={{ backgroundColor: '#373334' }}>Departamentos</Accordion.Header>
              <Accordion.Body style={{ padding: 0 }}>
                <ListGroup variant="flush">
                  <ListGroup.Item><Link to="/financeiro">Financeiro</Link></ListGroup.Item>
                </ListGroup>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Configurações</Accordion.Header>
              <Accordion.Body style={{ padding: 0 }}>
                <ListGroup>
                  <ListGroup.Item><Link to="/usuarios">Usuarios</Link></ListGroup.Item>
                </ListGroup>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>

        </Offcanvas.Body>
      </Offcanvas> */}
    </>
  );
}