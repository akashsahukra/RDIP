
$(document).ready(function () {
    // Calculator -------------- TASK - 1
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

    
    // Form validation -------- TASK-2
    function validate() {
        var pattern1, pattern2;
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
    }
    $("#submitform").click(function () {
        validate();
        })

    // Palindrome and Anagrams --------------- TASK - 3
    function palindrome() {
        if ($("#palindrome").val() == "") {
            $(".res1").css("color", "red");
            $(".res1").html("Please provide input");
            return false;
        }
        else if ($("#palindrome").val() != $("#palindrome").val().split("").reverse().join("")) {
            $(".res1").css("color", "red");
            $(".res1").html("Not a palindrome");
            return false;
        }
        else {
            $(".res1").css("color", "green");
            $(".res1").html("It's a plaindrome");
            return true;
        }
    }
    $("#pal").click(function () {
        palindrome();
    })
    
    function anagram() {
        var s1, s2;
        s1 = $("#ana1").val().split('').sort().join('');
        s2 = $("#ana2").val().split('').sort().join('');
        if ($("#ana1").val() == "" || $("#ana2").val() == "") {
            $(".res2").css("color", "red");
            $(".res2").html("Inputs cannot be empty")
            return false;
        }
        else if (s1 == s2) {
            $(".res2").css("color", "green");
            $(".res2").html("They are anagrams");
            return true;
        }
        else {
            $(".res2").css("color", "red");
            $(".res2").html("They are not anagrams");
            return false;
        }
    }
    $("#ana").click(function () {
        anagram();
    })
    // WHO WILL SURVIVE --------- TASK - 4
    function who_will_survive() {
        var st1 = Math.floor(Math.random() * 1001);
        var st2 = Math.floor(Math.random() * 1001);
        $(".st1").val(st1)
        $(".st2").val(st2)
        
        st1 = st1 % 3;
        st2 = st2 % 3;
        if (st1 == 0 && st1 == 1 || st1 == 1 && st2 == 0) {
            console.log(st1, st2)
            $(".winner").css("color", "green")
            $(".winner").html("HUMAN SURVIVES");
            return false;
        }
        if (st1 == 1 && st1 == 2 || st1 == 2 && st2 == 1) {
            console.log(st1, st2)
            $(".winner").css("color", "green")
            $(".winner").html("COCKROACH SURVIVES");
            return false;
        }
        if (st1 == 2 && st1 == 0 || st1 == 0 && st2 == 2) {
            console.log(st1, st2)
            $(".winner").css("color", "green")
            $(".winner").html("NUCLEAR BOMB SURVIVES");
            return false;
        }
        if (st1 == st2) {
            console.log(st1, st2)
            $(".winner").css("color", "red")
            $(".winner").html("TIE");
            return false;
        }
    }
    $(".verify").click(function () {
        who_will_survive();
    })
    // BONUS TASK
    function curr_conv() { 
        request = new XMLHttpRequest();
        let url = new URL('https://free.currconv.com/api/v7/convert');
        url.searchParams.set('q', "INR_" + $("#CURR_TO").value);
        request.open('GET', url);
        request.send();
        request.onload = function () {
            if (request.status != 200) {
                alert('Error ${xhr.status}: ${xhr.statusText}');
            } else {
                alert('Done, got ${xhr.response.length} bytes');
            }
        }

    }
        
    $("#currconv").click(function () {
        curr_conv();
    })
})
