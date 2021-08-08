const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    id:{type:Number,required:true}, // ไอดี
    barcode:{type:String}, // บาร์โค้ด
    productName:{type:String}, // ชื่อ

    groupId: {type: Number}, // ไอดีกลุ่ม
    groupName: {type:String}, // ชื่อกลุ่ม
   
    photoUrl1:{type:[String]}, // 
    unit:{type:String},  // หน่วย
    price:{ type:Number}, // ราคา
    remark:{type:String}, // หมายเหตุ
    
    priceLevel:{ // รายละเอียด
        type:[{
            price:{type:Number},
            remark:{type:String}
        }]
    },
    
    timestamp:{type:Date},
    userId:{type:String},
    shopId:{type:String,required:true}, //
    
    isRawMat:{type:Boolean}, //เป็นวัตถุดิบ
    detail:{ // รายละเอียด
        type:[{
            id:{type:Number,default:0}, // ไอดี
            barcode:{type:String}, // บาร์โค้ด
            productName:{type:String}, // ชื่อ
            
            groupId:{type:Number,default:0}, // ไอดีกลุ่ม
            groupName:{type:String}, // ชื่อกลุ่ม
       
            unit:{type:String}, // หน่วย
            price:{type:Number,default:0}, // ราคา 
            quantity:{type:Number,default:0}, // จำนวน 
            result:{type:Number},
            remark:{type:String}, //หมายเหตุ
            isRawMat:{type:Boolean} // เป็นวัตถุดิบ
        }]
    },
    stock:{type:Number,default:0}, // ยอดสต็อค
    order:{type:Number,default:0}, // ยอดจอง
    plan:{type:Number,default:0} //ยอดแผน

});

ProductSchema.index({id:1,name:1})

module.exports = Product = mongoose.model('Product', ProductSchema);