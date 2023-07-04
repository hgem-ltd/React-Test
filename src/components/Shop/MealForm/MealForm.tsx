import { useRef, useState } from 'react'
import Input from '../../shared/form/Input'
import classes from './MealForm.module.scss'

type MealProps = {
    mealId: string,
    onAdd: Function,
}

const MealForm: React.FC<MealProps> = (props) => {
    const [errors, setErrors] = useState(false);

    const inputRef = useRef<HTMLInputElement>(null);

    const submitHandler = (
        e: React.ChangeEvent<HTMLFormElement>
    ) => {
        e.preventDefault();
        const quantity: string = (inputRef.current && inputRef.current.value !== undefined)? inputRef.current.value : ''
        const quantityNumber = parseInt(quantity);

        if ((quantity && quantity.trim().length === 0) || (quantityNumber && quantityNumber < 1)) {
            setErrors(true);
            return
        }

        props.onAdd(quantityNumber);
    }

    return (
        <form className={classes['meal-form']} onSubmit={submitHandler}>
            <Input label='Quantity' ref={inputRef} input={{
                type: 'number',
                id: `quantity_${props.mealId}`,
                min: '1',
                defaultValue: '1',
            }}/>
            <button className={classes['meal-form__button']}>Add</button>
            {errors && <p>Quantity value is invalid</p>}
       </form>
    )
}

export default MealForm;