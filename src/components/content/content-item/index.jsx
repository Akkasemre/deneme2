import React from 'react'
import "./style.css"

const ContentItems = () => {
    const items= [{title:""},{title:""},{title:""},{title:""},{title:""},{title:""},{title:""},{title:""},]
  return (
    <div>
        {items.map((item)=>(
            <div key={item.title} className='item'></div>
        ))}
    </div>
  )
}

export default ContentItems