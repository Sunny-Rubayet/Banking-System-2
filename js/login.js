// Step:01: Add to addEventListener for the submit button



document.getElementById('btn-submit').addEventListener('click',function(){

    // get email address input field area
    const emailField=document.getElementById('email-field');
    const email=emailField.value;
    const passWordField=document.getElementById('password-field');
    const password=passWordField.value;
    if(email==='sunny@sunny.com' && password==='1234'){
        // console.log('valid user');
        document.getElementById('btn-submit').addEventListener('click',function(){
            location.href='bank.html';
        });
    }

    else{
        console.log('invalid user')
    }

});

// Another Page connection 

