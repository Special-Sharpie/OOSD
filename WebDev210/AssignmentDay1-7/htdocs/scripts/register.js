var form = document.getElementById("registerForm")
var topElement = document.getElementById("topOfForm")

let inputData = {
    fname : ["Firstname", "fname", "text", "fname", "Firstname", "registerinput"],
    lname : ["Lastname", "lname", "text", "lname", "Lastname", "registerinput"],
    birthday : ["Date of Birth", "birthday", "date", "birthday", "none", "registerinput"],
    password : ["Password", "password", "password", "password", "none", "registerinput"],
    cpassword : ["Confirm Password", "cpassword", "password", "cpassword", "none", "registerinput"],
    email : ["Email", "email", "email", "email", "example@domain.ca", "registerinput"],
    city : ["City", "city", "text", "city", "City", "registerinput"],

}

for (var key in inputData){
    var new_label = document.createElement('label')
    var new_label_br = document.createElement('br')
    var new_input = document.createElement('input')
    var new_input_br = document.createElement('br')
    //Label Create
    new_label.setAttribute("for", inputData[key][1])
    var text = document.createTextNode(inputData[key][0])
    new_label.appendChild(text)
    //Input Create
    new_input.setAttribute("type", inputData[key][2])
    new_input.setAttribute("name", inputData[key][3])
    if (inputData[key][4] != "none"){
        new_input.setAttribute("placeholder", inputData[key][4])
    }
    new_input.setAttribute("required", "true")
    new_input.setAttribute("class", inputData[key][5])

    form.insertBefore(new_label, topElement)
    form.insertBefore(new_label_br, topElement)
    form.insertBefore(new_input, topElement)
    form.insertBefore(new_input_br, topElement)
}

/* 
                    <label for="lname">Last Name</label>
                    <br />
                    <input type="text" name="lname" placeholder="Last Name" class="registerinput" />

                    <label for="fname">First Name</label> 
                    <br />
                    <input type="text" name="fname" placeholder="First Name" class="registerinput" />
                    <br />
                    <label for="lname">Last Name</label>
                    <br />
                    <input type="text" name="lname" placeholder="Last Name" class="registerinput" />
                    <br />
                    <label for="birthday">Date of Birth</label>
                    <br />
                    <input type="date" name="birthday" class="registerinput" />
                    <br />
                    <label for="password">Password</label>
                    <br />
                    <input type="password" name="password" class="registerinput" />
                    <br />
                    <label for="cpassword">Confirm Password</label>
                    <br />
                    <input type="password" name="cpassword" class="registerinput" />
                    <br />
                    <label for="email">Email</label>
                    <br />
                    <input type="email" name="email" placeholder="example@domain.ca" class="registerinput" />
                    <br />
                    <label for="city">City - We use this information to gauge flight costs and sales tax to maximize trip value!</label>
                    <br />
                    <input type="text" name="city" placeholder="City" class="registerinput" />
                    <br />
*/