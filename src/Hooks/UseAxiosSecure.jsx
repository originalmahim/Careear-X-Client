import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContex } from './../Provider/AuthProvider';
import Swal from 'sweetalert2';

const axiosSecure = axios.create({
    baseURL: `https://career-canvas-backend.vercel.app`,
    withCredentials: true
});

const useAxiosSecure = () => {
    const { LogOut } = useContext(AuthContex)
    const navigate = useNavigate();
    useEffect(() => {
        axiosSecure.interceptors.response.use(res => {
            return res;
        }, error => {
            console.log('error tracked in the interceptor', error.response)
            if (error.response.status === 401 || error.response.status === 403) {
                console.log('LogOut the user',error)
                LogOut()
                    .then(() => { 
                        Swal.fire({
                            icon: 'warning',
                            title: 'Session Expired , Login Again',
                            showConfirmButton: false,
                            timer: 2000, 
                          });
                        navigate('/login')
                    })
                    .catch(error => console.log(error))
            }
        })
    }, [LogOut,navigate])

    return axiosSecure;
};

export default useAxiosSecure;