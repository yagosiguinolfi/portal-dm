import React from 'react';
import { useTransition } from 'react-spring';
import Toast from './Toast';

import { Container } from './styles';
import { ToastMessage } from '../../hooks/toast';
import styled from 'styled-components';

interface ToastContainerProps {
  messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
  const messagesWithTransitions = useTransition(
    messages,
    {
      keys: message => message.id,
      from: { right: '10%', opacity: 0 },
      enter: { right: '0%', opacity: 1 },
      leave: { left: '-1200%', opacity: 0 },
    }
  );

  return (
    <Container>
      {messagesWithTransitions((style, item, t, i) => (
        <Toast
          key={i}
          message={item}
          style={style}
        />
      ))}
    </Container>
  )
};

export default ToastContainer;