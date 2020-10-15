import React from 'react'
import  PropTypes  from 'prop-types';
import {  Route, Redirect } from 'react-router-dom';
export const PrivateRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => {
    // localStorage.setItem('lastPath', rest.location.pathname);
    //condiciona un componente si esta autenticado se muestra el componente de manera normal , caso contrario se redirecciona al login
    return (
        <Route {...rest}
            component={ (props) =>(
                (isAuthenticated)
                    ? (<Component{...props } />)
                    : (<Redirect to="/login" />)
            )

            }
        /> 
    )
}
// al pasarle p
PrivateRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
 }