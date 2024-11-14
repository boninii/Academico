import { useState } from "react";
import { ERROR_USUARIO, USUARIO } from "../../types/Usuario";

const useValidarDadosUsuario = () => {
  const [usuario, setUsuario] = useState(USUARIO);
  const [errors, setErrors] = useState(ERROR_USUARIO);

  const handleChangeUsuario = (e) => {
    const {name, value} = e.target;
    setUsuario((prev) => ({...prev, [name]:value}))
  }

  const isValid = (errors) => {

  }

  const validateField = (name, value) => {

  }

  const validateAll = () => {

  }

  const isFormValid = () => {

  }

  return { usuario, errors, setErrors, handleChangeUsuario, isValid, validateAll, isFormValid };
}

export default useValidarDadosUsuario;