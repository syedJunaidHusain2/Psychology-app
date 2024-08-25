import React from 'react'
import Footer from './footer'
import BottomSec from './bottomSec'
import Copyright from './copyright'
import QuestionSec from './questionSec'
import PricingSec from './pricingSec'

const HomeSection = () => {
  return (
    <div>
        <PricingSec/>
        <QuestionSec/>
        <BottomSec />
        <Footer />
        <Copyright/>
    </div>
  )
}

export default HomeSection