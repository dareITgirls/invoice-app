import {useDispatch, useSelector} from "react-redux";
import {closeFilterModal, toggleFilter} from "../store/filterModalSlice";
import {firstLetterToUpper} from "../utils/consts";

const FilterModal = () => {
    const dispatch = useDispatch()
    const { modalStatus, filters }= useSelector(state => state.filterModal)

    const handleToggleFilter = (filterType) => {
        dispatch(toggleFilter(filterType))
    }

    const renderedFilters = Object.keys(filters).map((filter) => {
        const checked = filters[filter]
        const handleChange = () => {
            handleToggleFilter(filter)
        }
        return (
            <label key={filter}>
                <input
                    type="checkbox"
                    name={filter}
                    checked={checked}
                    onChange={handleChange}
                />
                {firstLetterToUpper(filter)}
            </label>
        )
    })

    const closeModal = () => {
        dispatch(closeFilterModal())
    }

    if (!modalStatus) return null;

    return (
            <div className='absolute bg-light-100 w-48 flex flex-col items-start p-6 rounded-lg shadow-4xl'>
                {renderedFilters}
            </div>
    )
}

export default FilterModal