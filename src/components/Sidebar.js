// import React from "react";
import { closestCorners, DndContext, KeyboardSensor, PointerSensor, TouchSensor, useSensors, useSensor } from '@dnd-kit/core'
import Icon from "./Icon";
import React, { useState } from 'react';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'
import Sidebarmovement from './Draggable/Sidebar';
import { arrayMove, sortableKeyboardCoordinates } from '@dnd-kit/sortable'

export default function Sidebar() {
    const [temp, settemp] = useState(0);
    const [value, setValue] = useState("0");
    const [items, setitems] = useState([
        'move_x',
        'move_y',
        'rotate_clockwise',
        'rotate_anticlockwise',
        'repeat'
    ])
    const handleChange = (event) => {
        setValue(toString(event.target.value, 10) || 0); // Parse to integer or default to 0
    };
    const handleDragEnd = (event) => {
        const { active, over } = event;
        // if (active.id !== over.id) {
        //     setitems((items) => {
        //         const oldIndex = items.indexOf(active.id);
        //         const newIndex = items.indexOf(over.id);
        //         return arrayMove(items, oldIndex, newIndex);
        //     });
        // }
    };
    const sensorss = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
          coordinateGetter: sortableKeyboardCoordinates,
        })  
      );

    return (
        <div>


            <div className="w-60 flex-none h-full overflow-y-auto flex flex-col items-start p-2 border-r border-gray-200">
                <div className="font-bold mb-5 text-center  border-2 rounded text-white bg-green-400 p-2 w-auto">
                    Side Bar
                </div>
                <div className="font-bold border py-1 px-2 bg-red-400 rounded-md"> {"Events"} </div>
                <div className="flex flex-row flex-wrap bg-yellow-500 text-white  my-2 text-sm cursor-pointer border rounded-md px-2 py-2">
                    {"When "}
                    <Icon name="flag" size={15} className="text-green-600 mx-2" />
                    {"clicked"}
                </div>
                <div className="flex flex-row flex-wrap bg-yellow-500 text-white  my-2 text-sm cursor-pointer px-2 py-2 rounded-md">
                    {"When this sprite clicked"}
                </div>
                <div className="font-bold"> {"Motion"} </div>


                <div className='w-60 flex-none h-full overflow-y-auto flex flex-col items-start  border-r border-gray-200'>
                    <DndContext collisionDetection={closestCorners}  onDragEnd={handleDragEnd} sensors={sensorss}>
                        <Sidebarmovement itemss={items} value={value} handleChange={handleChange} />
                    </DndContext >
                </div>

            </div>

        </div>
    );
}
