import { useContext, useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import { AuthContex } from "../../Provider/AuthProvider";
import Swal from 'sweetalert2';

const Protected = ({ children }) => {
  const { user, loader } = useContext(AuthContex);
  const location = useLocation();

  useEffect(() => {
    if (!user && !loader) {
      Swal.fire({
        icon: 'warning',
        title: 'You need to login to see this page',
        showConfirmButton: false,
        timer: 2000, 
      });
    }
  }, [user, loader]);

  if (loader) {
    return <h1 className="flex my-40 items-center justify-center"><img className="w-80" src="https://wp.alithemes.com/html/jobhub/frontend/assets/imgs/theme/loading.gif" alt="Loading" /></h1>;
  }

  if (user) {
    return children;
  }

  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

Protected.propTypes = {
  children: PropTypes.node
};

export default Protected;
