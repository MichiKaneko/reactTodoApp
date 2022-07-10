import React from 'react'
import { MenubarData } from './MenubarData';

export default function Menubar() {
  return (
    <div className='Menubar'>
      <ul className='MenubarList'>
        {MenubarData.map((value, key)=>{
          return(
            <li key={key} id={window.location.pathname == value.link ? "active" : ""} className="row" onClick={()=>{
              window.location.pathname = value.link;
            }}>
              <div id='icon'>{value.icon}</div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
