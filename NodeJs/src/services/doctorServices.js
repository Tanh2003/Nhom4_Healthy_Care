
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

           
            if(!InputData.doctorId||!InputData.contentHTML||!InputData.contentMarkdown||!InputData.action){
                resolve({
                    errcode:1,
                    errMessage:"missing parameter",InputData
                    
                })
            }else{
                if(InputData.action==='CREATE'){
                    await db.Markdown.create({
                        contentHTML:InputData.contentHTML,
                        contentMarkdown:InputData.contentMarkdown,
                        description:InputData.description,
                        doctorId:InputData.doctorId,
                       
                    })

                }else if(InputData.action==='EDIT'){

                    let doctorMarkdown =await db.Markdown.findOne({
                        where:{doctorId:InputData.doctorId},
                        raw:false
                    })
                    if(doctorMarkdown){
                        doctorMarkdown.contentHTML=InputData.contentHTML;
                        doctorMarkdown.contentMarkdown=InputData.contentMarkdown;
                        doctorMarkdown.description=InputData.description;
                        
                        
                        await doctorMarkdown.save()


                    }

                }

                
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
let getDetailDoctorById=(inputId)=>{
    return new Promise(async(resolve,reject)=>{
        try {
            if(!inputId){
                resolve({
                    errcode:1,
                    errMessage:"Missing required parameter!"
                })
            }else{
                let data= await db.User.findOne({
                    where:{
                        id:inputId
                    }, attributes:{
                        exclude:['password']
                    },
                    include:[
                        {model:db.Markdown,attributes:['description','contentHTML','contentMarkdown']},
                        {model:db.Allcode,as:'positionData',attributes:['valueEn','valueVi']},
                       ],
                       raw:false,
                       nest:true
                })
                // code nayf convert anh de sai

                if(data && data.image){
                    data.image=Buffer.from(data.image,'base64').toString('binary');

                }
                if(!data){
                    data={};
                }
                resolve({
                    errcode:0,
                    data:data
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
    saveDetailInforDoctor:saveDetailInforDoctor,
    getDetailDoctorById:getDetailDoctorById
}