import { FormInputLabel, Group, StyledInput } from './form-input.styles';

function FormInput({label, ...inputProps}){

    return (
        <Group>
            <StyledInput {...inputProps} />
            {   label && (
                        <FormInputLabel shrink={inputProps.value.length}>
                            {label}
                        </FormInputLabel>
                    )
            }
        </Group>
    )
}

export default FormInput;