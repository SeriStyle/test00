const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:/test");
const Schema=mongoose.Schema;

const users=mongoose.model("users",({
      name:{type:String,
         required:[true,"不能为空"],
         minlength:[1,"用户名不能为空"],
         maxlength:[6,"用户名长度小于7个字节"]
},
      password:{
      type:String,
      required:[true,"不能为空"],
      minlength:[2,"密码长度最小6位数"],
      maxlength:[10,"最大长度不小于等于10位数"]
},
     content:String,
     createTime:Date,
}))
module.exports=users;
