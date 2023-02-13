import axios from "axios";

const URL = 'https://nbe-bank-e9db8-default-rtdb.firebaseio.com/';
const SignUpURL = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAan8r0h6byFS4-v69CXI4pSY365QwuK6k';
const SignInURL = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAan8r0h6byFS4-v69CXI4pSY365QwuK6k';

export async function SignUp(user){
    const response = await axios.post(SignUpURL, user);
    return response.data;
}


export async function SignIn(user){
    const response = await axios.post(SignInURL, user);
    return response.data;
}

export async function Users(user){
    const res = await axios.post(URL+`Users/${user.phone}.json`, user);
    return res.data;
}
export async function updateUser(phone, data){
    const res = await axios.post(URL+`Users/${phone}.json`, data);
    return res.data;
}

export async function getUsersByMob(mob){
    const res = await axios.get(URL+`Users/${mob}.json`);
    return res.data
}

export async function Add_Benf(uid, user){
    const res = await axios.post(URL+`Benf/${uid}.json`, user);
    return res.data
}

export async function get_Benf(uid){
    const res = await axios.get(URL+`Benf/${uid}.json`);
    if(res.data){

        var benf=[]
        for(const key in res.data){
            var x = {
                id: key,
                phone: res.data[key].phoneNo,
                name: res.data[key].firstName+' '+ res.data[key].lastName,
                accountNo: res.data[key].accountNo,
                branch : res.data[key].branch,
                image: res.data[key].image,
                email: res.data[key].email,
            }
            benf.push(x);
        }
        console.log(benf);
        console.log(res.data);
        return benf;
    }
    else return [];
}

export async function Add_History(id, user){
    const res = await axios.post(URL+`History/${id}.json`, user);
    return res.data
}

export async function get_history(id){
    const res = await axios.get(URL+`History/${id}.json`);
    if(res.data){

        var benf=[]
        for(const key in res.data){
            var x = {
                id: key,
                title: res.data[key].reason,
                date: res.data[key].date.split('T')[0],
                amount: res.data[key].amount,
            }
            benf.push(x);
        }
        console.log(benf);
        console.log(res.data);
        return benf;
    }
    else return [];
}


