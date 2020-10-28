import React from 'react'

export default function Header({title}){
    return(
       <header>
           <h1>
               {title}
               {props.children}
           </h1>
       </header> 
    );
}