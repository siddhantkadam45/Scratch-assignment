
export const updateAnimationsAction = (id, singlearraylist) => {
    return {
        type: 'multipleanimation/updateListOfAnimations',
        payload: {
            id,
            singlearraylist,
        },
    };
};

export const Createnewentryfor_multiple = (id, numberofLists) => {
    return {
        type: 'multipleanimation/Createnewentryfor_multiple',
        payload: {
            id,
            numberofLists,
        },
    };
};
