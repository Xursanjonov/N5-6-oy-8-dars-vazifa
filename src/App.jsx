import React, { Fragment, memo } from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './layout/Layout'
import Products from './pages/products/Products'
import Users from './pages/users/Users'
import Create from './pages/create/Create'
import NotFound from './pages/not-found'

const App = () => {

  return (
    <Fragment>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<Products />} />
          <Route path='users' element={<Users />} />
          <Route path='create' element={<Create />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Fragment>
  )
}

export default memo(App)