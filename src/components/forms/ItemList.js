import { useErrors } from '../../hooks/useErrors';
import { useListItems } from '../../hooks/useListItems'
import { Button } from '../../UI/Button';
import { ReactComponent as IconPlus } from '../../assets/icon-plus.svg';

export const ItemList = () => {
    const { classesMainError, classesItemError } = useErrors();
    const { content, handleAddingNewItem } = useListItems();

    return (
        <section className="pt-15 pb-17 md:pt-4 md:pb-0 lg:pt-[26px] lg:mb-[-3px]">
            <h2 className="text-neutral-300 text-md/3 pb-1 md:pb-2 lg:pb-[6px]">Item List</h2>
            <ul>  
                {content}
            </ul>
            <Button styles="bg-neutral-100 dark:bg-dark-100 hover:bg-neutral-200 text-neutral-300 dark:text-neutral-200 w-full flex items-center justify-center mt-[11px] md:mt-[-10px] mb-6
            md:mb-[80px]  lg:mb-6" type="button" title="Add New Item" onClick={handleAddingNewItem} >
                <IconPlus className="scale-75 mb-[2px] mr-1"/>
            </Button>
            <p className={classesMainError}>All fields must be added</p>
            <p className={classesItemError}>An item must be added</p>
        </section>
    )
}