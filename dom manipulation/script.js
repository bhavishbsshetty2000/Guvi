var top1 = document.createElement('div');
top1.setAttribute("class", "top");

var general = document.createElement('div')
general.setAttribute("class", "general");

var x = document.createElement("IMG");
x.setAttribute("class", "pic");
x.setAttribute("src", "https://stylesatlife.com/wp-content/uploads/2019/09/Edgy-Side-Look-for-Men.jpg");

var bar = document.createElement('div')
bar.setAttribute("class", "bar");

var name1 = document.createElement('span')
name1.setAttribute("class", "name");
name1.innerHTML = "BRAIN DUBEY"

bar.append(name1);

var info = document.createElement('div')
info.setAttribute("class", "info")

var addr = document.createElement('span')
addr.setAttribute("class", "addr");
addr.innerHTML = 'N.Damen Avenue,Chicago 9999|999-999-999|hello@kikckresume.com|www.kickresume.com';

info.append(addr);

general.append(x, bar, info)

top1.append(general);

document.body.append(top1);

// top ends

var lin = document.createElement('div');
lin.setAttribute("class", "line");
document.body.append(lin);

// line


var res = document.createElement('div');
res.setAttribute("class", "resumepage");

var bot = document.createElement('div');
bot.setAttribute("class", "bottom");

var bor = document.createElement('div');
bor.setAttribute("class", "bord");

var profil = document.createElement('div');
profil.setAttribute("class", "profile");

var i = document.createElement('i');
i.setAttribute("class", "fas fa-user-circle")

var h2 = document.createElement('h2')
h2.innerHTML = "Profile"

var p1 = document.createElement('p')
p1.innerHTML = "Innovative optimized solution seeker. Excited to be at the deployment phase of my new career as aweb developer, I am ambitious, adventurous, assiduous, animated, and an alliteration advocate."

profil.append(i, h2, p1);

var skill = document.createElement('div');
skill.setAttribute("class", "skill")

var i1 = document.createElement('i');
i1.setAttribute("class", "fas fa-flask")

var h21 = document.createElement('h2')
h21.innerHTML = "Skills"

var h22 = document.createElement('h3')
h22.setAttribute("class", "cen");
h22.innerHTML = "Technical Skill";

var ul = document.createElement('ul');
ul.setAttribute("class", "tech");

var lia = document.createElement('li');

var ul1 = document.createElement('ul');
ul1.setAttribute("class", "skills");

var li1 = document.createElement('li');
li1.innerHTML = "JavaScript";
var li2 = document.createElement('li');
li2.innerHTML = "CSS";
var li3 = document.createElement('li');
li3.innerHTML = "HTML";
var li4 = document.createElement('li');
li4.innerHTML = "React";
var li5 = document.createElement('li');
li5.innerHTML = "Redux";
var li6 = document.createElement('li');
li6.innerHTML = "Mongo";
var li7 = document.createElement('li');
li7.innerHTML = "Deployment";

ul1.append(li1, li2, li3, li4, li5, li6, li7);

lia.append(ul1);

var lib = document.createElement('li');

var ul2 = document.createElement('ul');
ul2.setAttribute("class", "skills");

var lic = document.createElement('li');

var container = document.createElement('div');
container.setAttribute("class", "container");

var c = document.createElement('div');
c.setAttribute("class", "sk java");

var d = document.createElement('span')
d.setAttribute("class", "dot");


container.append(c, d);
lic.append(container);


var lic1 = document.createElement('li');

var container1 = document.createElement('div');
container1.setAttribute("class", "container");

var c1 = document.createElement('div');
c1.setAttribute("class", "sk css");

var d1 = document.createElement('span')
d1.setAttribute("class", "dot");


container1.append(c1, d1);
lic1.append(container1);


var lic121 = document.createElement('li');

var container121 = document.createElement('div');
container121.setAttribute("class", "container");

var c121 = document.createElement('div');
c121.setAttribute("class", "sk html");

var d121 = document.createElement('span')
d121.setAttribute("class", "dot");


container1.append(c121, d121);
lic121.append(container121);


var lic2 = document.createElement('li');

var container2 = document.createElement('div');
container2.setAttribute("class", "container");

var c2 = document.createElement('div');
c2.setAttribute("class", "sk  react");

var d2 = document.createElement('span')
d2.setAttribute("class", "dot");


container2.append(c2, d2);
lic2.append(container2);



var lic31 = document.createElement('li');

var container31 = document.createElement('div');
container31.setAttribute("class", "container");

var c31 = document.createElement('div');
c31.setAttribute("class", "sk redu");

var d31 = document.createElement('span')
d31.setAttribute("class", "dot");


container31.append(c31, d31);
lic31.append(container31);




var lic44 = document.createElement('li');

var container44 = document.createElement('div');
container44.setAttribute("class", "container");

var c44 = document.createElement('div');
c44.setAttribute("class", "sk mongo");

var d44 = document.createElement('span')
d44.setAttribute("class", "dot");


container44.append(c44, d44);
lic44.append(container44);


var lic5 = document.createElement('li');

var container5 = document.createElement('div');
container5.setAttribute("class", "container");

var c5 = document.createElement('div');
c5.setAttribute("class", "sk mongo");

var d5 = document.createElement('span')
d5.setAttribute("class", "dot");


container5.append(c5, d5);
lic5.append(container5);

ul2.append(lic, lic1, lic121, lic2, lic31, lic44, lic5);



lib.append(ul2);
ul.append(lia, lib)







// ..............................


var h22a = document.createElement('h3')
h22a.setAttribute("class", "cen");
h22a.innerHTML = "Additional Skill";

var ula = document.createElement('ul');
ula.setAttribute("class", "tech");

var liaa = document.createElement('li');

var ul1a = document.createElement('ul');
ul1a.setAttribute("class", "skills");

var li1a = document.createElement('li');
li1a.innerHTML = "JavaScript";
var li2a = document.createElement('li');
li2a.innerHTML = "CSS";
var li3a = document.createElement('li');
li3a.innerHTML = "HTML";
var li4a = document.createElement('li');
li4a.innerHTML = "React";
var li5a = document.createElement('li');
li5a.innerHTML = "Redux";

ul1a.append(li1a, li2a, li3a, li4a, li5a);

liaa.append(ul1a);

var liba = document.createElement('li');

var ul2a = document.createElement('ul');
ul2a.setAttribute("class", "skills");

var lica = document.createElement('li');

var containera = document.createElement('div');
containera.setAttribute("class", "container");

var ca = document.createElement('div');
ca.setAttribute("class", "sk java");

var da = document.createElement('span')
da.setAttribute("class", "dot");


containera.append(ca, da);
lica.append(containera);


var lic1a = document.createElement('li');

var container1a = document.createElement('div');
container1a.setAttribute("class", "container");

var c1a = document.createElement('div');
c1a.setAttribute("class", "sk css");

var d1a = document.createElement('span')
d1a.setAttribute("class", "dot");


container1a.append(c1a, d1a);
lic1a.append(container1a);


var lic121a = document.createElement('li');

var container121a = document.createElement('div');
container121a.setAttribute("class", "container");

var c121a = document.createElement('div');
c121a.setAttribute("class", "sk html");

var d121a = document.createElement('span')
d121a.setAttribute("class", "dot");


container1a.append(c121a, d121a);
lic121a.append(container121a);


var lic2a = document.createElement('li');

var container2a = document.createElement('div');
container2a.setAttribute("class", "container");

var c2a = document.createElement('div');
c2a.setAttribute("class", "sk  react");

var d2a = document.createElement('span')
d2a.setAttribute("class", "dot");


container2a.append(c2a, d2a);
lic2a.append(container2a);



var lic31a = document.createElement('li');

var container31a = document.createElement('div');
container31a.setAttribute("class", "container");

var c31a = document.createElement('div');
c31a.setAttribute("class", "sk redu");

var d31a = document.createElement('span')
d31a.setAttribute("class", "dot");


container31a.append(c31a, d31a);
lic31a.append(container31a);



ul2a.append(lica, lic1a, lic121a, lic2a, lic31a);



liba.append(ul2a);
ula.append(liaa, liba);



skill.append(i1, h21, h22, ul, h22a, ula);



// skill done.....

var wrk = document.createElement('div');
wrk.setAttribute('class', 'workexperience');


var iwrk = document.createElement('i');
iwrk.setAttribute('class', 'fas fa-briefcase');

var h2wrkk = document.createElement('h2');
h2wrkk.innerHTML = "Work experience";

var headwrk = document.createElement('div');
headwrk.setAttribute('class', 'headi');

var bwrk = document.createElement('b');
bwrk.innerHTML = "Event Manager";

var subwrk = document.createElement('span');
subwrk.setAttribute('class', 'subtitle');
subwrk.innerHTML = "03/2014-02/2017";

headwrk.append(bwrk,subwrk);

var sub1wrk = document.createElement('span');
sub1wrk.innerHTML = "C3 Presents,Washington DC";

var ulwrk = document.createElement('ul');
ulwrk.setAttribute('class', 'work');

var liwrk1 = document.createElement('li');

var ppwrk1 = document.createElement('p');
ppwrk1.innerHTML = "Lead and execute al phases of event planning and production spanning committeerecruitment,training,vendor relationships and on-site facilitation";

liwrk1.append(ppwrk1);

var liwrk2 = document.createElement('li');
var ppwrk2 = document.createElement('p');
ppwrk2.innerHTML = "Brought new business to the organization through relentless networking and stewardship which helped the company win the bid for the State Department Summit on the Middle East and, the companies largest civic event to date, the United State of Women";
liwrk2.append(ppwrk2);


var liwrk3 = document.createElement('li');
var ppwrk3 = document.createElement('p');
ppwrk3.innerHTML = "Exercise fiscal control over budget creation, tracking and reporting Collaborate with employees at all organizational levels to advance cohesive operations.";
liwrk3.append(ppwrk3);




ulwrk.append(liwrk1, liwrk2, liwrk3);

wrk.append(iwrk, h2wrkk, headwrk, bwrk, subwrk, sub1wrk, ulwrk);

bor.append(profil, skill, wrk);

bot.append(bor);


// bottom ends...

var bot1=document.createElement('div');

var ibott=document.createElement('i');
ibott.setAttribute("class", "fas fa-briefcase");

var wrkexp=document.createElement('div');
wrkexp.setAttribute("class","workexperience");

var hh2wrk = document.createElement('h2')
hh2wrk.innerHTML = "Work experience"

var wrkhedi=document.createElement('div');
wrkhedi.setAttribute("class","headi");

var wrkb=document.createElement('b');
wrkb.innerHTML = "Community Relation Manager"


var wrksubt=document.createElement('span');
wrksubt.innerHTML = "03/2014-02/2017";
wrksubt.setAttribute("class","subtitle");

wrkhedi.append(wrkb,wrksubt);

var wrksubt1=document.createElement('span');
wrksubt1.innerHTML = "C3 Presents,Washington DC";

var wrkull=document.createElement('ul');
wrkull.setAttribute("class","work");

var wrkli1=document.createElement('li');
var wrkp1=document.createElement('p');
wrkp1.innerHTML="Arranging presentations and pitch deck.";

wrkli1.append(wrkp1);

var wrkli2=document.createElement('li');
var wrkp2=document.createElement('p');
wrkp2.innerHTML=" Designing a PR plan and establishing important focus points.";
wrkli2.append(wrkp2);

var wrkli3=document.createElement('li');
var wrkp3=document.createElement('p');
wrkp3.innerHTML="Designing, creating and managing content across mutiple communication platforms. ";
wrkli3.append(wrkp3);


var wrkli4=document.createElement('li');
var wrkp4=document.createElement('p');
wrkp4.innerHTML="Building relationships with key media players. ";
wrkli4.append(wrkp4);

wrkull.append(wrkli1,wrkli2,wrkli3,wrkli4);
wrkexp.append(hh2wrk,wrkhedi,wrksubt1,wrkull);


// ..........edu
var educa=document.createElement('div');
educa.setAttribute("class","Education");


var ibott1=document.createElement('i');
ibott1.setAttribute("class", "fas fa-graduation-cap");



var h2wrk1 = document.createElement('h2')
h2wrk1.innerHTML = "Education"

var wrkhedi1=document.createElement('div');
wrkhedi1.setAttribute("class","headi");

var wrkb1=document.createElement('b');
wrkb1.innerHTML = "Engineering Immersion Program"


var wrksubt1=document.createElement('span');
wrksubt1.innerHTML = "03/2014-02/2017";
wrksubt1.setAttribute("class","subtitle");

wrkhedi1.append(wrkb1,wrksubt1);

var wrksubt11=document.createElement('span');
wrksubt11.innerHTML = "C3 Presents,Washington DC";

var wrkull1=document.createElement('ul');
wrkull1.setAttribute("class","work");

var wrkli11=document.createElement('li');
var wrkp11=document.createElement('p');
wrkp11.innerHTML="Project-focused intensive program with emphasis on Mongo, Express, React, and JavaScript(MERN) technical stack";

wrkli11.append(wrkp11);

var wrkli21=document.createElement('li');
var wrkp21=document.createElement('p');
wrkp21.innerHTML=" Developed a full-stack web application RenewU, using React that allows users to explore various aspects of meditation. User's progress is stored on a backend created using Node and MongoDB.";
wrkli21.append(wrkp21);

var wrkli31=document.createElement('li');
var wrkp31=document.createElement('p');
wrkp31.innerHTML="Designing, creating and managing content across mutiple communication platforms. ";
wrkli31.append(wrkp31);


var wrkli41=document.createElement('li');
var wrkp41=document.createElement('p');
wrkp41.innerHTML="Developed a language learning app. Foodie Phonetics using spaced repetition and a linked list data structure React was used to create the front end components while Node and Mongo were used to create a backend that stores user data ";
wrkli41.append(wrkp41);

var wrkli51=document.createElement('li');
var wrkp51=document.createElement('p');
wrkp51.innerHTML=" Developed a concierge app. Pley. for individuals looking for curated suggestions when visiting a new place. React was used to develop the front end which includes real-time chat, drag and drop and variety of advanced features. The backend, built using Node, Express, and Monga takes advantage of  wel developed RESTful API Geospatial searching, and user authentication with JWT. ";
wrkli51.append(wrkp51);

wrkull1.append(wrkli11,wrkli21,wrkli31,wrkli41,wrkli51);
educa.append(ibott1,h2wrk1,wrkhedi1,wrksubt11,wrkull1);







bot1.append(ibott,wrkexp,educa);

res.append(bot,bot1);

document.body.append(res);
