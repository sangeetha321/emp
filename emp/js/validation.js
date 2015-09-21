function myFunction() {

            var inputName = document.getElementById("inputName").value,
                inputAge = document.getElementById("inputAge").value,
                inputPassword = document.getElementById("inputPassword").value,
                inputMsg = document.getElementById("inputMsg").value;
                
            var male = document.getElementById("inputMale").checked;
            var female = document.getElementById("inputFemale").checked;
            var email = document.getElementById("inputEmail").value;
            
            if (inputName == "") {
                alert("Please input your Name..!!");
                return false;
            }
            if (inputAge == "") {
                alert("Please input your Age..!!");
                return false;
            }
            if (inputPassword == "") {
                alert("Please input a Password..!!");
                return false;
            }
            if (male == false && female == false) {
                alert("Please choose gender..!!");
            }
            
            if (inputMsg == "") {
                alert("Please input your Message..!!");
                return false;
            }
            if (isNaN(inputAge) || inputAge <= 0) {
                alert("Invalid Age");
            }
            var regex = /^([0-9a-zA-Z]([-_\\.]*[0-9a-zA-Z]+)*)@([0-9a-zA-Z]([-_\\.]*[0-9a-zA-Z]+)*)[\\.]([a-zA-Z]{2,9})$/;
            if (!regex.test(email)) {
                alert("Enter a valid email");
                return false;
            }
            
        }
        
