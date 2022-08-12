import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTableCells, IconDefinition, faSortDown } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';
import { useRef, useState } from 'react';
interface Props{
    navigationName:string;
    navigationUrl?:string;
    icon:IconDefinition;
    haveChildren?:boolean;
    
}
export const MenuItem = (props:Props) => {
    const {haveChildren,navigationName} = props;
    const [dropDown,setDropwDown] = useState<Boolean>(false)
    const refContainerDropDown = useRef<HTMLDivElement>(null)
    const refDropDown = useRef<HTMLUListElement>(null)
    const handleDropDown = () => {
        if(refDropDown.current &&refContainerDropDown.current){
            setDropwDown(!dropDown)
            if (refContainerDropDown.current.clientHeight) {
                refContainerDropDown.current.style.height = '0px';
              } else {
                refContainerDropDown.current.style.height = refDropDown.current.clientHeight + "px";
              }
        }
    }
    return (
        <li className='h-full w-full text-gray-400 py-3  hover:text-slate-50 hover:cursor-pointer transition-colors '>
            <a href="#" onClick={haveChildren ? handleDropDown : () =>{}} className='flex justify-start relative pl-8 items-center ' >
                <FontAwesomeIcon icon={faTableCells} />
                <span  className='pl-5 pr-16'>{navigationName}</span>   
                 {haveChildren && <FontAwesomeIcon className={classNames('transition-transform inset-y-0 right-9  absolute ',{'-rotate-90':!dropDown})} icon={faSortDown} />}
            </a>
            {haveChildren &&    
            <div ref={refContainerDropDown} className='overflow-hidden transition-all h-0 ease-in-out duration-300'>
                <ul ref={refDropDown} className={'w-full pt-2  grid grid-cols-1 '}>
                    <li className='h-full w-full text-gray-400 py-3  hover:text-slate-50 hover:cursor-pointer transition-colors '>
                        <a href=""  className='flex justify-start  pl-8 items-center ' >
                        
                            <span  className='pl-9 pr-16 text-sm'>Products</span>   
                        
                        </a>
                    </li>
                    <li className='h-full w-full text-gray-400 py-3  hover:text-slate-50 hover:cursor-pointer transition-colors '>
                        <a href=""  className='flex justify-start  pl-8 items-center ' >
                        
                            <span  className='pl-9 pr-16 text-sm'>Products</span>   
                        
                        </a>
                    </li>
                </ul>
            </div>
            }
        </li>
    )
}
