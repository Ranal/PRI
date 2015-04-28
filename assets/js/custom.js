function kuvaRingkond(str) {
    if (str == "") {
      document.getElementById("txtHint").innerHTML = "";
      return;
    }
    else {

      if (window.XMLHttpRequest) {
        // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
      }
      else {
        // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
      }
      xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
          document.getElementById("txtHint").innerHTML = xmlhttp.responseText;
        }
      }
        xmlhttp.open("GET","getringkond.php?q="+str,true);
      xmlhttp.send();
    }
  }

 function AjaxFunction()
  {
    var httpxml;
    try
    {
      // Firefox, Opera 8.0+, Safari
      httpxml=new XMLHttpRequest();
    }
    catch (e)
    {
      // Internet Explorer
      try
      {
        httpxml=new ActiveXObject("Msxml2.XMLHTTP");
      }
      catch (e)
      {
        try
        {
          httpxml=new ActiveXObject("Microsoft.XMLHTTP");
        }
        catch (e)
        {
          alert("Teie brauser ei toeta Ajaxit!");
          return false;
        }
      }
    }
    function stateck() 
    {
      if(httpxml.readyState==4)
      {

        var myarray = JSON.parse(httpxml.responseText);
        // Remove the options from 2nd dropdown list 
        for(j=document.form.kandidaat.options.length-1;j>=0;j--)
        {
          document.form.kandidaat.remove(j);
        }

        var optn = document.createElement("OPTION");
        optn.text = 'Vali kandidaat';
        optn.value = '0';
        document.form.kandidaat.options.add(optn);

        for (i=0;i<myarray.data.length;i++)
        {
          var optn = document.createElement("OPTION");
          optn.text = myarray.data[i].Eesnimi + ' ' + myarray.data[i].Perekonnanimi;
          optn.value = myarray.data[i].KandidaadiID;
          document.form   .kandidaat.options.add(optn);

        }

      }
    }
  // end of function stateck
  var url="dd.php";
  var erakond_id=document.getElementById('s1').value;
  url=url+"?erakond_id="+erakond_id;
  url=url+"&sid="+Math.random();
  httpxml.onreadystatechange=stateck;
  //alert(url);
  httpxml.open("GET",url,true);
  httpxml.send(null);
}