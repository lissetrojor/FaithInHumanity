<<<<<<< HEAD

=======
# motivation1.css
*
body
{
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color:#292F36 ;
}

.box
{
position:relative;
width: 200px;
height: 200px;
transform-style: preserve-3d;
animation: animate 80s linear infinite;
}
@keyframes animate
{
  0%
  {
    transform: perspective(1000px) rotateY(0deg);
  }
  100%
  {
    transform: perspective(1000px) rotateY(360deg);
  }
}
.box span
{
  position: absolute;
  top:0;
left: 0;
  width: 100%;
  height: 100%;
  transform-origin: center;
  transform-style: preserve-3d;
  transform: rotateY(calc(var(--i)*45deg)) translateZ(400px);
  -webkit-box-reflect: below 0px linear-gradient(transparent,transparent, #0004);
}
.box span img
{
  position: absolute;
  top: 0;
  left: 0;
  width:200px;
  height:200px;
  object-fit: cover;
}
# motivation.css
body{
  background-image: url("https://cdn.discordapp.com/attachments/736376827982905356/737754953422078032/Background_-_Good_Vibes.jpg");
  background-size: initial;
}
.topnav {
  overflow: hidden;
  display: flex;
  justify-content:space-evenly;
  position: sticky;
  top: 0px;
}
.topnav {
  background-color: #292f36;
  overflow: hidden;
}
.topnav a {
  float: center;
  color: #f7fff7;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}
.topnav a:hover {
  background-color: #4a5561;
  color: white;
}
.left, .right{
  height:100vh;
  width:100%;
}
@media screen and(min-width:768px){
  .left, .right{
    height:100vh;
  }
}
.left{
  background:rgb(133, 121, 145);
  opacity: 0.8;
 /*background-image: url("https://i.gifer.com/9vil.gif");*/
  background-size: cover;
}
.right{
  background:rgb(247, 186, 186);
  opacity: 0.8;
  /* background-image: url("https://i.pinimg.com/originals/14/3d/cd/143dcd6d932d6b10475014e1bddc9c32.gif");*/
  background-size: cover;
}
a.button2{
  display:inline-block;
  padding:0.5em 3em;
  border:0.16em solid #5a5656;
  margin:0 0.3em 0.3em 0;
  box-sizing: border-box;
  text-decoration:none;
  text-transform:uppercase;
  font-family:'Roboto',sans-serif;
  font-weight:400;
  color: #4a5561;
  text-align:center;
  transition: all 0.15s;
  }
  a.button2:hover{
  color:#3d1c1c;
  border-color:#DDDDDD;
  }
  a.button2:active{
  color:#BBBBBB;
  border-color:#BBBBBB;
  }
  @media all and (max-width:30em){
  a.button2{
  display:block;
  margin:0.4em auto;
   }
div.gallery {
  float: left;
}
div.gallery.hover{
  border: 1px solid #777;
}
div.gallery img{
  width:400px;
  height:400px;
  margin-top: 4px;
  margin-left: 4px;
  margin-right:4px;
  margin-bottom: 4px;
}
a:link {
  color:grey;
  background-color: transparent;
  text-decoration: none;
}
a:visited {
  color: pink;
  background-color: transparent;
  text-decoration: none;
}
a:hover {
  color:rgb(56, 52, 52);
  background-color: transparent;
  text-decoration: underline;
}
a:active {
  color: darkgray;
  background-color: transparent;
  text-decoration: underline;
}
h1{
  text-align-last: center;
  color: chocolate;
  font-style: italic;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
@keyframes slide{
  0%{
    transform: translate3d(0, 0, 0);
  }
  100%{
    transform: translate3d(-1692px, 0, 0);
  }
}
.container {
  overflow: hidden;
}
.sliding-background {
  background-image: url("https://cdn.discordapp.com/attachments/736376827982905356/737754953422078032/Background_-_Good_Vibes.jpg") repeat-x;
  height: 560px;
  width: 5076px;
  animation: slide 60s linear infinite;
}

# motivationinspiration.css
body{
  background-image: url("https://cdn.discordapp.com/attachments/736376827982905356/737754953422078032/Background_-_Good_Vibes.jpg");
  background-size: initial;
}
.topnav {
  overflow: hidden;
  display: flex;
  justify-content:space-evenly;
  position: sticky;
  top: 0px;
}
.topnav {
  background-color: #292f36;
  overflow: hidden;
}

.topnav a {
  float: center;
  color: #f7fff7;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.topnav a:hover {
  background-color: #4a5561;
  color: white;
}
>>>>>>> d6c0f7d9c033bf0f1327056c50ec3c2a1a90e39c
# motivationinspiration.html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
  integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
  <link rel="stylesheet" href="motivation.css">
  <title>motivation</title>
</head>
<body>
<section>
  <div class="topnav">
    <a class="active" href="index.html">Home</a>
    <a href="goodPeople.html">Good People</a>
    <a href="motivation.html">Motivation</a>
    <a href="socialJustice.html">Social Justice</a>
    <a href="animals.html">Cute Animals</a>
  </div>
</section>
  <div class="container">
    <div class="sliding-background">

    </div>
    <div class="parallax">

    </div>
<section>
  <div class="stories">

  <section>
    <div class="stories">
      <a target="_link">
        <div class="content1">
          <a href="https://247sports.com/college/maryland/Article/Maryland-football-Big-Ten-COVID-19-testing-149618687/">Covid in MaryLand</a>
        </div>
        <div class="content2">
          <a href="https://www.vulture.com/article/michaela-coel-i-may-destroy-you.html">michaela-coel-i-may-destroy-you</a>
        </div>
        <div class="content3">
          <a href="https://i0.wp.com/miss-mental.com/wp-content/uploads/2019/11/I-am-stronger-than-my-strongest-excuse-640x1024.png?resize=320%2C512&ssl=1"></a>
        </div>
        <div class="content4">
          <a href="https://www.theatlantic.com/politics/archive/2020/04/jacinda-ardern-new-zealand-leadership-coronavirus/610237/">jacinda-ardern-new-zealand-leadership-coronavirus</a>
        </div>
        <div class="content5">
          <a href="https://www.washingtonpost.com/world/europe/angela-merkel-coronavirus-legacy/2020/07/16/fab207c2-c5d1-11ea-a825-8722004e4150_story.html">angela-merkel-coronavirus-legacy</a>
        </div>
        <div class="content6">
    <a target="_link">
    <div class="left d-flex justify-content-center align-items-center">
      <a href="https://247sports.com/college/maryland/Article/Maryland-football-Big-Ten-COVID-19-testing-149618687/" class="button2">Covid in MaryLand</a>

        </div>

    </div>
</div>
</section>

      </a>
<section>

    </div>
  <div class="left d-flex justify-content-center align-items-center">
    <a href="https://www.vulture.com/article/michaela-coel-i-may-destroy-you.html" class="button2">michaela-coel-i-may-destroy-you</a>

</section>

  </section>
<section>
  <div class="left d-flex justify-content-center align-items-center">
    <a href="https://www.theatlantic.com/politics/archive/2020/04/jacinda-ardern-new-zealand-leadership-coronavirus/610237/" class="button2">jacinda-ardern-new-zealand-leadership-coronavirus</a>
</section>

<section>

  <div class="left d-flex justify-content-center align-items-center">
    <a href="https://www.washingtonpost.com/world/europe/angela-merkel-coronavirus-legacy/2020/07/16/fab207c2-c5d1-11ea-a825-8722004e4150_story.html" class="button2">angela-merkel-coronavirus-legacy</a>

</section>

  <div class="parallax">

  </div>

</div>
