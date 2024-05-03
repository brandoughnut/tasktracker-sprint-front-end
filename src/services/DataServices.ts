import { IMember, IBoard, IUserInfo, IToken, IUserData, IUserInfoLogin } from "@/interfaces/interfaces";
import UserExampleData from '@/data/UserDataExample.json'
import BoardDataExample from '@/data/BoardDataExample.json'


const url = "https://aymotasktracker.azurewebsites.net";

let userData: IUserData



export const createAccount = async (createdUser: IUserInfo)=> {

    //we're using this fetch to make a POST Request
    //We have to st the method to POS
    //we set the content type to application/ json to specify our json data format
    const res = await fetch(url + '/User/CreateUser', {
        method: "POST",
        headers: {
            'Content-Type' : "application/json"
        },
        body:JSON.stringify(createdUser)
    });
    //we need to check if our post was succesful

    if(!res.ok){
        const message = "An error has occured" + res.status;
        throw new Error(message);
    }

    const data = await res.json();
    console.log(data);
}

export const login = async (loginUser: IUserInfoLogin) => {
    const res = await fetch(url + "/User/Login", {
        method: "POST",
        headers: {
            'Content-Type': "application/json"
        },
        body:JSON.stringify(loginUser)
    })

    if(!res.ok){
        const message = "An Error has occured " + res.status;
        throw new Error(message);
    }

    const data:IToken = await res.json();
    return data;
}

export const getLoggedInUserData = async (username: string) => {
    const res = await fetch(url + "/User/GetUserByUsername/" + username);
    const data = await res.json();
    userData = data;
}

export const getExampleData = () => {
    return UserExampleData;
}

export const getExampleBoardData = () => {
    return BoardDataExample;
}


export const loggedinData = () => {
    return userData;
}

//This funtion helps to see if our user is logged in
export const checkToken = () => {
    let result = false;

    let lsData = localStorage.getItem("Token");

    if(lsData != null){
        result = true;
    }

    return result;


}

// Dashboard Fetche

// export const getBogItemsByUserId = async (userId: number) => {
//     const res = await fetch(url + '/Blog/GetItemsByUserId/' + userId);
//     const data = await res.json();
//     return data;
// }

// export const addBlogItem = async (Blog:IBlogItems) => {
//     const res = await fetch(url + '/Blog/AddBlogItem', {
//         method: "POST",
//         headers:{
//             'Content-Type' : "application/json"
//         },
//         body: JSON.stringify(Blog)
//     });

//     if(!res.ok){
//         const message = "An Error has occurred " + res.status;
//         throw new Error(message);
//     }
    
//     //Returns a boolean value depending on whether or not we added a blog item succesfully
//     const data = await res.json();
//     return data;
// }

// export const updateBlogItem = async (Blog:IBlogItems) => {
//     const res = await fetch(url + '/Blog/UpdateBlogItem', {
//         method: "PUT",
//         headers:{
//             'Content-Type' : "application/json"
//         },
//         body: JSON.stringify(Blog)
//     });

//     if(!res.ok){
//         const message = "An Error has occurred " + res.status;
//         throw new Error(message);
//     }
    
//     //Returns a boolean value depending on whether or not we added a blog item succesfully
//     const data = await res.json();
//     return data;
// }