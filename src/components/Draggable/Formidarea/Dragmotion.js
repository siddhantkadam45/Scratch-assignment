import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Formovementx, Formovementy, Forrotateanti, Forrotateclockwise, Repeatthemovemnt } from '../../Displaylist';

export default function Dragmotionmidarea({ ele, id }) {
    console.log(id, ele);

    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });
    const style = {
        transition,
        transform: CSS.Transform.toString(transform)
    };
    let i = ele.type.length - 1;
    for (; i >= 0; i--) {
        if (!/\d/.test(id[i])) {  // Using a regex to check if it's not a digit
            break;
        }
    }
    const nonNumericPart = ele.type.substring(0, i + 1);
    console.log("none num part : ", nonNumericPart)
    // Define a function to render the correct component based on the type
    const renderMotionComponent = () => {
        if (nonNumericPart === 'move_x') {
            return <Formovementx />;
        } else if (nonNumericPart === 'move_y') {
            return <Formovementy />;
        } else if (nonNumericPart === 'rotate_clockwise') {
            return <Forrotateclockwise />;
        } else if (nonNumericPart === 'rotate_anticlockwise') {
            return <Forrotateanti />;
        } else {
            return <Repeatthemovemnt />;
        }
    };

    return (
        <div ref={setNodeRef} {...attributes} {...listeners} style={style}>
            <div>
                {renderMotionComponent()}  {/* Dynamically rendering the correct component */}
            </div>
        </div>
    );
}
