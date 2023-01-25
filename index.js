let fname = document.getElementById("fname");
let lname = document.getElementById("lname");
let email = document.getElementById("email");
let subject = document.getElementById("subject");
let textarea = document.getElementById("textarea");
let phone = document.getElementById("phone");
let submit = document.getElementsByClassName("form-contact")[0];

submit.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("clicked");


    // write html for proper format to be send in mail
    let ebody = `
    <b>Name: </b>${fname.value}&nbsp;${lname.value}
    <br>
    <b>Email: </b>${email.value}
    <br>
    <b>Phone: </b>${phone.value}
    <br>
    <b>Subject: </b>${subject.value}
    <br>
    <b>TextArea:- </b>${textarea.value}
 
`
    // email code here
    Email.send({
        SecureToken: "ec51daf5-c841-4529-9ee6-5f23e6b4d663",
        To: 'sarath4smart@gmail.com',
        From: "sarath4smart@gmail.com",
        Subject: "Email from" + email.value,
        Body: ebody
    }).then(
        message => alert(message)
    );

});
