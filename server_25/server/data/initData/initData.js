const tableTemplate=require('./tableTemplate')
const uuid = require("uuid");

//==============================
const shopInit={
    shopName:"shopa",
    password:"shopa",
    active:true,
    code:uuid.v4(),
    dateIn: new Date().toISOString().substring(0,10),
    
    ownerName:"ownera",
    ownerPassword:"ownera",
    ownerActive:true,
    ownerCode:uuid.v4(),
    
    ownerEmail:'a@mail.com'
}
//-----------------------------
const userInit={
    id:1,
    username:"usera",
    password:"usera",
    active:true,
    code:uuid.v4(),
    userLevel:"admin",
    dateIn: new Date().toISOString().substring(0,10),
    name:"usera",
    surname:"usera"
}

//--------------------------------------
const basicDataInit={
    id:1,
    title:["กำนัน","โก","คุณ","เจ๊","เจ็ก","ช่าง","นาง",
            "นางสาว","นาย","แปะ","ผู้ใหญ่","พี่","ร้าน","ลุง","สจ","สท","สส","อบต",
            "อา","อาจารย์","อี๊","เฮีย","บจก.",
          ],
    unit:["อัน","กระป๋อง","กิโลกรัม",
    "ขวด","ขีด","คู่","จุด","ชิ้น","ชุด","เซ็นติเมตร","ตัว","ตาราเซ็นติเมตร","ตารางเมตร","นิ้ว",
    "แผ่น","ฟุต","ม้วน","มัด","เมตร","ลำ","วง","เส้น",
    ],
    userLevel:["admin","staff","visitor"],
    active:["active","inactive"],
    urgency:["ด่วนมาก","ด่วน","ปกติ","ยกเลิก"],
    knowType:["cnc","เรือรดน้ำ","เรือฉีดยา","เรือเรดาห์","เครื่องยนต์"],
    
    jobType:[
        "ซ่อม.....","ซ่อมเรือรดน้ำ","ซ่อมเรือฉีดยา","ซ่อมเรือเรดาห์","ซ่อมเรือบรรทุก","ซ่อมปั๊มรดน้ำ","ซ่อมปั๊มฉีดยา","ซ่อมปั๊มสามสูบ",
        "ซ่อมปั๊มดันเรือ","ซ่อมปั๊มผสมยา","ซ่อมหลักฉีด,หัวฉีด","ซ่อมหัวรดน้ำ","ซ่อมกรรไกร","ซ่อมเครื่อง","ซ่อมอื่นๆ",
        "ใหม่.....","ใหม่เรือรดน้ำ","ใหม่เรือฉีดยา","ใหม่เรือเรดาห์","ใหม่ปั๊มรดน้ำ","ใหม่ปั๊มรดน้ำเรือเก่า","ใหม่ปั๊มฉีดยา",
        "ใหม่ปั๊มฉีดยาเรือเก่า","ใหม่ปั๊มสามสูบ","ใหม่ปั๊มสามสูบเรือเก่า","ใหม่ปั๊มดันเรือ","ใหม่ปั๊มผสมยา","ใหม่หลักฉีด,หัวฉีด",
        "ใหม่กรรไกร","ใหม่อื่นๆ"

    ],
    jobStatus:[
        "ยังไม่ทำ","กำลังทำ","เสร็จแล้ว","แจ้งลูกค้าแล้ว","รับไปแล้ว"," ยกเลิก",
    ],
    pic:[],
    customerType:["ปกติ","vip"],

    //partnerType:["ผู้ซื้อ","ผู้ขาย"],
    
    routeAuth:[
     {id:1,routeAddress:'/user/adduser', routeName:"N/A", userLevel:["admin"]},
     {id:2,routeAddress:'/user/getcustom', routeName:"N/A", userLevel:["admin","staff","visitor"]},
     {id:3,routeAddress:'/user/deletecustom', routeName:"N/A", userLevel:["admin"]},

     {id:4,routeAddress:'/customer/getlimit', routeName:"N/A", userLevel:["admin","staff","visitor"]},
     {id:5,routeAddress:'/customer/deletecustom', routeName:"N/A", userLevel:["admin","staff"]},
     {id:6,routeAddress:'/customer/addcustom', routeName:"N/A", userLevel:["admin","staff"]},
     {id:7,routeAddress:'/customer/updatecustom', routeName:"N/A", userLevel:["admin","staff"]},

     {id:8,routeAddress:'/job/getlimit', routeName:"N/A", userLevel:["admin","staff","visitor"]},
     {id:9,routeAddress:'/job/deletecustom', routeName:"N/A", userLevel:["admin","staff"]},
     {id:10,routeAddress:'/job/addcustom', routeName:"N/A", userLevel:["admin","staff"]},
     {id:11,routeAddress:'/job/updatecustom', routeName:"N/A", userLevel:["admin","staff"]},

     {id:12,routeAddress:'/basicdata/getcustom', routeName:"N/A", userLevel:["admin","staff","visitor"]},
     {id:13,routeAddress:'/basicdata/deletecustom', routeName:"N/A", userLevel:["admin"]},
     {id:14,routeAddress:'/basicdata/addcustom', routeName:"N/A", userLevel:["admin"]},
     {id:15,routeAddress:'/basicdata/updatecustom', routeName:"N/A", userLevel:["admin"]},

     {id:16,routeAddress:'/tabletemplate/getcustom', routeName:"N/A", userLevel:["admin","staff","visitor"]},
     {id:17,routeAddress:'/tabletemplate/updatetabletemplate', routeName:"N/A", userLevel:["admin","staff","visitor"]},

     {id:18,routeAddress:'/know/getlimit', routeName:"N/A", userLevel:["admin","staff","visitor"]},
     {id:19,routeAddress:'/know/deletecustom', routeName:"N/A", userLevel:["admin","staff"]},
     {id:20,routeAddress:'/know/addcustom', routeName:"N/A", userLevel:["admin","staff"]},
     {id:21,routeAddress:'/know/updatecustom', routeName:"N/A", userLevel:["admin","staff"]},

     
     {id:25,routeAddress:'/sticker/getlimit', routeName:"N/A", userLevel:["admin","staff","visitor"]},
     {id:26,routeAddress:'/sticker/deletecustom', routeName:"N/A", userLevel:["admin","staff"]},
     {id:27,routeAddress:'/sticker/addcustom', routeName:"N/A", userLevel:["admin","staff"]},
     {id:28,routeAddress:'/sticker/updatecustom', routeName:"N/A", userLevel:["admin","staff"]},
     {id:29,routeAddress:'/sticker/deletemany', routeName:"N/A", userLevel:["admin","staff"]},


    ]
}

//------------------------------------
//------------------------------------
const customerInit={
    id:1,
    title:"นาย",
    name:"จิตติ",
    surname:"ดี",
    phone:["12345","67890"],
    customerType:"ปกติ",
    address:[{
        number:"12",
        tambon:"หมี่แดง",
        district:"เวียงพิง",
        province:"เชียงของ",
        postcode:"12345"
    }],
    photoUrl1:[""],     
    remark:"ของแท้",
}

//-------------------------------
const jobInit={
    id:1,
    dateIn:"2021-01-01",
    dateTarget:"2021-01-19",
    dateOut:"2021-01-29",

    photoUrl1:["https://picsum.photos/200/300"],
    photoUrl2:["https://picsum.photos/200/300"],

    //transactionType:"งานซ่อม",
    //status:"open",
    
    jobType:"เรือรดน้ำ",
    jobStatus:"เสร็จแล้ว",

    active:"active",
    urgency:"ปกติ",

    customerId:1,
    title:"นาย",
    name:"จิตติ",
    surname:"ดี",
    phone:["12345","67890"],

    remark:"ด่วน",

    jobValue:1000,
    progress:100

}

const knowInit={
    id:1,
    dateIn:"2021-01-01",
    photoUrl1:["https://picsum.photos/200/300"],

    //transactionType:"งานซ่อม",
    //status:"open",
    knowType:"เรือรดน้ำ",
    active:"active",
    subject:"นาย",
    remark:"ด่วน",
}

//-----------------------------------------
const stickerInit={
    id:1,
    recordName:"abcd",
    date:"2021-12-31",
    thaiDate:"",
    recordBy:"Peter",

    xPerLine:4,
    heightP:297,
    widthP:210,

    gridColumnGap:2,
    gridRowGap:2,
    showBorder:true,

    paddingTopP:5,
    paddingBottomP:5,
    paddingLeftP:5,
    paddingRightP:5,

    showCode:true,
    showBarCode:true,

    heightB:20,
    widthB:1,
    fontSizeCode:10,

    showName:true,
    fontSizeName:10,

    showPrice:true,
    fontSizePrice:10,
    
    showUnit:true,
    fontSizeUnit:10,

    productData : [
        {code:"1234",name:"coloa",price:100,unit:"ขวด",qty:10},
        {code:"4aa5",name:"pepsi",price:200,unit:"ขวด",qty:5},
    ]

}


const initData= {
    shopInit,userInit,
    basicDataInit,tableTemplate,
    customerInit,jobInit,
    knowInit,stickerInit
}



module.exports = initData;