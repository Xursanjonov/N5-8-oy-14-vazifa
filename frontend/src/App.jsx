import React, { Fragment, memo } from 'react'
import { Routes, Route } from 'react-router-dom'
import MainLayout from './layout'
import Home from './pages/home'
import Category from './pages/category'

const App = () => {

  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<MainLayout />} >
          <Route index element={<Home />} />
          <Route path="category" element={<Category />} />
        </Route>
      </Routes>
    </Fragment>
  )
}

export default memo(App)