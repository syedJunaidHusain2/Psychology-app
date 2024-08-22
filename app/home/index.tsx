import React from 'react'
import Footer from './footer'
import BottomSec from './bottomSec'
import Copyright from './copyright'
import QuestionSec from './questionSec'

const HomeSection = () => {
  return (
    <div>
        <QuestionSec/>
        <BottomSec />
        <Footer />
        <Copyright/>
    </div>
  )
}

export default HomeSection