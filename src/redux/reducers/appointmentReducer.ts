import {SingleValue} from "react-select";

const ADD_OCCUPATION = "ADD_OCCUPATION"
const ADD_TIMESLOT = "ADD_TIMESLOT"
const ADD_REASON = "ADD_REASON"

const initialState = {
    value: "",
    label: "",
    time: "",
    reason: ""
}

export type InitialStateType = typeof initialState

type ActionType =
    AddOccupationType
    | AddTimeslotType
    | AddReasonType

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
        case ADD_REASON:
            return {
                ...state,
                reason: action.reason
            }
        default:
            return state
    }
}

export type AddOccupationType = ReturnType<typeof addOccupationAC>
export type AddTimeslotType = ReturnType<typeof addTimeslotAC>
export type AddReasonType = ReturnType<typeof addReasonAC>

export const addOccupationAC = (selected: SingleValue<{ value: string; label: string; }>) => ({
    type: "ADD_OCCUPATION",
    label: selected!.label
} as const);

export const addTimeslotAC = (time: string) => ({type: "ADD_TIMESLOT", time} as const);
export const addReasonAC = (reason: string) => ({type: "ADD_REASON", reason} as const);