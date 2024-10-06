import React, { useState } from 'react'
import { IoMdArrowDroprightCircle } from "react-icons/io";
import Cardhold from './Cardhold';
import Midarea_draganddrop from './Draggable/mid';    
import { closestCorners, DndContext, KeyboardSensor, PointerSensor, TouchSensor, useSensors, useSensor } from '@dnd-kit/core'
import { arrayMove, SortableContext, sortableKeyboardCoordinates } from '@dnd-kit/sortable'



export default function Displaylist({ item }) {
    // console.log(item);
    return (
        <div>
            <Cardhold Createindividuallist={<Createindividuallist item={item} />} />
        </div>
    )
}

export function Createindividuallist({ item }) {
    const dispatch = useDispatch();
    const [motion,setmotion] = useState(item.motions)
    // const motion = item.motions;

    function handledragend(event) {
        const { active, over } = event;
        if (active.id === over.id) return; // If the item is dropped on itself, do nothing
    
        function getpos(id) {
            // Assuming the id is unique and corresponds directly to the type of motion
            return motion.findIndex(mot => mot.type === id);
        }
    
        setmotion((motion) => {
            const ori = getpos(active.id); // Original position
            const ovep = getpos(over.id); // Over position
    
            // Move the item in the array if valid positions are found
            if (ori !== -1 && ovep !== -1) {
                 const updatedarray = arrayMove(motion, ori, ovep);
                 dispatch(updatedarray)
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
            <div className='flex  justify-center'>
                <button className='border-2 border-slate-400 px-2 w-20 py-1 rounded-md flex items-center justify-center gap-1 bg-purple-400'>
                    <IoMdArrowDroprightCircle />
                    Run
                </button>
            </div>

            <div>
                <DndContext collisionDetection={closestCorners} onDragEnd={handledragend} sensors={sensorss} >
                    <Midarea_draganddrop motionlists={motion} />
                </DndContext>
            </div>

        </div>
    )
}
export function Formovementx() {
    const [value, setvalue] = useState(0);
    const handleChange = (e) => {
        setvalue(e.target.value);
    }
    return (
        <div>
            <div className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2  mb-1 text-sm cursor-pointer rounded-md">
                <div className='flex p-2'>
                    <p className='text-md'>Move X</p>
                    <input type="number" value={value} onChange={handleChange} className="w-16 mx-2 px-2 border rounded-md text-black" />
                    <p className='text-md'>steps</p>
                </div>
            </div>
        </div>
    )
}
import Icon from "./Icon";
import { useDispatch } from 'react-redux';
// import Cardhold from './Cardhold';

export function Formovementy() {
    const [value, setvalue] = useState(0);
    const handleChange = (e) => {
        setvalue(e.target.value);
    }
    return (
        <div>
            <div className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2  mb-1 text-sm cursor-pointer rounded-md">
                <div className='flex p-2'>
                    <p className='text-md'>Move Y</p>
                    <input type="number" value={value} onChange={handleChange} className="w-20 mx-2 px-2 border rounded-md text-black" />
                    <p className='text-md'>steps</p>
                </div>
            </div>
        </div>
    )
}

export function Forrotateclockwise() {
    return (
        <div>
            <div className="flex flex-col flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer gap-2 border rounded-md">
                <div className=" flex gap-3 ">
                    <p>Rotate By: </p>
                    <input type="number" className="w-20 mx-2 px-2 border rounded-md text-black" />
                </div>

                <div className="flex flex-row gap-2 border-1 bg-blue-600 p-1 items-center mb-1 rounded-md">
                    {"Turn "}
                    <Icon name="redo" size={15} className="text-white mx-2" />
                    {"0 degrees"}
                </div>
            </div>
        </div>
    )
}

export function Forrotateanti() {
    return (
        <div>
            <div className="flex flex-col flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer gap-2 border rounded-md">
                <div className=" flex gap-3 ">
                    <p>Rotate By: </p>
                    <input type="number" className="w-20 mx-2 px-2 border rounded-md text-black" />
                </div>

                <div className="flex flex-row gap-2 border-1 bg-blue-600 p-1 items-center mb-1 rounded-md">
                    {"Turn "}
                    <Icon name="undo" size={15} className="text-white mx-2" />
                    {"0 degrees"}
                </div>
            </div>
        </div>
    )
}

export function Repeatthemovemnt() {
    const [value, setvalue] = useState(0);
    const handleChange = (e) => {
        setvalue(e.target.value);
    }
    return (
        <div>
            <div className="flex flex-col flex-wrap bg-blue-500 text-white px-2 py-2 my-2 text-sm cursor-pointer gap-2 border rounded-md">
                <div className=" flex ">
                    <p>Repeat : </p>
                    <input type="number" value={value} onChange={handleChange} className="w-20 mx-2 px-2 border rounded-md text-black" />
                </div>
            </div>
        </div>
    )
}