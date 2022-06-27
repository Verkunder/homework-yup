import * as yup from 'yup'
import {useField, useForm} from "vee-validate";

export function useRequestForm(fn) {
    const {handleSubmit, isSubmitting} = useForm()
    const {value: password, errorMessage: pError, handleBlur: pBlur} = useField(
        'password',
        yup
            .string()
            .trim()
            .required('Это поле обязательное')
            .min(6,'* 6 Минимальное количество символов')
    )
    const onSybmit = handleSubmit( async values => {
        try {
            console.log(values)
        } catch (e){
            console.log(e)
        }
    })
    return {
        password,
        pError,
        pBlur,
        onSybmit,
        isSubmitting
    }
}