import React, { useEffect, useState } from "react";
import Createnewfeature from "./Createnewfeature";
import Displaylist from "./Displaylist";
import { useDispatch, useSelector } from "react-redux";
import { Createnewentry } from "../Redux/midarea/slice";
import { Incrementglobalid } from '../Redux/Global/Slice'
import Midarea_draganddrop from "./Draggable/mid";
import Displaymultiple from "./Displaymultiple";
import Managecoloumn from "./Coloumn";
import { IoMdArrowDroprightCircle } from "react-icons/io";
import Cardhold from "./Cardhold";
import { IncrementforMultiple, } from "../Redux/Global/Slice";
import { Createnewentryfor_multiple } from "../Redux/Createmulitple/slice";

export default function MidArea() {
    const [singleormulitple, setsingleormultiple] = useState(0);
    const [cnt, setcnt] = useState(0);
    const dispatch = useDispatch();
    const motionlists = useSelector((state) => state.singlelist.motionLists);
    const getglobalid = useSelector((state) => state.Getglobalid.globalid);

    function forCreation() {
        console.log(getglobalid)
        console.log(motionlists)
        dispatch(Incrementglobalid());
        dispatch(Createnewentry(getglobalid + 1)); // Dispatching the new entry creation
    }



    // return <div></div>
    return <div className="flex-1 h-full overflow-auto">
        <div>
            <div className=" font-semibold">
                Mid Area
            </div>
            <div>
                <div className=" flex justify-around  mb-3">
                    <button className="bg-blue-500 border rounded-md p-2 cursor-pointer" onClick={() => {
                        setsingleormultiple(0);
                        forCreation();
                    }}>Add Single Spirit</button>
                    <button className="bg-blue-500 border rounded-md p-2 cursor-pointer" onClick={() => {
                        setcnt(cnt + 1);
                        setsingleormultiple(1)
                    }}>
                        Add Multiple Spirit
                    </button>
                </div>
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', // Min 200px per column
                        gap: '16px',
                    }}>
                    {/* // holder wrap up  then inside this run i have to create it should be inside each  */}
                    {!singleormulitple ?
                        <div>
                            <Singlestate />
                        </div> :
                        <div>
                            <MultipleList tempcnt={cnt} />
                        </div>}
                </div>
            </div>
        </div>
    </div>;
}

function Singlestate() {
    const motionlists = useSelector((state) => state.singlelist.motionLists)

    const dispatch = useDispatch();

    console.log('motionlist inside te  sin', motionlists)
    return (
        <div className="grid grid-flow-col gap-5">

            {motionlists.map((item, index) => {
                return <Displaylist item={item} key={index} />
            })}
        </div>
    )
}

function MultipleList({ tempcnt }) {
    console.log('tempcnt', tempcnt)
    const dispatch = useDispatch();
    const [numLists, setNumLists] = useState(2);
    const multiplelist = useSelector((state) => state.multipleanimation.multipleArray);
    const getmulitpleglobal = useSelector((state) => state.Getglobalid.formultiplelist_globalid)
    const forme = useSelector((state) => state.multipleanimation);
    // console.log(forme.multipleArray)
    function handlemultiplecreation() {
        // console.log("inside")
        dispatch(IncrementforMultiple());
        dispatch(Createnewentryfor_multiple({ id: getmulitpleglobal + 1, numberofLists: numLists }));
    }
    const handleSelectChange = (e) => {
        setNumLists(Number(e.target.value));
    };

    const renderLists = (list) => {
        const first = list.listofanimation;
        const l = first.length;

        if (l == 2) {
            return <div ><Justfor list={first} /></div>
        }
        else if (l == 3) {
            return <div ><DisplayThreelist list={first} /></div>

        }
        else if (l == 4) {
            return <div><DisplayFourList list={first} /></div>
        }

        return <div>hi</div>
    };

    return (
        <div>
            <div className="my-2  px-5 border-2 rounded-lg border-black ">Select the Number of Corresponding Multiple Lists You Want to Create:</div>
            <div>
                <div className="flex justify-around ">
                    <div className=" w-16 flex justify-center">
                        <select value={numLists} onChange={handleSelectChange} className="w-16 border-2  rounded-md border-bl">
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                        </select>
                    </div>
                    <div>
                        <button className="bg-red-300 px-2 border-1 rounded-md" onClick={() => {
                            handlemultiplecreation();
                        }}>Add item </button>
                    </div>
                </div>
            </div>
            <div className="grid grid-flow-col gap-5 mt-5">
                {multiplelist.map((list, index) => {
                    // console.log(list)
                    return <div key={index}  >{renderLists(list)} </div>
                })}

            </div>
        </div>
    );
}



function Justfor({ list }) {

    const [selectspiritone, setspiritone] = useState(0);
    const [selectspiritwo, setspirittwo] = useState(0);
    const first = list[0];
    const second = list[1];
    const getmulitpleglobal = useSelector((state) => state.Getglobalid.formultiplelist_globalid)

    return (
        <div className="inline-block grid-cols-2 gap-4 border-2  ">
            <div className="flex gap-5 flex-col">
                <div className="flex justify-center mt-4">
                    <button className='border-2 border-slate-400 px-2 w-20 py-1 rounded-md flex items-center justify-center gap-1 bg-purple-400'>
                        <IoMdArrowDroprightCircle />
                        Run
                    </button>
                </div>
                <div>
                    <div className="flex">

                        <div className="inline-block">
                            <Managecoloumn value={selectspiritone} updaterfunciton={setspiritone} item={first} globalid={getmulitpleglobal} indexof={0}/>
                        </div>
                        <div className="inline-block">
                            <Managecoloumn value={selectspiritwo} updaterfunciton={setspirittwo} item={second} globalid={getmulitpleglobal} indexof={1} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function DisplayThreelist({ list }) {
    const [selectspiritone, setspiritone] = useState(0);
    const [selectspiritwo, setspirittwo] = useState(0);
    const [selectspiritthird, setspiritthird] = useState(0)

    const first = list[0];
    const second = list[1];
    const third = list[2];
    const getmulitpleglobal = useSelector((state) => state.Getglobalid.formultiplelist_globalid)
    // console.log('first is ', first, second, third);
    // return <div>hi</div>
    return (
        <div className="inline-block grid-cols-2 gap-4 border-2  ">
            <div className="flex gap-5 flex-col">
                <div className="flex justify-center mt-4">
                    <button className='border-2 border-slate-400 px-2 w-20 py-1 rounded-md flex items-center justify-center gap-1 bg-purple-400'>
                        <IoMdArrowDroprightCircle />
                        Run
                    </button>
                </div>
                <div>
                    <div className="flex">
                        {/* Adjust columns to take only the required width */}
                        <div className="inline-block">
                            <Managecoloumn value={selectspiritone} updaterfunciton={setspiritone} item={first} globalid={getmulitpleglobal} indexof={0} />
                        </div>
                        <div className="inline-block">
                            <Managecoloumn value={selectspiritwo} updaterfunciton={setspirittwo} item={second} globalid={getmulitpleglobal} indexof={1} />
                        </div>
                        <div className="inline-block">
                            <Managecoloumn value={selectspiritthird} updaterfunciton={setspiritthird} item={third} globalid={getmulitpleglobal} indexof={2} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function DisplayFourList({ list }) {
    const [selectspiritone, setspiritone] = useState(0);
    const [selectspiritwo, setspirittwo] = useState(0);
    const [selectspiritthird, setspiritthird] = useState(0)
    const [selectfourthspirit, setfourthspirit] = useState(0)
    const first = list[0];
    const second = list[1];
    const third = list[2];
    const fourth = list[3];

    const getmulitpleglobal = useSelector((state) => state.Getglobalid.formultiplelist_globalid)

    // console.log('first is ', first, second, third, fourth);
    // return <div>holo</div>
    return (
        <div className="inline-block grid-cols-2 gap-4 border-2  ">
            <div className="flex gap-5 flex-col">
                <div className="flex justify-center mt-4">
                    <button className='border-2 border-slate-400 px-2 w-20 py-1 rounded-md flex items-center justify-center gap-1 bg-purple-400'>
                        <IoMdArrowDroprightCircle />
                        Run
                    </button>
                </div>
                <div>
                    <div className="flex">
                        {/* Adjust columns to take only the required width */}
                        <div className="inline-block">
                            <Managecoloumn value={selectspiritone} updaterfunciton={setspiritone} item={first} globalid={getmulitpleglobal} indexof={0} />
                        </div>
                        <div className="inline-block">
                            <Managecoloumn value={selectspiritwo} updaterfunciton={setspirittwo} item={second} globalid={getmulitpleglobal} indexof={1} />
                        </div>
                        <div className="inline-block">
                            <Managecoloumn value={selectspiritthird} updaterfunciton={setspiritthird} item={third} globalid={getmulitpleglobal} indexof={2} />
                        </div>
                        <div className="inline-block">
                            <Managecoloumn value={selectfourthspirit} updaterfunciton={setfourthspirit} item={fourth} globalid={getmulitpleglobal} indexof={3} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

