

const index = (req, res) => { 
    const data = {
        title: "SFTP", 
        layout: "layout/admin-layout/main-layout",
        path: req.originalUrl
    }  
    res.render("sftp/index", data);
}

const getCustomer = (req, res) => {
    console.log(req.cookies);
    let data = [];
    for(let i = 0; i < 10; i++){
        data.push({id: i, name: `Customer ${i}`});
    } 
    res.status(200).json(data); 
}

export {index, getCustomer};