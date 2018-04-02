function validateForm()
{
    var x=document.getElementById("name").value;
    if(x==null || x=="" )
    {
        console.log("this is wrong")
        alert("name can't be left blank");
        return false;
    }

    var y=document.getElementById("usermail").value
      apos = y.indexOf("@")
      dotpos = y.indexOf(".")
      if(apos<1||dotpos-apos<2){
      alert("please enter valid email id");
      return false;
    }

    // if(y==null || y=="")
    // {
    //     alert("last name is mandatory");
    //     return false;
    // }
    else
    {
        return true;
    }

      var z=document.getElementById("phone").value

        var a = z.length;
        if(a<10)
        {
          alert("please check the number");
          return false;
        }
        else {
          return true;
        }

}
