export const createNewMotionList = (id) => ({
  type: 'singlelist_creation/Createnewentry',
  payload: {
    id
  }
});

export const updateMotionList = (id, motionarray) => ({
  type: 'singlelist_creation/Forexistingentry',
  payload: {
    id,
    motionarray
  }
});

export const Getmotiondetails = () => ({
  type: 'singlelist_creation/Giveallmotion',
  payload: {}
});