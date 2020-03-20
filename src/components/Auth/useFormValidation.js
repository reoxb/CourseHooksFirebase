import { useState, useEffect } from 'react'

export default function useFormValidation(initialState, validate) {

    const [values, setValues] = useState(initialState)
    const [errors, setErrors] = useState({})
    const [isSubmitting , setSubmitting] = useState(false)

    useEffect(() => {
        if(isSubmitting){
            const noErrors = Object.keys(errors).length === 0
            if(noErrors){
                console.log('authenticated', values)
                setSubmitting(false)
            } else {
                setSubmitting(false)
            }
        }

    }, [errors])

    const handleChange = (event) => {
        event.persist()

        setValues(
            previousValues => (
                {
                ...previousValues,
                [event.target.name] : event.target.value

                }
            )
        )
    }

    const handleBlur = () => {
        const validationErros = validate(values)
        setErrors(validationErros)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const validationErros = validate(values)
        setErrors(validationErros)
        setSubmitting(true)
    }

    return {
        handleSubmit,
        handleBlur,
        handleChange,
        values,
        errors,
        isSubmitting
    }
    
}