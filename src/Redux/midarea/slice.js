import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    motionLists: [
        {
            id: 0,        // Unique ID for this list
            // spriteId: 1,  // ID of the associated sprite
            motions: [    // Motions for this sprite in the order they were added
                { type: 'move_x', steps: 0, id: 0 }
            ]
        }
        // Additional motion lists for other sprites or blocks...
    ],
    // To increment when a new motion list is added
};


export const forsinglespirit = createSlice({
    name: 'singlelist_creation',
    initialState,
    reducers: {
        Createnewentry: (state, action) => {
            state.motionLists.push({ id: action.payload, motions: [{ type: 'move_x', steps: 0, id: 0 }] })
        },
        Forexistingentry: (state, action) => {
            const motionarray = action.motionarray;
            const id = action.id;
            for (let i = 0; i < motionLists.size(); i++) {
                if (motionLists[i].id == id) {
                    motionLists[i].motions = motionarray
                    return ;
                }
            }
            return;
        },
        Giveallmotion : (state)=> {
            return motionLists;
        }
    }
})

export const { Createnewentry, Forexistingentry,Giveallmotion } = forsinglespirit.actions;
export default forsinglespirit.reducer;
