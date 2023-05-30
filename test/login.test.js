const fetch = require('node-fetch2')
it ("Should test validity of token", async ()=> {
    let token = "";
    
    const options = {
        method: "POST",
        headers:{ 
            "content": "application/json"
        
        },
        body:JSON.stringify({
            userName:"lorenzo.torres95@gmail.com",
            password :"Alberto1995!"
        })
    }
    const response = await fetch("https://dev.stedi.me/login",options);
    token = await response.text()
    expect(token.length).toBe(36);
});

it ("Should test Bad Password", async ()=> {
    let token = "";
    
    const options = {
        method: "POST",
        headers:{ 
            "content": "application/json"
        
        },
        body:JSON.stringify({
            userName:"lorenzo.torres95@gmail.com",
            password :"IncorrectPasswords"
        })
    }
    const response = await fetch("https://dev.stedi.me/login",options);
    token = await response.text()
    const status = response.status;
    expect(status).toBe(401)
    expect(token.length).toBe(0);
});

it ("Should test Bad User", async ()=> {
    let token = "";
    
    const options = {
        method: "POST",
        headers:{ 
            "content": "application/json"
        
        },
        body:JSON.stringify({
            userName:"lorenzotorres95@gmail.com",
            password :"Alberto1995!"
        })
    }
    const response = await fetch("https://dev.stedi.me/login",options);
    token = await response.text()
    const status = response.status;
    expect(status).toBe(500)
    expect(token.length).toBe(60);
});