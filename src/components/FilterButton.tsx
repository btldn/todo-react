import styles from './FilterButton.module.css'

type FilterButtonProps = {
    name: string;
    isPressed: boolean;
    setFilter: (name: string) => void;
};

function FilterButton(props: FilterButtonProps) {
    return (
        <>
            <button
                type="button"
                className={
                    props.isPressed
                        ? styles.todo__headerFilterBtn__active
                        : styles.todo__headerFilterBtn
                }
                aria-pressed={props.isPressed}
                onClick={() => props.setFilter(props.name)}>
                {props.name}
            </button>
        </>
    )
}

export default FilterButton


