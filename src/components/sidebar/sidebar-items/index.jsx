import React from 'react'
import "./style.css"
const SidebarItems = () => {
    const items = [
      {
        title: "",
        color: "red",
      },
      {
        title: "",
        color: "red",
      },
      {
        title: "",
        color: "red",
      },
    ];
  
    return (
      <div>
        {items.map((item) => (
          <div key={item.title} className='item' style={{ backgroundColor: item.color }}>
            {item.title}
          </div>
        ))}
      </div>
    );
  };
  
  export default SidebarItems;