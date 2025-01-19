const button    = document.querySelectorAll(".click");
const form      = document.getElementById('form');
 
const sanitaze  = (data) => { 
    return {
        username: data.username.replace(/[^a-zA-Z0-9]/g, ''),
        password: data.password.trim()
    }
}; 

const validation = (dt) => {
    const data = sanitaze(dt);
    
    if(data.username == '' || data.password == ''){
        return false;
    }

    return data;
}

const fetchData = async (url, config) => {
    try {
        const response = await fetch(url, config); 
        const status    = response.status;
        const data      = await response.json();

        return {response: data, status: status};

        return data; 
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

const action = {
    reset: () => {
        form.reset();
    },
    login: async () => {
        const username  = document.getElementById('username').value;
        const password  = document.getElementById('password').value;
        
        const data      = validation({username, password});
        
        if(!data){
            alert("Username dan Password tidak boleh kosong");
            return;
        }

        const config    = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data) 
        }

        const {response, status} = await fetchData('/login',config);

        if(!response.status){
            alert(response.message);
            return;
        } 
        alert(response.message);
        setTimeout(() => {
            window.location.href = '/sftp';
        }, 500);
    }
} 

button.forEach((btn) => {
    btn.addEventListener("click", () => {
        const btnData   = btn.dataset.next; 
        const explode   = btnData.split("-");

        const nextTo    = explode[1];  
        action[nextTo]();
    });
});