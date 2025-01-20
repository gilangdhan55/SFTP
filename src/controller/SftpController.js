const index = (req, res) => {
    const data = {
        title: "SFTP", 
        layout: false,  
    } 
    res.render("sftp/index", data);
}

export {index};