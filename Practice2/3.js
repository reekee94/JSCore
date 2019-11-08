let isAdult = confirm("Are you 18 ?");
if (isAdult == true) { alert("You are adult") ; }
else { let isYoung = confirm("Are you 10 years old or younger?");
    if (isYoung == true) { alert("You are too young"); }
}