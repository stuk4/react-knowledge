
import { faTableCells } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react'
import { useTranslation } from 'react-i18next';
import './assets/scss/styles.scss'

function App() {
  const [count, setCount] = useState(0)
 const { t,i18n } = useTranslation();
//  https://coderthemes.com/hyper/saas/index.html
  return (
    <div className='flex'>
    <div className='w-[260px] bg-slate-custom h-screen'>
        {/* brand and comapny name */}
        <div className='w-full h-14  flex  align-content-center mb-2'>
       
          <div className='text-center mx-auto my-auto uppercase '>
            <img  className='w-28' src="https://naturaldemontana.com/wp-content/uploads/2020/06/simple-home-logo.png" alt="" />
          </div>
        </div>
        {/* Menu section */}
    
          <ul className='w-full  grid grid-cols-1  '>
            <li className='nav-item__title'>Navigation</li>
            <li className='h-full w-full text-gray-400 py-3  hover:text-slate-50 hover:cursor-pointer transition-colors '>
              <a href=""  className='flex justify-start  pl-8 items-center ' >
              <FontAwesomeIcon className='pr-5' icon={faTableCells} />
                Dashboard  
              </a>
            </li>
            <li className='h-full w-full text-gray-400 py-3  hover:text-slate-50 hover:cursor-pointer transition-colors '>
              <a href=""  className='flex justify-start  pl-8 items-center' >
              <FontAwesomeIcon className='pr-5' icon={faTableCells} />
                Personas  
              </a>
            </li>
            <li className='h-full w-full text-gray-400 py-3  hover:text-slate-50 hover:cursor-pointer transition-colors '>
              <a href=""  className='flex justify-start  pl-8 items-center' >
              <FontAwesomeIcon className='pr-5' icon={faTableCells} />
                Tasks  
              </a>
            </li>
            <li className='nav-item__title'>apps</li>
            <li className='h-full w-full text-gray-400 py-3  hover:text-slate-50 hover:cursor-pointer transition-colors '>
              <a href=""  className='flex justify-start  pl-8 items-center' >
              <FontAwesomeIcon className='pr-5' icon={faTableCells} />
                Calendario  
              </a>
            </li>
            <li className='h-full w-full text-gray-400 py-3  hover:text-slate-50 hover:cursor-pointer transition-colors '>
              <a href=""  className='flex justify-start  pl-8 items-center' >
              <FontAwesomeIcon className='pr-5' icon={faTableCells} />
                Emails  
              </a>
            </li>
            <li className='h-full w-full text-gray-400 py-3  hover:text-slate-50 hover:cursor-pointer transition-colors '>
              <a href=""  className='flex justify-start  pl-8 items-center' >
              <FontAwesomeIcon className='pr-5' icon={faTableCells} />
                Projects  
              </a>
            </li>
       
          
           
          
           

          </ul>
        
     </div>
     <div className="accordion" id="accordionExample5">
  <div className="accordion-item bg-white border border-gray-200">
    <h2 className="accordion-header mb-0" id="headingOne5">
      <button className="
        accordion-button
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne5" aria-expanded="true"
        aria-controls="collapseOne5">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne5" className="accordion-collapse collapse show" aria-labelledby="headingOne5">
      <div className="accordion-body py-4 px-5">
        <strong>This is the first item's accordion body.</strong> It is shown by default,
        until the collapse plugin adds the appropriate classes that we use to style each
        element. These classes control the overall appearance, as well as the showing and
        hiding via CSS transitions. You can modify any of this with custom CSS or overriding
        our default variables. It's also worth noting that just about any HTML can go within
        the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item bg-white border border-gray-200">
    <h2 className="accordion-header mb-0" id="headingTwo5">
      <button className="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo5" aria-expanded="false"
        aria-controls="collapseTwo5">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo5" className="accordion-collapse collapse" aria-labelledby="headingTwo5">
      <div className="accordion-body py-4 px-5">
        <strong>This is the second item's accordion body.</strong> It is hidden by default,
        until the collapse plugin adds the appropriate classes that we use to style each
        element. These classes control the overall appearance, as well as the showing and
        hiding via CSS transitions. You can modify any of this with custom CSS or overriding
        our default variables. It's also worth noting that just about any HTML can go within
        the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item bg-white border border-gray-200">
    <h2 className="accordion-header mb-0" id="headingThree5">
      <button className="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree5" aria-expanded="false"
        aria-controls="collapseThree5">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree5" className="accordion-collapse collapse" aria-labelledby="headingThree5">
      <div className="accordion-body py-4 px-5">
        <strong>This is the third item's accordion body.</strong> It is hidden by default,
        until the collapse plugin adds the appropriate classes that we use to style each
        element. These classes control the overall appearance, as well as the showing and
        hiding via CSS transitions. You can modify any of this with custom CSS or overriding
        our default variables. It's also worth noting that just about any HTML can go within
        the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
    </div>
  
  )
  }


{/* <select defaultValue={i18n.language} onChange={(e) => i18n.changeLanguage(e.target.value)}>
    {['es','en'].map((language) => (
      <option key={language}>{language}</option>
    ))}
  </select> */}
export default App
