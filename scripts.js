console.log("loaded");

// Add all names here
var names = [
"Alfredo	Hawkins",
"Rex	Harris",
"Renee	Barber",
"Fernando	Lamb",
"Monique	Holmes",
"Kristen	Smith",
"Nicholas	Allen",
"Merle	Reeves",
"Rodolfo	Gregory",
"Jeffery	Foster",
"Jackie	Hubbard",
"Arlene	Hopkins",
"Amos	Sanchez",
"Judy	Peterson",
"Kerry	Wallace",
"Lori	Murphy",
"Leon	Perez",
"Tammy	Snyder",
"Loretta	Fitzgerald",
"Jan	Silva"
];

// Add corresponding title here
var titles = [
  "Director",
  "Executive Producer",
  "Executive Producer",
  "Screen Writer",
  "Screen Writer",
  "Art Director",
  "Lighting Director",
  "Camera Crew",
  "Sound Crew",
  "Storyboard",
  "Costume Designer",
  "Score Composer",
  "Stunt Director",
  "Animation Director",
  "Location Consultant",
  "Accountant",
  "Lead Makeup",
  "Lead Hair",
  "Script Supervisor",
  "Prop Master"
]

function writeName(){

	var i = 0,
      employee,
      name,
      title,
      bottom;

  var interval = setInterval(function() {
                   employee = '.employee.' + i;
                   name = '.name.' + i;
                   title = '.title.' + i;
                   $('<div></div>').appendTo('#screen').addClass('employee '+i);
                   $('<h4></h4>').appendTo(employee).addClass('title '+i);
                   $('<h2></h2>').appendTo(employee).addClass('name '+i);
                   $(name).text(names[i]);
                   $(title).text(titles[i]);
                   i++;
                   if(i >= names.length) clearInterval(interval);
                 }, 4000);

}

function fadeInText(){
  var i = 0;
  if (i < 150){
  var interval =  setInterval(function(){
                    $('h2').css('opacity', '+=0.01');
                    $('h4').css('opacity', '+=0.01');
                    i++;
                  },50);
  }

}

function scrollText(){
   var interval = setInterval(function(){
     							   $('.employee').css('bottom', '+=1px');
                     $('.employee').css('opacity', '-=0.0025');
   								 }, 50);
}



$(function(){
writeName();
fadeInText();
scrollText();
})
