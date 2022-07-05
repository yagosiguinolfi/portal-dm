import React, { Fragment, useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import api from '../../services/api';
import { useAuth } from '../../hooks/auth';
import { Button } from '@mui/material';
import { Container } from '../../utils/styles';
import { Header } from '../../components/Header';

function Home() {

  const navigate = useNavigate();
  const { signOut } = useAuth();
  const [usuario, setUsuario] = useState({ id: '', nome: '' });

  useEffect(() => {
    async function fetchData() {
      const response = await api.get(`/v1/usuarios/me`)
      setUsuario({
        id: response.data[0].records[0].id,
        nome: response.data[0].records[0].nome,
      })
    }
    fetchData();
  }, [])


  function showUser() {
    console.log(usuario)
  }


  return (
    <Container>
      <Header />
      <Button variant='contained' onClick={showUser}>
        Get User
      </Button>

    </Container>
  );
}
export default Home;