import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    multipleArray: [
        {
            globalidformultiple: 0,
            listofanimation: [
                [{ type: 'move_x', steps: 0, id: 0 }],
                [{ type: 'move_x', steps: 0, id: 0 }]        
            ],
        },
    ],
};

export const multipleanimation = createSlice({
    name: "animation",
    initialState,
    reducers: {
        updateListOfAnimations: (state, action) => {
            const { id, singlearraylist } = action.payload;

            const itemIndex = state.multipleArray.findIndex(
                (item) => item.globalidformultiple === id
            );

            if (itemIndex !== -1) {
                state.multipleArray[itemIndex].listofanimation = singlearraylist;
            }
        },
        Createnewentryfor_multiple: (state, action) => {
            const { id } = action.payload; 
            const {numberofLists} = action.payload;
            
            if(numberofLists === 2) {
                state.multipleArray.push({
                    globalidformultiple: id, // Set the new id here
                    listofanimation: [
                        [{ type: 'move_x', steps: 0, id: 0 }],
                        [{ type: 'move_x', steps: 0, id: 0 }],
                    ],
                });
            }
            //3
            else if(numberofLists === 3) {
                state.multipleArray.push({
                    globalidformultiple: id, // Set the new id here
                    listofanimation: [
                        [{ type: 'move_x', steps: 0, id: 0 }],
                        [{ type: 'move_x', steps: 0, id: 0 }],
                        [{ type: 'move_x', steps: 0, id: 0 }],
                       
                    ],
                });
            }
            //4
            else if(numberofLists === 4) {
                state.multipleArray.push({
                    globalidformultiple: id, // Set the new id here
                    listofanimation: [
                        [{ type: 'move_x', steps: 0, id: 0 }],
                        [{ type: 'move_x', steps: 0, id: 0 }],
                        [{ type: 'move_x', steps: 0, id: 0 }],
                        [{ type: 'move_x', steps: 0, id: 0 }],
                    ],
                });
            }
            
        },
    },
});

// Correct export
export const { updateListOfAnimations, Createnewentryfor_multiple } = multipleanimation.actions;
export default multipleanimation.reducer;
