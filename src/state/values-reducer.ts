
export type ValuesType = {
    startValue: number,
    maxValue: number,
    counter: number,
    error: string | null,
    editMode: boolean,
}

type ActionsType = setValuesTypeAC | setStartTypeAC | setMaxTypeAC
    | incTypeAC | resetTypeAC | setErrorTypeAC

type setValuesTypeAC = {
    type: 'SET-VALUES'
    editMode: boolean
    startValue: number
    maxValue: number
}
type setStartTypeAC = {
    type: 'SET-START'
    startValue: number
}

type setMaxTypeAC = {
    type: 'SET-MAX'
    maxValue: number
}

type incTypeAC = {
    type: 'INC'
}
type resetTypeAC = {
    type: 'RESET'
}

type setErrorTypeAC = {
    type: 'SET-ERROR'
    value: string | null
}

const initialState: ValuesType = {
    startValue: 0,
    maxValue: 5,
    counter: 0,
    error: null,
    editMode: false,
}

export const valuesReducer = (state: ValuesType = initialState, action: ActionsType): ValuesType => {
    switch (action.type) {
        case "SET-VALUES": {
            return {...state, editMode: !action.editMode, counter: action.startValue}
        }
        case "SET-START": {
            return {...state, editMode: true, startValue: action.startValue}
        }
        case "SET-MAX": {
            return {...state, editMode: true, maxValue: action.maxValue}
        }
        case "INC": {
           return {...state, counter: state.counter + 1}
        }
        case "RESET": {
           return {...state, counter: state.startValue}
        }
        case "SET-ERROR": {
           return {...state, error: action.value}
        }
        default:
            return state
    }
}

export const setValuesAC = (editMode: boolean, startValue: number, maxValue: number): setValuesTypeAC => {
    return {type: 'SET-VALUES', editMode, startValue, maxValue} as const
}

export const setStartAC = (startValue: number): setStartTypeAC => {
    return {type: 'SET-START', startValue} as const
}

export const setMaxAC = (maxValue: number): setMaxTypeAC => {
    return {type: 'SET-MAX', maxValue} as const
}

export const incAC = (): incTypeAC => {
    return {type: 'INC'} as const
}
export const resetAC = (): resetTypeAC => {
    return {type: 'RESET'} as const
}

export const setErrorAC = (value: string|null): setErrorTypeAC => {
    return {type: 'SET-ERROR', value} as const
}




