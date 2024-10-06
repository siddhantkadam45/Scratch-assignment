import React from 'react';
import Icon from "../Icon"; // Assuming Icon is a custom component
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'


export default function SetSidebar({ ele, value, handleChange, id }) {
    console.log(id)
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });
    const style = {
        transition,
        transform: CSS.Transform.toString(transform)
    }
    switch (ele) {
        case 'move_x':
            return (
                <div ref={setNodeRef} {...attributes} {...listeners} style={style}      >
                    <div className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 mb-1 text-sm cursor-pointer rounded-md">
                        <div className='flex p-2 pl-1'>
                            <p className='text-md'>Move X</p>
                            <input type="number" value={value !== undefined ? Number(value) : 0} onChange={handleChange} className="w-20 mx-2 px-2 border rounded-md text-black" />
                            <p className='text-md'>steps</p>
                        </div>
                    </div>
                </div>


            );
        case 'move_y':
            return (
                <div ref={setNodeRef} {...attributes} {...listeners} style={style}      >

                    <div className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2  mb-1 text-sm cursor-pointer rounded-md">
                        <div className='flex flex-rwo p-2 pl-1'>
                            <p className='text-md'>Move Y</p>
                            <input type="number" value={value !== undefined ? Number(value) : 0}
                                onChange={handleChange} className="w-20 mx-2 px-2 border rounded-md text-black" />
                            <p className='text-md'>steps</p>
                        </div>
                    </div>
                </div>
            );

        case 'rotate_clockwise':
            return (
                <div ref={setNodeRef} {...attributes} {...listeners} style={style}  >

                    <div className="flex flex-col flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer gap-2 border rounded-md">
                        <div className=" flex gap-3 ">
                            <p>Rotate By: </p>
                            <input type="number" value={value !== undefined ? Number(value) : 0} onChange={handleChange} 
                                className="w-20 mx-2 px-2 border rounded-md text-black" />
                        </div>

                        <div className="flex flex-row gap-2 border-1 bg-blue-600 p-1 items-center mb-1 rounded-md">
                            {"Turn "}
                            <Icon name="redo" size={15} className="text-white mx-2" />
                            {"15 degrees"}
                        </div>
                    </div>
                </div>
            );

        case 'rotate_anticlockwise':
            return (
                <div ref={setNodeRef} {...attributes} {...listeners} style={style}      >

                    <div className="flex flex-col flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer gap-2 border rounded-md">

                        <div className=" flex gap-3 ">
                            <p>Rotate By: </p>
                            <input type="number" value={value !== undefined ? Number(value) : 0} onChange={handleChange} 
                                className="w-20 mx-2 px-2 border rounded-md text-black" />
                        </div>

                        <div className="flex flex-row gap-2 border-1 bg-blue-600 p-1 items-center mb-1 rounded-md">
                            {"Turn "}
                            <Icon name="undo" size={15} className="text-white mx-2" />
                            {"15 degrees"}
                        </div>
                    </div>
                </div>
            );

        case 'repeat':
            return (
                <div ref={setNodeRef} {...attributes} {...listeners} style={style}      >

                    <div className="flex flex-col flex-wrap bg-blue-500 text-white px-2 py-2 my-2 text-sm cursor-pointer gap-2 border rounded-md">
                        <div className=" flex ">
                            <p>Repeat : </p>
                            <input type="number" value={value !== undefined && Number(value)!= NaN ? Number(value) : 0} 
                                onChange={handleChange} className="w-20 mx-2 px-2 border rounded-md text-black" />
                        </div>
                    </div>
                </div>
            );

        default:
            return <div>No action selected</div>;
    }
}
