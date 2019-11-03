customerDelete.onshow=function(){
  let showCompany = "SELECT DISTINCT name FROM customer ORDER BY name ASC;"
  req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=jqb64765&pass=bia375&database=jqb64765&query=" + showCompany)
  if (req1.status == 200) { 
    resultsCD1 = JSON.parse(req1.responseText)
    var showCD = ""
    for (i = 0; i <= resultsCD1.length - 1; i++)
      showCD = showCD + resultsCD1[i][0] + "\n"
    txtCD1.value = showCD
  }
}

btnCDSubmit.onclick=function(){
  let deleteInput = inptCD.value
  let custQuery = "SELECT name FROM customer WHERE name = " + '"' + deleteInput + '"'
  req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=jqb64765&pass=bia375&database=jqb64765&query=" + custQuery)
  if (req1.status == 200) {
    resultsCD2 = JSON.parse(req1.responseText)
    if (resultsCD2.length == 0)
      NSB.MsgBox("That company does not exist.")
    else {
      let custDeleteQuery = "DELETE FROM customer WHERE name = " + '"' + deleteInput + '"'
      req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=jqb64765&pass=bia375&database=jqb64765&query=" + custDeleteQuery)
      var messageCD = ""
      let custDeleteResultsQuery = "SELECT DISTINCT name FROM customer ORDER BY name ASC;"
      req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=jqb64765&pass=bia375&database=jqb64765&query=" + custDeleteResultsQuery)
      resultsCD3 = JSON.parse(req1.responseText)
      for (i = 0; i <= resultsCD3.length - 1; i++)
        messageCD = messageCD + resultsCD3[i][0] + "\n"
      txtCD2.value = messageCD
    }
  }
}


