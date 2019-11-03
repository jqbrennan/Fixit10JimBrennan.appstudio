
btnAdd.onclick=function(){
  let addQuery = "INSERT INTO `customer` (name, street, city, state, zipcode) VALUES ('Jesse Antiques','1113 F Street','Omaha','NE','68178')"
  //alert(addQuery)
  req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=jqb64765&pass=bia375&database=jqb64765&query=" + addQuery)
  if (req1.status == 200) {
    var showCAQuery = "SELECT name FROM customer"
    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=jqb64765&pass=bia375&database=jqb64765&query=" + showCAQuery)
    var showCA = ''
    resultsCA = JSON.parse(req1.responseText)
    for (i = 0; i <= resultsCA.length - 1; i++)
      showCA = showCA + resultsCA[i][0] + "\n"
    txtAdd.value = showCA
  }
}
