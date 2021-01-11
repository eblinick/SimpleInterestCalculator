function compute()
{
    var t = document.getElementById("principal").value;
    var p = Number(t)
    if (p<=0) {
    	alert("Please enter positive Principal");
		principal.focus();
		return false;
    }
    var  r = document.getElementById("rate").value / 10;
    if (r==0) {
    	r = 10;
    }
    var y = document.getElementById("years").value;
    if (y==0) { y = 1;}

    var d = new Date();
	var fut = Number(d.getFullYear());	
	fut += Number(y)
    rslt =  (p * y * r / 100);
    ans = '<p>If you deposit <span class="yel">' + p  + '</span></p>'
    ans += '<p>an interest rate of <span class="yel">' + r + '%. </span></p>';
    ans = ans + '<p>You will receive an amount of <span class="yel">' + rslt + ',</span> </p>';
    ans = ans + '<p>in the year <span class="yel">' + fut + '</span></p>'
    document.getElementById("result").innerHTML = ans;
    //alert(rslt)
    return ans;
}
        

