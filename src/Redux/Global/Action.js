// Corrected action creators

export const Updateglobalid = (id) => {
    return {
        type: 'global_idupdate/Incrementglobalid',
        payload: {
            id,
        },
    };
};

export const IncrementforMultiple = (id) => {
    return {
        type: 'global_idupdate/IncrementforMultiple',
        payload: {
            id
        }
    };
};
