import React, { useRef, useCallback } from 'react';
import { FiUser, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';

// import getValidationErrors from '../../utils/getValidationErros';

import { Container, Content, AnimationContainer } from './styles';
import { Button, Input } from '@mui/material';
import logo from '../../assets/logo.png';
// import Input from '../../components/Input';
// import Button from '../../components/Button';

interface SignInFormData {
  usuario: string,
  senha: string,
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const navigate = useNavigate();


  const { signIn } = useAuth();
  const { addToast } = useToast();

  const handleSubmit = useCallback(async (data: SignInFormData) => {
    try {

      formRef.current?.setErrors({});
      const schema = Yup.object().shape({
        usuario: Yup.string().required('Usuário obrigatório'),
        senha: Yup.string().required('Senha obrigatória'),
      });

      await schema.validate(data, {
        abortEarly: false,
      })

      await signIn({
        usuario: data.usuario,
        senha: data.senha
      });

      navigate('/dashboard');

    } catch (err) {

      if (err instanceof Yup.ValidationError) {
        // const errors = getValidationErrors(err);

        // formRef.current?.setErrors(errors);

        return;
      }

      addToast({
        type: 'error',
        title: 'Erro na autenticação',
        description: 'Ocorreu um erro ao fazer login, verifique usuário e senha!'
      });
    }
  }, [signIn, addToast]);

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <img src={logo} alt='Democrata' />
          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1> Faça seu Login</h1>

            <Input name="usuario" placeholder="Usuário" />
            <Input name="senha" type="password" placeholder="Senha" />
            <Button type="submit">Entrar</Button>
            <Link to="/RecoveryPassword">Esqueci minha senha</Link>
          </Form>
        </AnimationContainer>
      </Content>
    </Container>
  )
};

export default SignIn