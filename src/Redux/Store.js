import { configureStore } from '@reduxjs/toolkit';
import forsinglespirit  from './midarea/slice';
import Forglobalid_updation  from './Global/Slice';
import multipleanimation from './Createmulitple/slice';
const store = configureStore({
    reducer: {
      singlelist: forsinglespirit,  
      Getglobalid: Forglobalid_updation,
      multipleanimation : multipleanimation
    }
});
  
export default store;
  