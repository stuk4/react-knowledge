
import { useState } from 'react'
import { useTranslation } from 'react-i18next';
import './assets/scss/styles.scss'
function App() {
  const [count, setCount] = useState(0)
 const { t,i18n } = useTranslation();
  return (
    <div className='w-56 bg-slate-600 h-screen'>
        {/* brand and comapny name */}
        <div className='w-full h-14 bg-red-400 flex  align-content-center mb-14'>
          <div className='h-full w-20'>
            <img className='max-w-full max-h-full ' src='https://image.shutterstock.com/image-vector/image-icon-trendy-flat-style-260nw-643080895.jpg' alt='' />
          </div>
          <h4 className='text-center mx-auto my-auto uppercase'>Company</h4>
        </div>
        {/* Menu section */}
        <div className='w-full  px-6'>
          <ul className='grid grid-cols-1 gap-4'>
            <li className='h-4 '>
              <a href="" >
                Dashboard  

              </a>
            </li>
            <li>
              <a href="">
                Datos
              </a>
            </li>
          </ul>
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
