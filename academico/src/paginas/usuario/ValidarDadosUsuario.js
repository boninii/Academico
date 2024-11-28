import { useState } from "react";
import { ERROR_USUARIO, USUARIO as usuarioModel } from "../../types/Usuario";

const useValidarDadosUsuario = () => {
  const [usuario, setUsuario] = useState(usuarioModel);
  const [errors, setErrors] = useState(ERROR_USUARIO);

  const handleChangeUsuario = (e) => {
    const {name, value} = e.target;
    setUsuario((prev) => ({...prev, [name]:value}))
  }

  const isValid = (errors) => {
    let keys = Object.keys(errors);
    let count = keys.reduce((acc, curr) => errors[curr] ? acc + 1 : acc, 0)
    return count === 0;
  }

  const validateField = (name, value) => {
    const validationRules = {
      nomeUsuario: (val) => [
        (!val || val.trim() === "") && "Informe o nome do usuário.",
        (val && val.trim().length <= 5) && "O nome do usuário deve ter mais que 5 de caracteres.",
      ].filter(Boolean),

      email: (val) => [
        (!val || val.trim() === "") && "Informe o email.",
        (val && !/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi) && "E-mail inválido.",
      ].filter(Boolean),

      senha: (val) => [
        (val === null || val === undefined || val === "") && "Informe a senha.",
        (val && val.length < 8) && "A senha deve ter no mínimo 8 caracteres.",
      ].filter(Boolean),

      confirmSenha: (val) => [
        (val === null || val === undefined || val === "") && "Informe a senha.",
        (val && val.length < 8) && "A senha deve ter no mínimo 8 caracteres.",
        (val && usuario.senha && val !== usuario.senha) && "As senhas digitadas não coincidem.",
      ].filter(Boolean),

      tipo: (val) => [
        (!val || val === null || val === undefined) && "Informe o tipo do usuário.",
      ].filter(Boolean),

      codUsuario: (val) => [
        (!val || val.trim() === "") && "Informe o código do usuário.",
      ].filter(Boolean),

      idCidade: (val) => [
        (!val || val === null || val === undefined) && "Informe o código da cidade.",
      ].filter(Boolean),

      codProfessor: (val) => {
        if (String(usuario.tipo) === "1") {
          return [
            (!val || val === null || val === undefined) && "Informe o código do professor.",
          ].filter(Boolean);
        }

        return [];
      },

      nomeProfessor: (val) => {
        if (String(usuario.tipo) === "1") {
          return [
            (!val || val.trim() === "") && "Informe o nome do professor.",
            (val && val.trim().length <= 5) && "O nome do professor deve ter mais que 5 de caracteres.",
          ].filter(Boolean);
        }

        return [];
      },

      codAluno: (val) => {
        if (String(usuario.tipo) === "2") {
          return [
            (!val || val === null || val === undefined) && "Informe o código do aluno.",
          ].filter(Boolean);
        }

        return [];
      },

      nomeAluno: (val) => {
        if (String(usuario.tipo) === "2") {
          return [
            (!val || val.trim() === "") && "Informe o nome do aluno.",
            (val && val.trim().length <= 5) && "O nome do aluno deve ter mais que 5 de caracteres.",
          ].filter(Boolean);
        }

        return [];
      },

      idade: (val) => {
        if (String(usuario.tipo) === "2") {
          return [
            (!val || val === null || val === undefined) && "Informe a idade do aluno.",
            (val && (isNaN(val) || val <= 0)) && "A idade deve ser um número positivo e maior que zero.",
          ].filter(Boolean);
        }

        return [];
      },
    };

    return validationRules[name] ? validationRules[name](value) : []; 
  }

  const validateAll = () => {
    const newErrors = Object.keys(usuario).reduce((acc, field) => {
      const fieldErros = validateField(field, usuario[field]);

      if (fieldErros.length > 0) {
        acc[field] = validateField(field, usuario[field]);
      }
      
      return acc;
    }, {});
    setErrors(newErrors);

    return newErrors;
  }

  const isFormValid = () => {
    const currentErrors = validateAll();

    return isValid(currentErrors);
  }

  const validBlurInput = (name, value) => {
    const erros = {...errors} ;
    erros[name] = validateField(name, value);
  }

  return { usuario, errors, setErrors, handleChangeUsuario, isValid, validateAll, isFormValid };
}

export default useValidarDadosUsuario;