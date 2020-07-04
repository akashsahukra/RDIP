
$(document).ready(function () {
    // Calculator
    function add(sval) {
        ans = sval.split('+')
        console.log(Number(ans[0]) + Number(ans[1]));
        return Number(ans[0]) + Number(ans[1]);
    }
    function sub(sval) {
        ans = sval.split('-')
        return Number(ans[0]) - Number(ans[1]);
    }
    function div(sval) {
        ans = sval.split('/')
        return Number(ans[0]) / Number(ans[1]);
    }
    function mult(sval) {
        ans = sval.split('*')
        return Number(ans[0]) * Number(ans[1]);
    }
    function abs(sval) {
        
        var ans = Math.abs(Number(sval));
        return ans;
    }
    function sqrt(sval) {
        return Math.sqrt(Number(sval)).toFixed(3);
    }
    function percent(sval) {
        ans = sval.split('%')
        // document.write((Number(ans[0]) * Number(ans[1])) / 100)
        return (Number(ans[0]) * Number(ans[1])) / 100;
    }
    
    let sval = '', btext;
    $(".button").each(function () {
        
        $(this).click(function () {
            btext = $(this).text();
            sval = $('.screen').val();
            console.log($(this).text())
            if (btext == 'C') {
                sval = "";
                $('.screen').val(sval);
            }
            else if (btext == 'A') {
                absval = sval;
                sval = "";
                $('.screen').val(abs(absval))
            }
            else if (btext == 'sqrt') {
                sqrtval = sval;
                sval = "";
                $('.screen').val(sqrt(sqrtval))
            }
            else if (btext == 'X') {
                currval = sval.substr(0, sval.length - 1)
                sval = currval;
                $('.screen').val(sval);
            }
            else if (btext == '=') {
                if (sval.includes('+')) {
                    $('.screen').val(add(sval));
                }
                if (sval.includes('-')) {
                    $('.screen').val(sub(sval));
                }
                if (sval.includes('/')) {
                    $('.screen').val(div(sval));
                }
                
                if (sval.includes('*')) {
                    $('.screen').val(mult(sval));
                }
                if (sval.includes('%')) {
                    $('.screen').val(percent(sval));
                }
                if (sval == "NaN") {
                    $('.screen').val('Error')
                }
            }
            else {
                sval += btext
                $('.screen').val(sval);
            }
            
        });
    })

    
    // Form validation
    var pattern1,pattern2;
    $("#submitform").click(function () {
        if ($("#exampleInputName").val() == "") {
            alert("Name cannot be empty")
            return false;
        }
        if (Number.isInteger(Number($("#exampleInputName").val()[0]))) {
            alert("Name cannot start with a number");
            return false;
        }
        pattern1 = new RegExp('^[0-9]*$')
        if ($("#examplePhone").val() == "") {
            alert("Phone number is not entered");
            return false;
        }
        if (!pattern1.test($("#examplePhone").val())) {
            alert("Invalid Phone Number");
            return false;
        }
        if ($("#examplePhone").val().length != 10) {
            alert("Check your phone number length");
            return false;
        }
        pattern2 = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        
        if ($("#exampleInputEmail1").val() == "") {
            alert("Email address is required");
            return false;
        }
        if (!pattern2.test($("#exampleInputEmail1").val())) {
            alert("Invalid Email address");
            return false;
        }
    })
    
})
