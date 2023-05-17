import {useDispatch, useSelector} from "react-redux";
import {closeFilterModal} from "../store/filterModalSlice";
import {availableFiltersType} from "../utils/consts";


const FilterModal = ({filters, onChange}) => {
    const dispatch = useDispatch()

    const modalStatus = useSelector(state => state.filterModal.status)
    console.log(filters)

    const renderedFilters = availableFiltersType.map((filterType) => {
        const checked = filters.includes(filterType)
        console.log(checked)
        const handleChange = () => {
            const changeType = checked ? 'removed' : 'added'
            onChange(filterType, changeType)
        }
        return (
            <label key={filterType}>
                <input
                    type="checkbox"
                    name={filterType}
                    checked={checked}
                    onChange={handleChange}
                />
                {filterType}
            </label>
        )
    })


    const closeModal = () => {
        dispatch(closeFilterModal())
    }


    if (modalStatus === false) return null;

    return (
        <div>
            <form>
                {renderedFilters}
            </form>
        </div>
    )
}

export default FilterModal