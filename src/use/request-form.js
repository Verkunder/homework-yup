import * as yup from 'yup'
import {useField, useForm} from "vee-validate";

export function useRequestForm(fn) {
    const {handleSubmit, isSubmitting} = useForm()
    const {value: password, errorMessage: pError, handleBlur: pBlur} = useField(
        'password',
        yup
            .string()
            .trim()
            .when('password', () => {
                if (newPassword.value || password.value || confirmPassword.value) return yup.string()
                    .required('Это поле обязательно')
                    .min(8, 'Минимальное количество символов 8')
                    .matches(/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, 'Password can only contain Latin letters.')
                    .test('confirmPassword', 'Пароли не совпадают', confirmP => newPassword.value === password.value && password.value === confirmPassword.value)
            })
    )
    const {value: newPassword, errorMessage: nError, handleBlur: nBlur} = useField(
        'newPassword',
        yup
            .string()
            .trim()
            .when('password', () => {
                if (newPassword.value || password.value || confirmPassword.value) return yup.string()
                    .required('Это поле обязательно')
                    .min(8, 'Минимальное количество символов 8')
                    .matches(/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, 'Password can only contain Latin letters.')
                    .test('confirmPassword', 'Пароли не совпадают', confirmP => newPassword.value === password.value && password.value === confirmPassword.value)
            })
    )

    const {value: confirmPassword, errorMessage: confirmError, handleBlur: confirmBlur} = useField(
        'confirmPassword',
        yup
            .string()
            .trim()
            .when('newPassword', () => {
                if (newPassword.value || password.value || confirmPassword.value) return yup.string()
                    .required('Это поле обязательно')
                    .min(8, 'Минимальное количество символов 8')
                    .matches(/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, 'Пароль должен содержать 1 большу 1 маленьку букву и цифры')
                    .test('confirmPassword1', 'Пароли не совпадают', confirmP => newPassword.value === password.value && password.value === confirmPassword.value)
            })
    )

    const {value: checked, errorMessage: cError, handleBlur: cBlur} = useField(
        'checkbox',
        yup
            .boolean()
            .required('Это обязательно')
    )
    const {value: role, errorMessage: roleError, handleBlur: roleBlur} = useField(
        'role',
        yup
            .string()
            .required('Это обязательно')
    )
    const {value: prof, errorMessage: profError, handleBlur: profBlur} = useField(
        'prof',
        yup
            .string()
            .required('Это обязательно')
            .test('prof', 'Менеджер не валидное значение!', testManager => role.value === 'media' && prof.value === 'manager' ? false : true)
    )

    const onSybmit = handleSubmit( async values => {
        try {
            console.log(values)
        } catch (e){
            console.log(e)
        }
    })
    return {
        confirmPassword,
        confirmError,
        confirmBlur,
        password,
        pError,
        pBlur,
        onSybmit,
        isSubmitting,
        checked,
        cError,
        cBlur,
        newPassword,
        nError,
        nBlur,
        role,
        roleError,
        roleBlur,
        prof,
        profError,
        profBlur
    }
}