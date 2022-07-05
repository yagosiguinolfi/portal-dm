import styled, { keyframes } from 'styled-components';
// import background from '../../assets/background.png';
// import { shade } from 'polished';

export const Container = styled.div`
    box-sizing: 0;
    height: 100vh;
    display: flex;
    align-items: stretch;
    background-size: cover;
`;

export const Content = styled.div`
   display: flex;
   flex-direction: column;
   place-content: center;
   align-items: center;
   width: 100%;
   overflow: hidden;
   //max-width: 1024px;

`

const appearFromLeft = keyframes`
   from {
       opacity: 0;
       transform: translateX(-50px);
   }
   to {
       opacity: 1;
       transform: translateX(0);
   }
`

export const AnimationContainer = styled.div`

   animation: ${appearFromLeft} 1s;

   img {
       width: 340px;
   }

   form {
       margin: 80px 0;
       text-align: center;
       display: flex;
       flex-direction: column;
       align-items: center;

       h1 {
           margin-bottom: 24px;
           font-size: 20px;
           color: #f4ede8;
       }

       a {
           color: #f4ede8;
           display: block;
           margin-top: 24px;
           text-decoration: none;

          
       }
   }
   
`
