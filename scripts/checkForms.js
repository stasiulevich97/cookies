

            //  (?=.*[0-9]) - строка содержит хотя бы одно число;
            // (?=.*[!@#$%^&*]) - строка содержит хотя бы один спецсимвол;
            // (?=.*[a-z]) - строка содержит хотя бы одну латинскую букву в нижнем регистре;
            // (?=.*[A-Z]) - строка содержит хотя бы одну латинскую букву в верхнем регистре;
            // [0-9a-zA-Z!@#$%^&*]{6,} - строка состоит не менее, чем из 6 вышеупомянутых символов.


function checkRegForm(){
    let userEmail = document.getElementById('email')
    let checkEmail =  /[a-z0-9_-]+@[a-z0-9-]+/i;
    let emailError = document.getElementsByClassName('error')[0]
    userEmail.classList.remove('redInput')
    emailError.hidden = true
    if(userEmail.value.length < 3 || !checkEmail.test(userEmail.value)){
        userEmail.classList.add('redInput')
        emailError.hidden = false
        return false
    }

    let userPassword1 = document.getElementById('password')
    let userPassword2 = document.getElementById('passwordRepeat')
    let checkPassword = /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g
    let passwordRepeatError = document.getElementsByClassName('error')[1]
    passwordRepeatError.hidden = true
    userPassword1.classList.remove('redInput')
    userPassword2.classList.remove('redInput')
    if(userPassword1.value != userPassword2.value || !checkPassword.test(userPassword1.value)){
        passwordRepeatError.hidden = false
        userPassword2.classList.add('redInput')
        return false
    }
   return true
}



function checkAddForm(){
    let firstName = document.getElementById('firstName')
    let lastName = document.getElementById('lastName')
    let yearOfBirth = document.getElementById('yearOfBirth')
    let phoneNumber = document.getElementById('phoneNumber')
    let skype = document.getElementById('skype')
    let yearDate = new Date()
    // console.log(yearDate);
    let currentYear = yearDate.getFullYear()
    // console.log(typeof(currentYear));

    let checkName = /^[A-Za-zа-яА-Я ]+$/;
    let checkPhone = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/
    let checkYear = /^\d{4}$/

    let firstNameError = document.getElementsByClassName('error')[2]
    let lastNameError = document.getElementsByClassName('error')[3]
    let yearOfBirthError = document.getElementsByClassName('error')[4]
    let phoneNumberError = document.getElementsByClassName('error')[5]
    let skypeError = document.getElementsByClassName('error')[5]

    firstName.classList.remove('redInput')
    firstNameError.hidden = true
    if(firstName.value.length < 3 || !checkName.test(firstName.value)){
        firstName.classList.add('redInput')
        firstNameError.hidden = false
        return false
    }

    lastName.classList.remove('redInput')
    lastNameError.hidden = true
    if(lastName.value.length < 3 || !checkName.test(lastName.value)){
        lastName.classList.add('redInput')
        lastNameError.hidden = false
        return false
    }

    yearOfBirth.classList.remove('redInput')
    yearOfBirthError.hidden = true
 
    if(!checkYear.test(yearOfBirth.value)|| yearOfBirth.value >currentYear || yearOfBirth.value < 1900){
        yearOfBirth.classList.add('redInput')
        yearOfBirthError.hidden = false
        return false
    }

    phoneNumber.classList.remove('redInput')
    phoneNumberError.hidden = true
    if(!checkPhone.test(phoneNumber.value)){
        phoneNumber.classList.add('redInput')
        phoneNumberError.hidden = false
        return false
    }

    skype.classList.remove('redInput')
    skypeError.hidden = true
    if(skype.value.length <5){
        skype.classList.add('redInput')
        skypeError.hidden = false
        return false
    }
    return true
}