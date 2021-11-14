import {SingleValue} from "react-select";

const ADD_OCCUPATION = "ADD_OCCUPATION"
const ADD_TIMESLOT = "ADD_TIMESLOT"
const ADD_REASON = "ADD_REASON"
const ADD_DATE = "ADD_DATE"
const ADD_DOCTOR = "ADD_DOCTOR"
const ADD_NOTE = "ADD_NOTE"

const initialState = {
    selectedDoctorId: "",
    label: "",
    time: "",
    reason: "",
    date: null,
    doctor: "",
    note: "",
}

export type InitialStateType = {
    selectedDoctorId: string
    label: string
    time: string
    reason: string
    date: Date | null,
    doctor: string
    note: string
}

type ActionType =
    AddOccupationType
    | AddTimeslotType
    | AddReasonType
    | AddDateType
    | AddDoctorType
    | AddNoteType

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
                reason: action.inputValue
            }
        case ADD_DATE:
            return {
                ...state,
                date: action.date
            }
        case ADD_DOCTOR:
            return {
                ...state,
                doctor: action.label,
                selectedDoctorId: action.selectedDoctorId
            }
        case ADD_NOTE:
            return {
                ...state,
                note: action.inputValue
            }
        default:
            return state
    }
}

export type AddOccupationType = ReturnType<typeof addOccupationAC>
export type AddTimeslotType = ReturnType<typeof addTimeslotAC>
export type AddReasonType = ReturnType<typeof addReasonAC>
export type AddDateType = ReturnType<typeof addDateAC>
export type AddDoctorType = ReturnType<typeof addDoctorAC>
export type AddNoteType = ReturnType<typeof addNoteAC>

export const addOccupationAC = (selected: SingleValue<{ value: string; label: string; }>) => ({
    type: "ADD_OCCUPATION",
    label: selected!.label
} as const);
export const addDoctorAC = (selected: SingleValue<{ value: string; label: string; }>) => ({
    type: "ADD_DOCTOR",
    label: selected!.label,
    selectedDoctorId: selected!.value
} as const);
export const addTimeslotAC = (time: string) => ({type: "ADD_TIMESLOT", time} as const);
export const addReasonAC = (inputValue: string) => ({type: "ADD_REASON", inputValue} as const);
export const addNoteAC = (inputValue: string) => ({type: "ADD_NOTE", inputValue} as const);
export const addDateAC = (date: Date) => ({type: "ADD_DATE", date} as const);