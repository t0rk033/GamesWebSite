import React from 'react'

function Bag({games, reference}) {
  return (
    <div id='bag' className='bag' ref={reference}>
      <h1>myBag</h1>
    </div>
  )
}

export default Bag
