
export const login = (req, res) => {
    const data = {
        title: "Login", 
        layout: false,  
    } 
    res.render("login", data);
}

 