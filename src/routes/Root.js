import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './Home'
import { Index as CarIndex } from './cars/Index'
import { Show as CarShow } from './cars/Show'
import { Layout } from './Layout'
import { NotFound } from './NotFound'

export const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home/>}/>
          <Route path='/cars' element={<CarIndex />} />
          <Route path='/cars/:id' element={<CarShow />} />
          <Route path='/*' element={<NotFound/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
