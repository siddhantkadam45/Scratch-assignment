
import { useDispatch, useSelector } from "react-redux";

export default function Createnewfeature() {
    console.log('inside create new')
    const motionlists = useSelector((state) => state.singlelist.motionLists)
    console.log(motionlists)
}
