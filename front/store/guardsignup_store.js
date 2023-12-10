import {atom} from "recoil"
export const GuardSignupStore = atom({
    key:"SignupState",
    default:{
        phone_number:"",
        password1:"",
        password2:"",
        userPhoneNumber:"",
        fullname:"",
        birth:"",
        gender:"",
        height:"",
        weight:"",
        systolic:""
    }
})