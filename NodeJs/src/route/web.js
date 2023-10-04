import express from "express";
import homeController from "../controllers/homeController";
import userController from "../controllers/userController";
import doctorController from "../controllers/doctorController";
let router= express.Router();

let initWebRouters =(app) => {
    router.get('/',homeController.getHomePage);// gọi file controller và 
    router.get('/about',homeController.getAboutPage);
    router.get('/crud',homeController.getCRUD);

    router.post('/post-crud',homeController.postCRUD);// link acction

    router.get('/get-crud',homeController.displayGetCRUD);
    router.get('/edit-crud',homeController.getEditCRUD);
    router.post('/put-crud',homeController.putCRUD);
    router.get('/delete-crud',homeController.deleteCRUD);


    router.post('/api/login',userController.handleLogin);
    router.get('/api/get-all-users',userController.handleGetAllUser);
    router.post('/api/create-new-user',userController.handleCreateNewUser);
    router.put('/api/edit-user',userController.handleEditUser);
    router.delete('/api/delete-user',userController.handleDeleteUser);
    router.get('/api/allcode',userController.getAllCode);

    // api cuar doctor

    router.get('/api/top-doctor-home',doctorController.getTopDoctorHome);
    router.get('/api/get-all-doctors',doctorController.getAllDoctors);
    router.post('/api/save-infor-doctors',doctorController.postInfoDoctor);
    router.get('/api/get-detail-doctor-by-id',doctorController.getDetailDoctorById);


















    // thêm  trang mới  khi /tanh
    router.get('/tanh',(req,res)=>{
        return res.send('Hello world with NTanh');

    });

return app.use("/",router);
}   
module.exports=initWebRouters;
