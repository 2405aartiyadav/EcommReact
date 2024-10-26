import React from 'react'
import Page1 from './Header';
import Featured from './Featured';
import Page4 from './Page4';
import FAQ from './Faq';
import Header from './Header';

function MainLandingPage() {
  return (
    <div className=''>
      <Header/>
      <Featured/>
      <Page4/>
      <FAQ/>

    </div>
  )
}

export default MainLandingPage