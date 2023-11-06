import {  useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import { AuthContex } from "../../Provider/AuthProvider";

const Protected = ({children}) => {

          const {user,loader} = useContext(AuthContex)
          const location = useLocation()

          if (loader) {
          return <h1 className="flex items-center justify-center"><img src="https://wp.alithemes.com/html/jobhub/frontend/assets/imgs/theme/loading.gif" /></h1>
          }
           
          if (user) {
            return children        
          }

          return <Navigate state={location.pathname} to = "/login" ></Navigate>
};

Protected.propTypes = {
          children: PropTypes.node
}

export default Protected;