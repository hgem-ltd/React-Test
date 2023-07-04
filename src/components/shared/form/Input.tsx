import { forwardRef } from "react";

type InputProps = {
    label: string,
    input: {
        id: string,
        type: string,
        min?: string,
        defaultValue?: string,
        placeHolder?: string,
    }
    ref?: HTMLInputElement,
}

// const Input: React.FC<InputProps> = (props) => {
const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
    return (
        <div className='input-container'>
            <label htmlFor={props.input.id}>{props.label}</label>
            <input ref={ref} {...props.input} />
        </div>
    )
});

export default Input;