import {useDispatch, useSelector} from "react-redux";
import {toggleFilter} from "../store/filterModalSlice";
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
            <label key={filter} className='text-md/1 dark:text-light-100 pb-2 last-of-type:pb-0 cursor-pointer'>
                <input
                    className='relative h-4 w-4 mr-3 appearance-none bg-neutral-200 rounded-sm
                    hover:border hover:border-primary-200 focus:outline-none
                    checked:bg-primary-200
                    checked:
                    cursor-pointer'
                    type="checkbox"
                    name={filter}
                    checked={checked}
                    onChange={handleChange}
                />
                {firstLetterToUpper(filter)}
            </label>
        )
    })

    if (!modalStatus) return null;

    return (
            <div className='absolute top-16 left--14 bg-light-100 dark:bg-dark-200 w-48 flex flex-col items-start p-6 rounded-lg shadow-4xl'>
                {renderedFilters}
            </div>
    )
}

export default FilterModal