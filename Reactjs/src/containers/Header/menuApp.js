export const adminMenu = [
    { //Quan ly nguoi dung
        //name  là menu cha  lớp 0
        name: 'menu.admin.manage-user', menus: [


            {
                //name này là con cả lớp 1
                name: 'menu.admin.crud',link: '/system/user-manage'
                
            },

            {
                //name này là con cả lớp 1
                name: 'menu.admin.crud-redux',link: '/system/user-redux'
                
            },

            {
                //name này là con cả lớp 1
                name: 'menu.admin.manage-doctor', link:'/system/user-doctor'
                //submenu là menu con hai lớp2
                // subMenus: [
                //     { name: 'menu.system.system-administrator.user-manage' },
                //     { name: 'menu.system.system-administrator.user-redux', link: '/system/user-redux' },
                //        ]
            },

            {
                //name này là con cả lớp 1
                name: 'menu.admin.manage-admin',link: '/system/user-admin'
                
            },
           


                ]
    },

    { // quan ly phong kham
        //name  là menu cha  lớp 0
        name: 'menu.admin.clinic', menus: [


            {
                //name này là con cả lớp 1
                name: 'menu.admin.manage-clinic',link: '/system/manage-linic'
                
            },



                ]
    },

    { // quản lý Chuyên Khoa
        //name  là menu cha  lớp 0
        name: 'menu.admin.speacialty', menus: [


            {
                //name này là con cả lớp 1
                name: 'menu.admin.manage-speacialty',link: '/system/manage-speacialty'
                
            },



                ]
    },
];



