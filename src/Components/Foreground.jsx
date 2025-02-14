import React, { useRef, useState } from 'react'
import Card from './Card'
 
const Foreground = () => {
    const ref = useRef(null); 
    const data = [
        {
            desc:"This is the Background color of the card that will be displayed",
            filesize:".9mb",
            close:true,
            tag: {isOpen: true, tagTitle:"Download Now", tagColor:"green",},
        },
        {
            desc:"This is the Background color of the card that will be displayed [Card 2]",
            filesize:".5mb",
            close:false,
            tag: {isOpen: true, tagTitle:"Download Now", tagColor:"blue",},
        },
        {
            desc:"This is the Background color of the card that will be displayed [Card 3]",
            filesize:".8mb",
            close:true,
            tag: {isOpen: true, tagTitle:"Upload", tagColor:"blue",},
        },{
            desc:"This is the Background color of the card that will be displayed [Card 2]",
            filesize:".5mb",
            close:false,
            tag: {isOpen: true, tagTitle:"Download Now", tagColor:"green",},
        }
    ]
  return (
    <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-10'>
        {data.map((item,index)=>(
            <Card data={item} reference={ref}/> 
        ))}
    </div>
  )
}

export default Foreground
