import React from 'react'
import SetSidebar from './SetSidebar'
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'

export default function Sidebarmovement({itemss, value,handleChange}) {
    console.log(itemss,value,handleChange)
    return (
        <div>
            <SortableContext items={itemss} strategy={verticalListSortingStrategy}>
            {itemss.map((ele,index) => {
              return   <SetSidebar ele  = {ele} id={ele} key= {index} value={value} handleChange={handleChange}/>
            })}
            </SortableContext>
        </div>
    )
}
