var app = angular.module('simple-chart', []);

app.controller('MainController', function($scope, $http) {
  $http.get("https://assignment-1-2016-maggiechow.c9users.io/Sample").then(function (response) {
    
      google.charts.load('current', {packages: ['corechart', 'bar']});
      google.charts.setOnLoadCallback(function() {
        formatDataTable(response.data);
      });
  });
});

var app = angular.module('simple-chart', []);

google.load("visualization", "1", {packages:["corechart"]});

app.controller('MainController', ['$scope', '$http',  function($scope, $http) {
  $http.get('/sample').success(function(data){
    formatDataTable(data);
  });
}]);

function formatDataTable(chartdata) {
  var data = [];
  var header = ['Injury', 'Injury Amount'];
  
  data.push(header);
  
  for (var i = 0; i < chartdata.length; i++) {
    var temp = [];
    temp.push(chartdata[i].event);
    temp.push(chartdata[i].amount);
    data.push(temp);
  }
  
  console.table(data);
  
  var g_data = google.visualization.arrayToDataTable(data);
  var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
  chart.draw(g_data, getOptions());
}

function getOptions()
{
     var options = {
        title: 'Work related injury in California from 2014',
        chartArea: {width: '50%'},
        hAxis: {
          title: 'Number of work related injury',
          minValue: 0
        },
        vAxis: {
          title: 'Injury Type'
        }
      };

    return options;
}
