import {fetchUser} from "../utils/fetchLocalSotorageData";
const userInfo= fetchUser()
export const initialState={
    user: userInfo,
}