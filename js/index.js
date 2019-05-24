var data,sum=0;



  function OpenTab(evt, Name) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(Name).style.display = "block";
  evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();
function openTab(evt, TabName) {
  var i, v_tabcontent, v_tablinks;
  v_tabcontent = document.getElementsByClassName("v_tabcontent");
  for (i = 0; i < v_tabcontent.length; i++) {
    v_tabcontent[i].style.display = "none";
  }
  v_tablinks = document.getElementsByClassName("v_tablinks");
  for (i = 0; i < v_tablinks.length; i++) {
    v_tablinks[i].className = v_tablinks[i].className.replace(" active", "");
  }
  document.getElementById(TabName).style.display = "block";
  evt.currentTarget.className += " active";
}
document.getElementById("Overview").click();
 

    function drawCurve(id)
{
  var c = document.getElementById(id);
  var ctx = c.getContext("2d");
  ctx.beginPath();
  ctx.arc(100, 75, 50, 0, 2 * Math.PI);
  ctx.fillStyle="#FE81F6";
  ctx.fill();

  ctx.beginPath();
  ctx.arc(100, 75, 50, -1.5, 0.5 * Math.PI,true);
  ctx.fillStyle="#BA01AE";
  ctx.fill();

  ctx.beginPath();
  ctx.arc(100, 75, 40, 0, 2 * Math.PI);
  ctx.fillStyle="white";
  ctx.fill();
}

function drawRectangle(id,data,height,width,label)
{
  let c = document.getElementById(id);
  let ctx = c.getContext("2d");

  var high = Math.max(...data);
  var heights = new Array();
  for(var i=0;i<data.length;i++)
  {
    var percentage = (data[i]*100)/high;
    heights.push(percentage*height/100);
  }
  // var top = $("#"+id).position().top;
  // var left = $("#"+id).position().left;
  var top = 10;
  var left = 10;
  //alert(left);
  var templeft = left;
  var maxHeight = Math.max(...heights);
  ctx.beginPath();
  ctx.font = "8px Arial";
  ctx.fillText(label,10,10);
  for(var j=0;j<data.length;j++)
  {
    templeft = templeft + width + 5;
    var diffHeight = maxHeight - heights[j];
    var temptop = top + diffHeight;
    //alert(heights);
    ctx.beginPath();
    ctx.rect(templeft, temptop, width, heights[j]);
    if(j%2==0){
      ctx.fillStyle="#1a1aff";
    }
    else{
      ctx.fillStyle="#99b3ff";
    }
    ctx.fill();

    ctx.font = "8px Arial";
    ctx.fillStyle = "#BA01AE";
    ctx.fillText(data[j],templeft+3,maxHeight+25);
  }
}

function drawRectangle1(id,data,height,width,label)
{
  let c = document.getElementById(id);
  let ctx = c.getContext("2d");

  var high = Math.max(...data);
  var heights = new Array();
  for(var i=0;i<data.length;i++)
  {
    var percentage = (data[i]*100)/high;
    heights.push(percentage*height/100);
  }
  // var top = $("#"+id).position().top;
  // var left = $("#"+id).position().left;
  var top = 10;
  var left = 10;
  //alert(left);
  var templeft = left;
  var maxHeight = Math.max(...heights);
  ctx.beginPath();
  ctx.font = "8px Arial";
  ctx.fillText(label,10,10);
  for(var j=0;j<data.length;j++)
  {
    templeft = templeft + width + 5;
    var diffHeight = maxHeight - heights[j];
    var temptop = top + diffHeight;
    //alert(heights);
    ctx.beginPath();
    ctx.rect(templeft, temptop, width, heights[j]);
    if(j%2==0){
      ctx.fillStyle="#e6005c";
    }
    else{
      ctx.fillStyle="#ff80b3";
    }
    ctx.fill();

    ctx.font = "8px Arial";
    ctx.fillStyle = "#BA01AE";
    ctx.fillText(data[j],templeft+3,maxHeight+25);
  }
}

//drawCurve("myCanvas1");
//drawCurve("myCanvas2");
function ch1(chname){

for (var i in data) {
     
     if(i%2==0)
     {
        sum = sum + data[i];
     } else{

     }

         }

var dataset = [{ name: 'IE', percent: 45 },{ name: 'General Results', percent: 78 }];

    var pie=d3.layout.pie()
            .value(function(d){return d.percent})
            .sort(null)
            .padAngle(.03);

    var w=90,h=90;

    var outerRadius=w/2;
    var innerRadius=32;

    var color = d3.scale.category10();

    var arc=d3.svg.arc()
            .outerRadius(outerRadius)
            .innerRadius(innerRadius);
    var svg=d3.select(chname)
            .append("svg")
            .attr({
                width:w,
                height:h,
                class:'shadow'
            }).append('g')
            .attr({
                transform:'translate('+w/2+','+h/2+')'
            });

    var path=svg.selectAll('path')
            .data(pie(dataset))
            .enter()
            .append('path')
            .attr({
                d:arc,
                fill:function(d,i){
                    return color(d.data.name);
                }
            });

    path.transition()
            .duration(1000)
            .attrTween('d', function(d) {
                var interpolate = d3.interpolate({startAngle: 0, endAngle: 0}, d);
                return function(t) {
                    return arc(interpolate(t));
                };
            });


    var restOfTheData=function(){
        var text=svg.selectAll('text')
                .data(pie(dataset))
                .enter()
                .append("text")
                .transition()
                .duration(200)
                .attr("transform", function (d) {
                    return "translate(" + arc.centroid(d) + ")";
                })
                .attr("dy", ".4em")
                .attr("text-anchor", "middle")
                .text(function(d){
                    return d.data.percent+"%";
                })
                .style({
                    fill:'#fff',
                    'font-size':'10px'
                });

        var legendRectSize=20;
        var legendSpacing=7;
        var legendHeight=legendRectSize+legendSpacing;


        
    };
    
    }

  function chc1(ar){
    var x;
    x= document.getElementById(ar);
    x.style.backgroundColor = "whitesmoke";
    x.textContent="Open";
    x.style.color="red";
  }