import React from 'react'

function Button({children}) {
  return (
   <button className='w-64 rounded-lg font-medium text-white px-5 py-2.5 mr-2 mb-2 text-xl bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700'>{children}</button>
  )
}

export default Button