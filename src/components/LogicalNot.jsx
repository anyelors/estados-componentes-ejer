import React, { useState } from 'react'

const LogicalNot = () => {

  const [toggle, setToggle] = useState(true)

  return (
    <>
      <button 
            onClick={() => setToggle(!toggle)} 
            className="btn primary">
          Toggle Estado
      </button>
      {toggle && (
        <ul>
          <li>Menu 1</li>
          <li>Menu 2</li>
          <li>Menu 3</li>
          <li>Menu 4</li>
          <li>Menu 5</li>
        </ul>
      )}
    </>
  )
}
export default LogicalNot