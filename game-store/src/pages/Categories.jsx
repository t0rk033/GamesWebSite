import React from 'react'
import './Categories.css'
function Categories({games, reference}) {
  return (
    <div  id='categories' className='categories' ref={reference}>
      <h1>Categorias</h1>
    </div>
  )
}

export default Categories
