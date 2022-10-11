
import {  faBars, faSortDown, faTableCells } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DetailedHTMLProps, HTMLAttributes, LegacyRef, MouseEventHandler, MutableRefObject, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next';
import './assets/scss/styles.scss'
import { MenuItem } from './modules/layout/navbar-sidebar/MenuItem';
import { Navbar } from './modules/layout/navbar-sidebar/Navbar';
import { Sidebar } from './modules/layout/navbar-sidebar/Sidebar';

function App() {
  const [count, setCount] = useState(0)
  const { t,i18n } = useTranslation();
//  https://coderthemes.com/hyper/saas/index.html
  const refSidebar = useRef<HTMLDivElement>(null)
  const refWrapper = useRef<HTMLElement>(null)
  
  return (
    <div className='bg-gray-200 relative  w-screen h-screen'>
      <Sidebar  
        refSidebar={refSidebar}
        refWrapper={refWrapper}
        />
      <Navbar 
        />
      <main ref={refWrapper} className="w-full h-full pt-16  pl-2 pr-2 sm:pl-[270px] transition-all duration-500" >
        testing
      </main>
    </div>
 

  
  )
  }


{/* <select defaultValue={i18n.language} onChange={(e) => i18n.changeLanguage(e.target.value)}>
    {['es','en'].map((language) => (
      <option key={language}>{language}</option>
    ))}
  </select> */}
export default App
