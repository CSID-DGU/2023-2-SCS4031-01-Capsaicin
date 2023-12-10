import {atom} from "recoil"
export const SignupStore = atom({
    key:"SignupState",
    default:{
        phone_number:"",
        password1:"",
        password2:"",
        fullname:"",
        birth:"",
        gender:"",
        height:"",
        weight:"",
        systolic:"",
        center:""
    }
})