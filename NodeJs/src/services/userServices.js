import bcryptjs from 'bcryptjs';
import db from "../models/index";


const salt = bcryptjs.genSaltSync(10);

let hashUserPassword =(password)=>{
    return new Promise(async(resolve,reject)=>{
      try{
        let hashPassword = await bcryptjs.hashSync(password,salt);
        resolve(hashPassword);
        
      }catch(e){
        reject(e);
      
      }
    });
    }

let handleUserLogin =(email,password)=>{
    return new Promise(async(resolve,reject)=>{
        try {
            let userData={};
            let isExist=await checkUserEmail(email);
            if(isExist){
                //user allready exist
               
                let user =await db.User.findOne(
                    {
                        attributes:['email','roleId','password'],//  chỉ hiện email, roleid, pasword
                        where:{email:email},
                        raw:true,// xóa passwword
                    }
                );
                if(user){
                     //compare password
                     let check =await bcrypt.compareSync(password,user.password);
                     if(check){
                        userData.errcode=0,
                        userData.errMessage="oke";
                        delete user.password;// xóa passwword khỏi api khỏi lo bị hack
                        userData.user=user;

                     }else{
                        userData.errcode=3;
                        userData.errMessage="Wrong password";
                     }
                    

                }else{
                    userData.errcode=2;
                    userData.errMessage="User's not found"
                }

            }
            else{
                //return error
                userData.errcode=1;
                userData.errMessage="your's Email isn't exist your system .plz try other email ! ";
            
            }
            resolve(userData)
        } catch (e) {
            reject(e)
        }
    })
 
}


let checkUserEmail=(email)=>{
    return new Promise(async(resolve,reject)=>{
        try{
            let user =await db.User.findOne({
               
                where: {email:email},
               
            });
            if(user){
                resolve(true);
            }else{
                resolve(false);
            }

        }catch(e){
            reject(e);

        }
    })
}

//userId là tham số truyền vào ví dụ id =1 hay  la 2 3 ......

let getAllUsers =(userId)=>{
    return new Promise(async(resolve,reject)=>{
        try {
            let users='';
            if(userId=='ALL'){
                users=db.User.findAll({
                    // ẩn mật khẩu
                    attributes:{
                        exclude:['password']
                    }

                })

            }
            if(userId && userId !== 'ALL')
            {
                users = await db.User.findOne({
                    where:{id:userId},//  userId laf cais tham so truyen vao
                     // ẩn mật khẩu
                     attributes:{
                        exclude:['password']
                    }
                });
               
            }
            resolve(users)
        } catch (e) {
            reject(e);
        }
    })

}

let CreateNewUser=(data)=>{
    return new Promise(async(resolve,reject)=>{
        try {
            // check email is exist??
            let check= await checkUserEmail(data.email);
            if(check==true){
                resolve({
                    errcode:1,
                    errMessage:"your email is already in used,plz try another email!"
                })
            }else{
                let hashPasswordFromBcrypt=await hashUserPassword(data.password);
                await db.User.create({
                    email:data.email,
                    password:hashPasswordFromBcrypt,
                    firstName: data.firstName,
                    lastName: data.lastName,
                    address:data.address,
                    phoneNumber:data.phoneNumber,
                    gender: data.gender=='1'?true:false, 
                    roleId: data.roleId,
                    
                });
    
                resolve({
                    errcode:0,
                    message:'OK'
                })
            }
            
           
            
        } catch (e) 
        {
            reject(e);
            
        }
    })
}
let deleteUser =(userId)=>{
    return new Promise(async(resolve,reject)=>{
        let user =await db.User.findOne({
            where:{id:userId}
        })
        if(!user){
            resolve({
                errcode:2,
                errMessage:"the user isn't exist !"
            })
        }
        await db.User.destroy({
            where:{id:userId}
        });
        resolve({
            errcode:0,
            errMessage:"the user is deleted !"

        });
    })
}
let updateUserData=(data)=>{
    return new Promise(async(resolve,reject)=>{
        try {

            if(!data.id){
                resolve({
                    errcode:2,
                    errMessage:"Missing required parameter"
                })
            }
            let user = await db.User.findOne({
                where:{id:data.id},
                raw:false
              })
              if(user){
                user.firstName=data.firstName;
                user.lastName=data.lastName;
                user.address=data.address;
                await user.save();
                // await db.User.save({
                //     fistName:data.firstName,
                //     lastName:data.lastName,
                //     address:data.address,

                // }); //  muốn không bị lỗi TypeError: user.save is not a function thì vào config.json đổi raw: true --> false  là đc
                resolve({
                    errcode:0,
                    errMessage:"update the user succeeds !"
                });
              }
              else{
                resolve({
                    errcode:1,
                    errMessage:"User's not found !"
                });         
              }
        } catch (e) {
            reject(e)
            
        }
    })
}
module.exports={
    handleUserLogin : handleUserLogin,
    getAllUsers:getAllUsers,
    CreateNewUser:CreateNewUser,
    deleteUser:deleteUser,
    updateUserData:updateUserData
}