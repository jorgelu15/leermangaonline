import { useState } from 'react';

export const useForm = (initialState) => {
    const [state, setState] = useState(initialState);

    const onChangeGeneral = (event, field) => {
        setState({
            ...state,
            [field]: event.target.value
        });
    }

    const resetForm = () => {
        setState(initialState);
    }

    return {
        ...state,
        form: state,
        onChangeGeneral,
        resetForm
    }
}
