
import db from "../models/index";

let getTopDoctorHome=(limitInput)=>{
    return new Promise(async(resolve,reject)=>{
        try {
            let users=await db.User.findAll({
                limit:limitInput,
                where:{roleId:'R2'},
                order:[["createdAt","DESC"]],
                attributes:{
                    exclude:['password']
                },
                include:[
                    {model:db.Allcode,as:'positionData',attributes:['valueEn','valueVi']},
                    {model:db.Allcode,as:'genderData',attributes:['valueEn','valueVi']},
                ],
                raw:true,
                nest: true,
            })

            resolve({
                errcode:0,
                data:users


            })
            
        } catch (e) {
            reject(e);
            
        }

    })
}
let getAllDoctors=()=>{
    return new Promise( async(resolve,reject)=>{
        try {
            let doctors=await db.User.findAll({
                where:{roleId:'R2'},
                attributes:{
                    exclude:['password','image']
                },
            })


            resolve({
                errcode:0,
                data:doctors
            })
        } catch (e) {
            reject(e);
            
        }
    })
}
let saveDetailInforDoctor=(InputData)=>{
    return new Promise( async(resolve,reject)=>{
        try {

           
            if(!InputData.doctorId||!InputData.contentHTML||!InputData.contentMarkdown){
                resolve({
                    errcode:1,
                    errMessage:"missing parameter",InputData
                    
                })
            }else{

                await db.Markdown.create({
                    contentHTML:InputData.contentHTML,
                    contentMarkdown:InputData.contentMarkdown,
                    description:InputData.description,
                    doctorId:InputData.doctorId,
                   
                })
                resolve({
                    errcode:0,
                    errMessage:"Save infor doctor succeed!"
                    
                })

            }
           

           
        } catch (e) {
            reject(e);
            
        }
    })

}
module.exports={
    getTopDoctorHome:getTopDoctorHome,
    getAllDoctors:getAllDoctors,
    saveDetailInforDoctor:saveDetailInforDoctor
}