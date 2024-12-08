import React from 'react'
import { Route, Routes} from 'react-router-dom'
import Frontend from './Frontend'

import Footer from 'Components/Footer'
export default function Index() {
 
  return (
    <>
   
      <Routes>
        <Route path='/*' element={<Frontend />} />
      </Routes>
      <Footer />
    </>
  )
}
