import axios from "../axios"

const handleLoginApi=(userEmail,userPassword)=>{
return axios.post('/api/login',{email: userEmail,password:userPassword});
}

const getAllUser =(inputId)=>{
    //teamplate String
    return axios.get(`/api/get-all-users?id=${inputId}`)
}
const createNewUseService=(data)=>{
    return axios.post('/api/create-new-user',data)
}
const deleteUserService=(userId)=>{
    //return axios.delete('/api/delete-user',{id:userId})
    return axios.delete('/api/delete-user',{
        data:{
            id:userId
        }
    })
}
const editUserService=(inputData)=>{
    return axios.put('/api/edit-user',inputData)
       
}
const getAllCodeService=(inputType)=>{
    return axios.get(`/api/allcode?type=${inputType}`)
}

const getTopDoctorHomeService=(limit)=>{
    return axios.get(`/api/top-doctor-home?limit=${limit}`)
}

const getAllDoctor=()=>{
    return axios.get('/api/get-all-doctors')
}

const saveDetailDoctorService=(data)=>{
    return axios.post('/api/save-infor-doctors',data)
}


export
{
    handleLoginApi,
    getAllUser,
    createNewUseService,
    deleteUserService,
    editUserService,
    getAllCodeService,
    getTopDoctorHomeService,
    getAllDoctor,
    saveDetailDoctorService
}