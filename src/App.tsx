
import {  faBars, faSortDown, faTableCells } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react'
import { useTranslation } from 'react-i18next';
import './assets/scss/styles.scss'
import { MenuItem } from './modules/components/navbar/MenuItem';

function App() {
  const [count, setCount] = useState(0)
 const { t,i18n } = useTranslation();
//  https://coderthemes.com/hyper/saas/index.html
  return (

    <div className='w-[260px] bg-slate-custom h-screen'>
        {/* brand and comapny name */}
        <div className='w-full h-14  flex items-center  justify-center mb-2 relative'>
       
          <div className='text-center mx-auto my-auto uppercase '>
            <img  className='w-28' src="https://naturaldemontana.com/wp-content/uploads/2020/06/simple-home-logo.png" alt="" />
          </div>
          <div className='absolute -right-6 bg-slate-200 rounded-full h-12 w-12 grid place-content-center cursor-pointer ' >
            <FontAwesomeIcon size='2x' icon={faBars} />
          </div>
        </div>
        {/* Menu section */}
    
          <ul className='w-full  grid grid-cols-1  '>
            <li className='nav-item__title'>Navigation</li>
            <MenuItem icon={faTableCells} navigationName="Dashboard" haveChildren />
            <MenuItem icon={faTableCells} navigationName="Tasks" haveChildren />
            <MenuItem icon={faTableCells} navigationName="Dashboard"  />
            <li className='nav-item__title'>Navigation</li>
            <MenuItem icon={faTableCells} navigationName="Dashboard" haveChildren />
  
           
       
          
           
          
           

          </ul>
        
     </div>
 

  
  )
  }


{/* <select defaultValue={i18n.language} onChange={(e) => i18n.changeLanguage(e.target.value)}>
    {['es','en'].map((language) => (
      <option key={language}>{language}</option>
    ))}
  </select> */}
export default App
