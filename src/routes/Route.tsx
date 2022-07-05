import React from 'react';
import { RouteProps as ReactDOMRouteProps, Route as ReactDOMRoute, Navigate } from 'react-router-dom';

//import { useAuth } from '../hooks/auth';

interface RouteProps extends ReactDOMRouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({ isPrivate = false, component: Component, ...rest }) => {
  const user = localStorage.getItem('@Democrata:user')
  // console.log(isPrivate)

  if (isPrivate === !!user) {
    return <Component />
  } else {
    return <ReactDOMRoute path="*"
      element={<Navigate to="/" replace />}
    />
  }
}


export default Route;