var linesArray = [];

$(document).ready(function(){
  $.ajax({
    // url: "http://poetrydb.org/title/world",
    url: "https://api.github.com/search/repositories?q=itp+in:description&sort=stars&order=desc&per_page=100",
    dataType: 'json',
    // permissions: ["http://*/"],
    success: function(data) {
      console.log("got the data");
      console.log(data);
      addToPage(data);
    },
    error: function(err) {
      console.log("error: ");
      console.log(err);
    }
  });
});

function addToPage(data){
  var repository= "";
  for (var i=0; i<50; i++){
    repository += '<div class="item_container">';
    repository += '<div class="personal">';
    repository += '<div class="pic">';
    repository += '<img style="width: 130px; height: 130px;" src="' + data.items[i].owner.avatar_url + '">';
    repository += '</div>';
    repository += '<div class="username">';

    repository += "<span><a href='" + data.items[i].owner.html_url + "'>"+data.items[i].owner.login+"</a></span>";
    repository += '</div>';
    repository += '</div>';
    repository += '<div class="repository">';
    repository += '<div class="title">';
    repository += "<span><a href='" + data.items[i].html_url + "'>"+data.items[i].name+"</a></span>";
    repository += '</div>';
    repository += '<div class="stars">';
    repository += "<span>"+data.items[i].stargazers_count+ " stars</span>";
    repository += '</div>';
    repository += '<div class="description">';
    repository += "<span>"+data.items[i].description+"</span>";
    repository += '</div>';
    repository += '</div>';
    repository += '</div>';

  }

  $('#container').append(repository);

}
