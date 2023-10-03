import doctorServices from "../services/doctorServices";


let getTopDoctorHome = async(req,res)=>{
    let limit =req.query.limit;

    if(!limit) limit=10;
    try {
        let response = await doctorServices.getTopDoctorHome(+limit);
        return res.status(200).json(response);
        
    } catch (e) {
        console.log(e);
        return res.status(200).json({
            errcode:-1,
            message:'Error from sever....'

        })
    }


}
let getAllDoctors= async(req,res)=>{
    try {
        let doctors= await doctorServices.getAllDoctors();
        return res.status(200).json(doctors)

        
    } catch (e) {
        console.log(e);
        return res.status(200).json({
            errcode:-1,
            errMessage:"Error from sever..."
        })
        
    }

}
        let postInfoDoctor= async(req,res)=>{
        try {
        let response =await doctorServices.saveDetailInforDoctor(req.body);
        return res.status(200).json(response)
            
        } catch (e) {
            console.log(e);
            return res.status(200).json({
                errcode:-1,
                errMessage:"Error from sever..."
            })
            
        }
        }

module.exports={
    getTopDoctorHome:getTopDoctorHome,
    getAllDoctors:getAllDoctors,
    postInfoDoctor:postInfoDoctor
}