import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  { RefObject } from 'react'
import { useRef } from 'react';
import { faTableCells, faBars } from '@fortawesome/free-solid-svg-icons';
import { MenuItem } from './MenuItem';
import { getWindowSize } from '../../../utils/getWindowSize';
interface Props{
  refSidebar: RefObject<HTMLDivElement>
  refWrapper: RefObject<HTMLElement>
}
export const Sidebar = ({refSidebar,refWrapper}:Props) => {
  const refIconMenu = useRef<HTMLButtonElement>(null)

  // Responsive Layout

  const handleSidebar = () => {
    if(!refSidebar.current || !refIconMenu.current) return
    // in this way i can stay mediaquery and button functionality
    if(refSidebar.current.clientWidth ===0){

      // I Remove default classes to  ignore mediaquery and add new
      refSidebar.current.classList.remove('w-[0]','sm:w-[260px]]')
      refSidebar.current.classList.add('w-[260px]')
      refIconMenu.current.classList.remove('rounded-md','left-[20px]','sm:rounded-full','sm:left-[235px]')
      refIconMenu.current.classList.add('rounded-full','left-[235px]')
      
      if( refIconMenu.current.classList.contains('sm:pl-[270px]')) return;
      refWrapper.current?.classList.remove('pl-0','sm:pl-2')
      refWrapper.current?.classList.add('pl-2','sm:pl-[270px]')


    }else{
      // I Remove default classes to ignore mediaquery and add new
      refSidebar.current.classList.remove('w-[0]','sm:w-[260px]','w-[260px]')
      refSidebar.current.classList.add('w-[0]')
      refIconMenu.current.classList.remove('rounded-md','left-[20px]','sm:rounded-full','sm:left-[235px]','rounded-full','left-[235px]')
      refIconMenu.current.classList.add('left-[20px]','rounded-md')
      if( refIconMenu.current.classList.contains('sm:pl-[270px]')) return;
      refWrapper.current?.classList.remove('pl-[270px]','sm:pl-[270px]')
      
    }
      
  
    
    }
  return (
    <div ref={refSidebar} className='sm:w-[260px] w-[0] transition-all duration-500   z-10 overflow-hidden bg-slate-custom h-screen fixed'>
          {/* brand and company name */}
          <div className='w-full h-16  flex items-center  justify-center mb-2 relative'>
        
            <div className='text-center mx-auto my-auto uppercase '>
              <img  className='w-28' src="https://naturaldemontana.com/wp-content/uploads/2020/06/simple-home-logo.png" alt="" />
            </div>
            <button ref={refIconMenu} onClick={handleSidebar} className='fixed  z-20 left-[20px] rounded-md sm:rounded-full sm:left-[235px] transition-all duration-500 bg-slate-200  h-12 w-12 grid place-content-center cursor-pointer ' >
              <FontAwesomeIcon size='2x' icon={faBars} />
            </button>
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
