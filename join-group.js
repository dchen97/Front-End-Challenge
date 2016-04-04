var scripts = document.head.getElementsByTagName('script');
var lastScript = scripts[scripts.length-1];

var url = lastScript.classList[0];

var classNum = lastScript.classList[1];

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
  document.getElementById('className').innerHTML = array.groups[classNum].name;
  var participants = array.groups[classNum].pariticpants;
  var participantHTML = "";
  for(var i = 0; i < participants.length; i ++) {
    participantHTML += '<div class="media"><div class="media-left media-middle"><a href="#"><img class="media-object" src="https://www.phoronix.com/forums/core/images/default/default_avatar_medium.png" alt="default image"></a></div>';
    participantHTML += '<div class="media-body"><h4 class="media-heading">';
    participantHTML+= participants[i] + '</h4>';
    if (i == 0){
      participantHTML += '<p>Organizer</p>';
    }
    participantHTML += '</div></div>';
  }

  document.getElementById('participants').innerHTML = participantHTML;
  document.getElementById('numOfParticipants').innerHTML = array.groups[classNum].pariticpants.length.toString();

  var groupInfoHTML = "";
  groupInfoHTML += '<p>' + array.groups[classNum].description + '</p>';
  groupInfoHTML += '<p><strong>Study Room: ' + array.groups[classNum].room + '</strong></p>';
  document.getElementById('groupInfo').innerHTML = groupInfoHTML;
}
