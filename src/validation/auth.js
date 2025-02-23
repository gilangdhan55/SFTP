import validator from "validator";

const sanitization = (data) => {
    return {
        nama: data.nama ? validator.escape(validator.trim(data.nama)).replace(/[^a-zA-Z0-9 ]/g, '') : null, 
        username: validator.escape(validator.trim(data.username)).replace(/[^a-zA-Z0-9]/g, ''),
        password:  validator.trim(data.password),
        service: [{page: "sftp", action: ['read', 'write']}, {page: "wms", action: ['read']}]
    }
}

const registerValid = (dt) => { 
    if(validator.isEmpty(JSON.stringify(dt))){
        
        console.log('kosong')
    }
    return;
    let data                = sanitization(dt);
    
    
    const validationCheck   = [
        {condition: validator.isEmpty(data.nama), message: "Nama tidak boleh kosong"},
        {condition: validator.isEmpty(data.username), message: "Username tidak boleh kosong"},
        {condition: validator.isEmpty(data.password), message: "Password tidak boleh kosong"},
        {condition: !validator.isStrongPassword(data.password), message: "Password harus memiliki kombinasi huruf, angka, dan simbol"},
        {condition: !validator.isAlphanumeric(data.username) && validator.contains(data.username, " "), message: "Username harus berupa kombinasi huruf dan angka"},
    ];

    for(let check of validationCheck){
        if(check.condition){
            return {status : false, data: [], message: check.message};
        }
    }

    return {status : true, data: data, message: null}; 
}


const loginValid = (dt) => {
    if(Object.keys(dt).length === 0) return {status : false,  message: "Authentication data cannot be empty"};
    let {username, password} = sanitization(dt);

    const validationCheck   = [ 
        {condition: validator.isEmpty(username), message: "Username tidak boleh kosong"},
        {condition: validator.isEmpty(password), message: "Password tidak boleh kosong"}, 
    ];

    for(let check of validationCheck){
        if(check.condition){
            return {status : false, message: check.message};
        }
    }

    return {status : true, data: {username, password}, message: null};   
}

export  {registerValid, loginValid};