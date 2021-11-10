import {SingleValue} from "react-select";

const ADD_OCCUPATION = "ADD_OCCUPATION"
const ADD_TIMESLOT = "ADD_TIMESLOT"

const initialState = {
    value: "",
    label: "",
    time: ""
}

export type InitialStateType = typeof initialState

type ActionType =
    AddOccupationType
    | AddTimeslotType

export default function appointmentReducer(state: InitialStateType = initialState, action: ActionType): InitialStateType {
    switch (action.type) {
        case ADD_OCCUPATION:
            return {
                ...state,
                label: action.label
            }
        case ADD_TIMESLOT:
            return {
                ...state,
                time: action.time
            }
        default:
            return state
    }
}

export type AddOccupationType = ReturnType<typeof addOccupationAC>
export type AddTimeslotType = ReturnType<typeof addTimeslotAC>

export const addOccupationAC = (selected: SingleValue<{ value: string; label: string; }>) => ({
    type: "ADD_OCCUPATION",
    label: selected!.label
} as const);

export const addTimeslotAC = (time: string) => ({type: "ADD_TIMESLOT", time} as const)