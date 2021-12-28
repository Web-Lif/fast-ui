import { ReactNode, Dispatch, createContext as reactCreateContext, useReducer } from "react";

export interface Data {
    id: string
    $state: 'create' | 'update' | 'normal' | 'delete'
}

type Action<T extends Data> =
    | { type: 'setData', payload: T[]}

type State<T extends Data> = {
    data: T[]
}

function reducer<T extends Data>(state: State<T>, action: Action<T>): State<T> {
    if (action.type === 'setData') {
        return {
            ...state,
            data: action.payload
        }
    }
    return state
}

export function createContext<T extends Data>() {
    return reactCreateContext<{
        state: State<T>,
        dispatch: Dispatch<Action<T>>
      }>(undefined as any) 
}

interface DataSetParam<T extends Data> {
    data: T[]
    children: ReactNode
}

export function useDataSet<T extends Data>({
    data = [],
}: DataSetParam<T>) {

    const [state, dispatch] = useReducer(reducer, {
        data,
    })

    return {
        state,
        dispatch
    }
}
