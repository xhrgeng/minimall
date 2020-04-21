import MOck from "mockjs";
MOck.mock('/api/user/login',{
    "status":0,
    "data":{
        "id|1-3":0,
        "username":"@cname",
        "email":"3453535@163.com",
        "phone":null,
        "role":0,
        "createTime": 1479048325000,
        "updateTime": 1479048325000
    }
})