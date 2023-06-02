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
            <label key={filter} className='text-md/1 dark:text-light-100 pb-2 last-of-type:pb-0'>
                <input
                    className='w-4 h-4 mr-3'
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
            <div className='absolute top-16 left--14 bg-light-100 dark:bg-dark-200 w-48 flex flex-col items-start p-6 rounded-lg shadow-4xl'>
                {renderedFilters}
            </div>
    )
}

export default FilterModal