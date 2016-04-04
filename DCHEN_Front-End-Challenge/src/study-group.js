var scripts = document.head.getElementsByTagName('script');
var lastScript = scripts[scripts.length-1];

var url = lastScript.classList[0];

var subjectName = lastScript.classList[1];

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
    var myArr = JSON.parse(xmlhttp.responseText);
    loadData(myArr);
  }
}
xmlhttp.open("GET", url, true);
xmlhttp.send();

function loadData(array) {
  var html = "";
  var i;
  for (i = 0; i < array.groups.length; i ++) {
    html += '<a href="'+ subjectName + '-join-group.html?classNum=' + i.toString() + '" class="list-group-item"><h4 class="list-group-item-heading">' + array.groups[i].name +
      '</h4><p class="list-group-item-text">' + array.groups[i].description + '</p><p class="list-group-item-text"><strong>Study Room: '
      + array.groups[i].room.toString() + '</strong></p></a>';
  };

  document.getElementById("classList").innerHTML = html;
}
