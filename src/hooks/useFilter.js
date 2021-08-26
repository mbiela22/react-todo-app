import {useDispatch, useSelector} from "react-redux";
import {setFilter} from "../store/slice/filterSlice";

export default function useFilter() {
    const dispatch = useDispatch();
    const activeFilter = useSelector(state => state.filter.activeFilter);

    return {
        activeFilter,

        setActiveFilter(id) {
            if (activeFilter !== id) {
                dispatch(setFilter(id));
            }
        },
    }
}
