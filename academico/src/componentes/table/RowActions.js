import React from 'react'
import { Link } from 'react-router-dom'
import LinkButton from '../form/LinkButton'
import { BUTTON_SIZE, DANGER, INFO, SECONDARY } from '../../config/Config'
import * as FaIcons from 'react-icons/fa'

const RowActions = ({path, id}) => {
  return (
    <>
      <Link>
        <td style={{textAlign: "center"}}>
          <LinkButton
            to={`/${path}/alterar/${id}`}
            type='button'
            title={`Alteração de dados | ${path}`}
            variant={INFO}
            cssClass='btn-sm'
            icon={<FaIcons.FaPencilAlt size={BUTTON_SIZE} />}
          />
          <LinkButton
            to={`/${path}/excluir/${id}`}
            type='button'
            title={`Exclusão de dados | ${path}`}
            variant={DANGER}
            cssClass='btn-sm'
            icon={<FaIcons.FaTrashAlt size={BUTTON_SIZE} />}
          />
          <LinkButton
            to={`/${path}/consultar/${id}`}
            type='button'
            title={`Consulta de dados | ${path}`}
            variant={SECONDARY}
            cssClass='btn-sm'
            icon={<FaIcons.FaSearchPlus size={BUTTON_SIZE} />}
          />
        </td>
      </Link>
    </>
  )
}

export default RowActions
