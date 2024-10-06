import React, { useState } from 'react'
import Displaylist from './Displaylist'
import Cardhold from './Cardhold'
import { IoMdArrowDroprightCircle } from "react-icons/io";
import { closestCorners, DndContext, KeyboardSensor, PointerSensor, TouchSensor, useSensors, useSensor } from '@dnd-kit/core'
import { arrayMove, sortableKeyboardCoordinates } from '@dnd-kit/sortable'
import Midarea_draganddrop from './Draggable/mid';
import { updateListOfAnimations } from '../Redux/Createmulitple/slice';

export default function Displaycommon({ item ,globalid,indexof}) {

    return (
        <div >
            <Holdertemp child={<Createindividuallistm item={item} globalid={globalid} indexof={indexof}/>} />
        </div>
    )   
}


function Holdertemp({ child }) {
    return (
        <div className=' p-2 border-r-2 h-full'>
            {child}
        </div>
    )
}
export function Createindividuallistm({ item, globalid,indexof }) {
    const [motion, setmotion] = useState(item)
    console.log("motion inside ", motion)

    function handleDragEnd(event) {
        const { active, over } = event;
        if (active.id === over.id) return;
        function getpos(id) {
            return motion.findIndex(mot => mot.type === id);
        }

        setmotion((motion) => {
            const ori = getpos(active.id); // Original position
            const ovep = getpos(over.id); // Over position
            if(ori == ovep) return ;
            // Move the item in the array if valid positions are found
            if (ori !== -1 && ovep !== -1) {
                const updatedarray = arrayMove(motion, ori, ovep);
                dispatch(updateListOfAnimations({id:globalid, singlearraylist: updatedarray}))
                return updatedarray
            }
            return motion; // Return the original motion state if positions are invalid
        });
    }

    const sensorss = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    );

    return (
        <div>
            <div>
                <DndContext collisionDetection={closestCorners} sensors={sensorss} onDragEnd={handleDragEnd} >
                    <Midarea_draganddrop motionlists={motion} />
                </DndContext>
            </div>

        </div>
    )
}
