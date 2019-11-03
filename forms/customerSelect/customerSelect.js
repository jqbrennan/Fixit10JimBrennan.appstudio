customerSelect.onshow=function(){
  let showState = "SELECT DISTINCT state FROM customer ORDER BY state ASC;"
  req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=jqb64765&pass=bia375&database=jqb64765&query=" + showState)
  if (req1.status == 200) { 
    resultsCS1 = JSON.parse(req1.responseText)
    var showCS = ""
    for (i = 0; i <= resultsCS1.length - 1; i++)
      showCS = showCS + resultsCS1[i][0] + "\n"
    txtCS1.value = showCS
  }
}


btnCSSubmit.onclick=function(){
  let stateInput = inptCS.value
  let custSelectQuery = "SELECT name FROM customer WHERE state = " + '"' + stateInput + '"'
  //alert(custSelectQuery)
  req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=jqb64765&pass=bia375&database=jqb64765&query=" + custSelectQuery)
  if (req1.status == 200) {
    resultsCS2 = JSON.parse(req1.responseText)
    if (resultsCS2.length == 0)
      NSB.MsgBox("There are no companies in that state.")
    else {
      var messageCS = ""
      for (i = 0; i <= resultsCS2.length - 1; i++)
        messageCS = messageCS + resultsCS2[i][0] + "\n"
      txtCS2.value = messageCS
    }
  }
}