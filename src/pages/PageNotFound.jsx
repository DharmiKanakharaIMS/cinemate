import { Link } from 'react-router-dom'
import PageNotFoundImg from '../assets/images/pagenotfound.png'
import {Button} from '../components'
import useTitle from '../hooks/useTitle'

function PageNotFound() {
  
 useTitle("Page Not Found")
  return (
    <main>
      <section className="felx felx-col justify-center px-2">
        <div className="flex flex-col items-center my-4">
          <p className='text-7xl text-gray-700 font-bold my-10 dark:text-white'>404, Oops!</p>
          <div className='max-w-lg'>
            <img src={PageNotFoundImg} alt="404 Page Not Found" className='rounded'/>
          </div>
        </div>
        <div className='flex justify-center my-4'>
          <Link to={'/'}>
            <Button>Back To Cinemate</Button>
          </Link>
        </div>
      </section>
    </main>
  )
}

export default PageNotFound