import React from 'react';

export const SearchBox=({placeholder,handleChange})=>{
    console.log('placeholder',placeholder)
    console.log('handleChange',handleChange)

return <input className='search' type='search' placeholder={ placeholder} onChange={handleChange}></input>
}