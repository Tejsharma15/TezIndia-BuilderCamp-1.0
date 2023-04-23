import React, { useState } from 'react'
import Sidebar from './Sidebar'
import Preview from './Preview'
import HelpCenter from './HelpCenter'
import Searchbar from './Searchbar'
import BodyHeading from './BodyHeading'
import Head from 'next/head'

const ThreeColumnLayout = ({children, headerText}) =>{

  return(
  
  <>
  <Head>
        <title>Queue</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
    </Head>

  <div className="flex w-full h-screen">
    <div className="md:h-screen overflow-hidden  md:basis-1/5 px-1">
      {/* Left Column */}
      <Sidebar/>
    </div>
    <div className="bg-[#F5F5F5] flex-1 md:overflow-x-auto">
      {/* Middle Column */}
      <div className="order-2 flex-1">
          <Searchbar/>
          <BodyHeading 
          text={headerText} 
        />
      {children}
      </div>
    </div>
    <div className="bg-gray-400 w-64 md:h-screen overflow-y-auto basis-1/5">
      {/* Right Column */}
      <Preview/>
    </div>

    <div className="absolute bottom-0 left-0 ml-1 mb-2">
        <HelpCenter/>
      </div> 
  </div>
  </>
)
}
export default ThreeColumnLayout