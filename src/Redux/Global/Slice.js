import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    globalid: 0,
    formultiplelist_globalid : 0
};

export const Forglobalid_updation = createSlice({
    name: 'global_idupdate',
    initialState,
    reducers: {
        Incrementglobalid: (state,payload) => {
            state.globalid = payload.id;  // Increment the global ID directly
        },
        IncrementforMultiple : (state,payload) => {
            state.formultiplelist_globalid = payload.id
        }
    }
});

export const { Incrementglobalid, IncrementforMultiple } = Forglobalid_updation.actions;
export default Forglobalid_updation.reducer;
