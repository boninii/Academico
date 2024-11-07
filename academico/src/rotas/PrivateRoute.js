import React from 'react'
import Layout from '../componentes/layout/Layout'
import { Outlet } from 'react-router-dom'

const PrivateRoute = () => {
  return (
    <>
        <Layout>
            <Outlet/>
        </Layout>
    </>
  )
}

export default PrivateRoute
