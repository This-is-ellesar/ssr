import React, {useState} from 'react'
// style
import './index.css'
// @ts-ignore
import Banner from '../../public/about-banner.png'
import {TheHeader} from "./components/TheHeader";
import {TheFooter} from "./components/TheFooter";

export const App = () => {
  const [value, setValue] = useState<number>(0)

  return (
    <>
      <TheHeader />


      <main>
        <h1>Value: ${value}</h1>

        <button onClick={() => setValue(value + 1)}>Increase</button>
      </main>


      <TheFooter />
    </>
  )
}
