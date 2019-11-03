customerUpdate.onshow=function(){
  let showCompanyCU = "SELECT DISTINCT name FROM customer ORDER BY name ASC;"
  req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=jqb64765&pass=bia375&database=jqb64765&query=" + showCompanyCU)
  if (req1.status == 200) { 
    resultsCU1 = JSON.parse(req1.responseText)
    var showCU = ""
    for (i = 0; i <= resultsCU1.length - 1; i++)
      showCU = showCU + resultsCU1[i][0] + "\n"
    txtCU1.value = showCU
  }
}


/*

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
*/

btnCUsubmit.onclick=function(){
  let updateInput = inptCU1.value
  let updateCheck = "SELECT name FROM customer WHERE name = " + '"' + updateInput + '"'
  req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=jqb64765&pass=bia375&database=jqb64765&query=" + updateCheck)
  if (req1.status == 200) {
    resultsCU2 = JSON.parse(req1.responseText)
    if (resultsCU2.length == 0)
      NSB.MsgBox("That company does not exist.")
    else {
      let updateValue = inptCU2.value
      let custUpdateQuery = "UPDATE customer SET name = " + '"' + updateValue + '"' + " WHERE name = " + '"' + updateInput + '"'
      //alert(custUpdateQuery)
      req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=jqb64765&pass=bia375&database=jqb64765&query=" + custUpdateQuery)
      var messageCU = ''
      let custUpdateResultsQuery = "SELECT DISTINCT name FROM customer ORDER BY name ASC;"
      req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=jqb64765&pass=bia375&database=jqb64765&query=" + custUpdateResultsQuery)
      resultsCU3 = JSON.parse(req1.responseText)
      for (i = 0; i <= resultsCU3.length - 1; i++)
        messageCU = messageCU + resultsCU3[i][0] + "\n"
      txtCU2.value = messageCU
    }
  }
}
