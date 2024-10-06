import React from 'react'
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'
import Dragmotionmidarea from './Formidarea/Dragmotion'

export default function Midarea_draganddrop({ motionlists }) {
    console.log("motionlists inside dafd", motionlists)
    return (
        <div>
            <div>
                <SortableContext items={motionlists} strategy={verticalListSortingStrategy} >
                    {motionlists.map((item, index) => {
                        let temp = ''
                        
                        if (item.type == 'move_x' && index == 0) temp = `move_x`
                        else if (item.type == 'move_x') temp = `move_x${index}`
                        else if (item.type == 'move_y') temp = `move_Y${index}`
                        else if (item.type == 'rotate_clockwise') temp = `rotate_clockwise${index}`
                        else if (item.type == 'rotate_anticlockwise') temp = `rotate_anticlockwise${index}`
                        else if (item.type == 'repeat') temp = `repeat${index}`
                        // console.log(temp)
                        return <Dragmotionmidarea ele={item} id={temp} key={temp} />
                    })}
                </SortableContext>
            </div>
        </div>
    )
}

// 'rotate_clockwise',
//         'rotate_anticlockwise',
//         'repeat'