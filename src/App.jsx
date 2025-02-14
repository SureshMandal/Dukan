import React from 'react'

import Navbar from './components/Navbar'
import { Routes,Route } from 'react-router-dom'
import { Suspense } from 'react'

// lazy loading of the components
const Home=React.lazy(()=>import('./pages/Home'))
const PageNotFound=React.lazy(()=>import('./pages/PageNotFound'))
const Product=React.lazy(()=>import('./pages/Product'))

const App = () => {
  return (
    <>
    <Navbar/>
    {/* Implementing the Routing Structure */}
    <Suspense fallback={<h1>Loading...</h1>}>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/product' element={<Product/>} />
      {/* Error Handling */}
      <Route path='*' element={<PageNotFound/>} />

    </Routes>
    </Suspense>
    </>
  )
}

export default App
