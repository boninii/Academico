import React from 'react'
import Navigation from '../../componentes/mensagem/Navigation'
import * as FaIcons from 'react-icons/fa'
import * as MdIcons from 'react-icons/md'
import { BUTTON_SIZE, DEFAULT_IMAGEM  } from '../../config/Config'
import './usuario.css'
import useValidarDadosUsuario from './ValidarDadosUsuario'
import { Link } from 'react-router-dom'
import MensagemErro from '../../componentes/mensagem/MensagemErro'

const Incluir = () => {

  const { usuario, errors, setErrors, handleChangeUsuario, isValid, validateAll, isFormValid } = useValidarDadosUsuario();

  const onSubmitDadosUsuario = (e) => {
    e.preventDefault();
    
    let erros = validateAll();

    if (isValid(erros)) {
      handleSubmitDadosUsuario();
    }
    else {
      setErrors(erros);
    }
  }

  const handleSubmitDadosUsuario = (e) => {
    // grava no banco de dados
  }

  return (
    <>
        <Navigation
            titulo="Usuário"
            iconTitulo={<FaIcons.FaUserAlt size={BUTTON_SIZE}/>}
            descricao="Manutenção do Cadastro de Usuários"
            iconReturn={<MdIcons.MdList size={BUTTON_SIZE}/>}
            caminho="Usuário"
            url="/usuario/listar"
            tituloUrl="Listagem de Usuários"
        />
        <div className='app-windows'>
          <div className='form-profile'>
            <div className='foto'>
              <label className='app-label'>Foto</label>
              <div className='card'>
                <div className='card-body'>
                  <div className='d-flex flex-column align-items-center text-center'>
                    <input type="hidden" id="foto" name="foto"/>
                    <input type="hidden" id="contenType" name="contenType"/>
                    <img src={DEFAULT_IMAGEM} className='avatar' alt="foto do usuario"/>
                  </div>
                  <div className='fileInput'>
                    <input type="file" />
                    <button id="upload" className='btn btn-success btn-lg upload' title="Upload de foto">
                      <i><FaIcons.FaUpload  size={BUTTON_SIZE} /></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className='form'>
              <form onSubmit={onSubmitDadosUsuario}>
                <div className='cadastro'>
                  <div className='form-cadastro-usuario'>
                    <div className='form-group'>
                      <label htmlFor='codUsuario' className='control-label app-label'>Código do usuário:</label>
                      <div className='input-group'>
                        <input 
                          type="text" 
                          id="codUsuario" 
                          name="codUsuario" 
                          value={usuario.codUsuario} 
                          onChange={handleChangeUsuario}
                          className={
                            errors.codUsuario ? 'form-control is-invalid app-label' : 'form-control app-label'
                          }
                        />
                        {
                          errors.codUsuario ? (
                            <MensagemErro 
                              errors={errors.codUsuario}
                              mensagens={errors.codUsuario}
                            />
                          )
                          : ''
                        }
                      </div>
                    </div>
                    <div className='form-group'>
                      <label htmlFor='nomeUsuario' className='control-label app-label'>Nome do usuário:</label>
                      <div className='input-group'>
                        <input 
                          type="text" 
                          id="nomeUsuario" 
                          name="nomeUsuario" 
                          value={usuario.nomeUsuario} 
                          onChange={handleChangeUsuario}
                          className={
                            errors.nomeUsuario ? 'form-control is-invalid app-label' : 'form-control app-label'
                          }
                        />
                        {
                          errors.nomeUsuario ? (
                            <MensagemErro 
                              errors={errors.codUsuario}
                              mensagens={errors.codUsuario}
                            />
                          )
                          : ''
                        }
                      </div>
                    </div>
                    <div className='form-group'>
                      <label htmlFor='email' className='control-label app-label'>Email:</label>
                      <div className='input-group'>
                        <input 
                          type="text" 
                          id="email" 
                          name="email" 
                          value={usuario.email} 
                          onChange={handleChangeUsuario}
                          className={
                            errors.email ? 'form-control is-invalid app-label' : 'form-control app-label'
                          }
                        />
                        {
                          errors.email ? (
                            <MensagemErro 
                              errors={errors.email}
                              mensagens={errors.email}
                            />
                          )
                          : ''
                        }
                      </div>
                    </div>
                    <div className='form-group'>
                      <label htmlFor='senha' className='control-label app-label'>Senha:</label>
                      <div className='input-group'>
                        <input 
                          type="password" 
                          id="senha" 
                          name="senha" 
                          value={usuario.senha} 
                          onChange={handleChangeUsuario}
                          className={
                            errors.senha ? 'form-control is-invalid app-label' : 'form-control app-label'
                          }
                        />
                        {
                          errors.senha ? (
                            <MensagemErro 
                              errors={errors.senha}
                              mensagens={errors.senha}
                            />
                          )
                          : ''
                        }
                      </div>
                    </div>
                    <div className='form-group'>
                      <label htmlFor='cofirmSenha' className='control-label app-label'>Confirme a senha:</label>
                      <div className='input-group'>
                        <input 
                          type="password" 
                          id="cofirmSenha" 
                          name="cofirmSenha" 
                          value={usuario.cofirmSenha} 
                          onChange={handleChangeUsuario}
                          className={
                            errors.cofirmSenha ? 'form-control is-invalid app-label' : 'form-control app-label'
                          }
                        />
                        {
                          errors.cofirmSenha ? (
                            <MensagemErro 
                              errors={errors.cofirmSenha}
                              mensagens={errors.cofirmSenha}
                            />
                          )
                          : ''
                        }
                      </div>
                    </div>
                    <div className='form-group'>
                      <label htmlFor='tipo' className='control-label app-label'>Tipo do Usuario:</label>
                      <div className='input-group'>
                        <select 
                          id="´tipo" 
                          name="tipo" 
                          value={usuario.tipo} 
                          onChange={handleChangeUsuario}
                          className={
                            errors.tipo ? 'form-control is-invalid app-label' : 'form-control app-label'
                          }
                        >
                          <option disabled>Escolha uma opção</option>
                          <option value='1'>Professor</option>
                          <option value='2'>Aluno</option>
                        </select>
                        {
                          errors.tipo ? (
                            <MensagemErro 
                              errors={errors.tipo}
                              mensagens={errors.tipo}
                            />
                          )
                          : ''
                        }
                      </div>
                    </div>
                    <div className='form-group'>
                      <label htmlFor='idCidade' className='control-label app-label'>Código da Cidade:</label>
                      <div className='input-group'>
                        <select 
                          id="idCidade" 
                          name="idCidade" 
                          value={usuario.idCidade} 
                          onChange={handleChangeUsuario}
                          className={
                            errors.idCidade ? 'form-control is-invalid app-label' : 'form-control app-label'
                          }
                        >
                          <option disabled>Escolha a cidade</option>
                          <option>Birigui</option>
                          <option>Araçatuba</option>
                        </select>
                        {
                          errors.idCidade ? (
                            <MensagemErro 
                              errors={errors.idCidade}
                              mensagens={errors.idCidade}
                            />
                          )
                          : ''
                        }
                      </div>
                    </div>
                    <div></div>
                    {
                      usuario.tipo === '2' && (
                        <>
                          <div className='form-group'>
                            <label htmlFor='codAluno' className='control-label app-label'>Código do Aluno:</label>
                            <div className='input-group'>
                              <input 
                                type="text" 
                                id="codAluno" 
                                name="codAluno" 
                                value={usuario.codAluno} 
                                onChange={handleChangeUsuario}
                                className={
                                  errors.codAluno ? 'form-control is-invalid app-label' : 'form-control app-label'
                                }
                              />
                              {
                                errors.codAluno ? (
                                  <MensagemErro 
                                    errors={errors.codAluno}
                                    mensagens={errors.codAluno}
                                  />
                                )
                                : ''
                              }
                            </div>
                          </div>
                          <div className='form-group'>
                            <label htmlFor='idade' className='control-label app-label'>Idade do Aluno:</label>
                            <div className='input-group'>
                              <input 
                                type="text" 
                                id="idade" 
                                name="idade" 
                                value={usuario.idade} 
                                onChange={handleChangeUsuario}
                                className={
                                  errors.idade ? 'form-control is-invalid app-label' : 'form-control app-label'
                                }
                              />
                              {
                                errors.idade ? (
                                  <MensagemErro 
                                    errors={errors.idade}
                                    mensagens={errors.idade}
                                  />
                                )
                                : ''
                              }
                            </div>
                          </div>
                          <div className='form-group'>
                            <label htmlFor='nomeAluno' className='control-label app-label'>Nome do Aluno:</label>
                            <div className='input-group'>
                              <input 
                                type="text" 
                                id="nomeAluno" 
                                name="nomeAluno" 
                                value={usuario.nomeAluno} 
                                onChange={handleChangeUsuario}
                                className={
                                  errors.nomeAluno ? 'form-control is-invalid app-label' : 'form-control app-label'
                                }
                              />
                              {
                                errors.nomeAluno ? (
                                  <MensagemErro 
                                    errors={errors.nomeAluno}
                                    mensagens={errors.nomeAluno}
                                  />
                                )
                                : ''
                              }
                            </div>
                          </div>
                        </>
                      )
                    }
                    {
                      usuario.tipo === "1" && (
                        <>
                          <div className='form-group'>
                            <label htmlFor='codProfessor' className='control-label app-label'>Código do Professor:</label>
                            <div className='input-group'>
                              <input 
                                type="text" 
                                id="codProfessor" 
                                name="codProfessor" 
                                value={usuario.codProfessor} 
                                onChange={handleChangeUsuario}
                                className={
                                  errors.codProfessor ? 'form-control is-invalid app-label' : 'form-control app-label'
                                }
                              />
                              {
                                errors.codProfessor ? (
                                  <MensagemErro 
                                    errors={errors.codProfessor}
                                    mensagens={errors.codProfessor}
                                  />
                                )
                                : ''
                              }
                            </div>
                          </div>
                          <div className='form-group'>
                            <label htmlFor='nomeProfessor' className='control-label app-label'>Nome do Professor:</label>
                            <div className='input-group'>
                              <input 
                                type="text" 
                                id="nomeProfessor" 
                                name="nomeProfessor" 
                                value={usuario.nomeProfessor} 
                                onChange={handleChangeUsuario}
                                className={
                                  errors.nomeProfessor ? 'form-control is-invalid app-label' : 'form-control app-label'
                                }
                              />
                              {
                                errors.nomeProfessor ? (
                                  <MensagemErro 
                                    errors={errors.nomeProfessor}
                                    mensagens={errors.nomeProfessor}
                                  />
                                )
                                : ''
                              }
                            </div>
                          </div>
                        </>
                      )
                    }
                    <button
                      type="submit"
                      title="Incluir dados do usuário"
                      className='btn btn-success bt-lg app-button app-label mt-2'
                    >
                      <FaIcons.FaSave size={BUTTON_SIZE}/>
                      Salvar cadastro
                    </button>
                    <Link 
                      to='/usuario/listar'
                      type="button"
                      title="Cancelar inclusão do usuário"
                      className='btn btn-warning btn-lg app-button app-label mt-2'
                    >
                      <MdIcons.MdCancel size={BUTTON_SIZE} />
                      Cancelar cadastro
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
    </>
  )
}

export default Incluir
