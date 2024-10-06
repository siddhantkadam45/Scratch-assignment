import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Displaycommon from './Displaymultiple';


export default function Managecoloumn({value,updaterfunciton, item ,globalid,indexof}) {

    return (
        <div>
           <div>
            {/* just to select the spirit  */}
            <input type='number'  className='bg-red-0  border-2 rounded-md mx-2 border-grey-600 text-black   '   onChange={(e) => updaterfunciton(e.target.value)  } />
           </div>
           <div>
                <Displaycommon item = {item} globalid={globalid} indexof={indexof}/>
           </div>
        </div>
    )
}
