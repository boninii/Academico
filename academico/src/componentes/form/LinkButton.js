import React from 'react'
import { Link } from 'react-router-dom'

const LinkButton = ({to, type, title, label, icon, variant, cssClass}) => {
  return (
    <>
      <Link
        to={to}
        type={type}
        title={title}
        className={`btn btn-${variant} ${cssClass}`}
      >
        {
          icon && (
            <i>{icon}</i>
          )
        }
        {' '}
        {label}
      </Link>
    </>
  )
}

export default LinkButton
