
import React from 'react';
import { Container, Content, LabelHeader, LeftGroup, RightGroup } from './styles';
import { MenuHeader } from '../MenuHeader';
import { Link, useNavigate } from 'react-router-dom';
import imgLogo from '../../assets/logo-portal-democrata.png';
import { Button } from '@mui/material';

export function Header() {

  const navigate = useNavigate();
  const nome = localStorage.getItem('@Democrata:user')

  return (
    <Container>
      <LeftGroup>
        <MenuHeader />
        {/* <MenuSideBar /> */}
        <Link to="/"><img src={imgLogo} alt="democrata-logo" /></Link>
        {/* <LabelHeader>{`Bem vindo, ${nome || ''}`}</LabelHeader> */}
      </LeftGroup>

      <Content>
        <Button variant='text' onClick={() => navigate('/financeiro')}>
          Financeiro
        </Button>

      </Content>
      {/* <RightGroup>
        <img src={notificacoesImg} alt="Notificações"></img>
        <img src={sairImg} onClick={signOut} alt="Sair"></img>
      </RightGroup> */}
    </Container>
  )
}