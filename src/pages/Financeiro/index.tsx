import React, { ChangeEvent, InputHTMLAttributes, useEffect, useRef, useState } from 'react'
import { Button, Card, CardActions, CardContent, CardHeader, Input, TextField, Typography } from "@mui/material";
import { Content } from "./styles";
import { Container, Text } from '../../utils/styles';
import { Header } from '../../components/Header';
import { Form } from '@unform/web';
import { colors } from '../../utils/colors';
import SendIcon from '@mui/icons-material/Send';
import axios from 'axios';
import { FormHandles } from '@unform/core';



function Financeiro() {

  const formRef = useRef<FormHandles>(null);
  const codEmp = 'J0522416350001840000003978';
  const chave = 'D52435A1F79KO8C6';
  const [codSacado, setCodSacado] = useState('032405424000122');

  const Itaucripto = require('itaucripto');
  const cripto = new Itaucripto();

  const dadosCripto = cripto.geraCripto(codEmp, codSacado, chave);

  // const [codSacado, setCodSacado] = useState('');

  // const cripto = server.createObject("Itaucripto.cripto");
  // const parser = new DOMParser();
  // const xmlDoc = parser.parseFromString(cripto, "text/xml");


  //.createObject('Itaucripto.cripto');

  function carregabrw() {
    window.open('', 'BLOQUETO',
      'toolbar=yes,menubar=yes,resizable=yes,status=no,scrollbars=yes,left=0,top=0,width=600,height=430');
  }


  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    const cripto = new Itaucripto();
    const dadosCripto = cripto.geraCripto(codEmp, codSacado, chave);


    const response = await axios.post(
      'https://ww2.itau.com.br/2viabloq/pesquisa.asp',
      dadosCripto
    )
    if (response.status === 200 || response.status === 201)
      console.log(response.status)
    console.log(response.data)
  }

  function handleChangeSacado(e: ChangeEvent<HTMLInputElement>) {
    setCodSacado(e.target.value)
  }



  return (
    <Container>
      <Header />
      <Content>
        <form method="post" name='form' action="https://ww2.itau.com.br/2viabloq/pesquisa.asp" target="BLOQUETO">
          <input type="hidden" name="DC" value={dadosCripto} />
          <input type="submit" name="Bloqueto" value="Segunda Via Bloqueto" />
        </form>
        {/* <Form ref={formRef} onSubmit={onSubmit}>
          <h1> Faça seu Login</h1>
          <Input name="codEmp" type='hidden' value={codEmp} />
          <Input name="Chave" type='hidden' value={chave} />
          <Input name="codSacado" placeholder="Codigo do sacado" value={codSacado} onChange={handleChangeSacado} />
        </Form> */}

      </Content>

    </Container>
  )
}
export default Financeiro;