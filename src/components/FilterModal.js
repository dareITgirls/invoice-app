import {useDispatch, useSelector} from "react-redux";
import {closeFilterModal, toggleFilter} from "../store/filterModalSlice";

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
                {filter}
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