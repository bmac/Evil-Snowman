/* Author: bmacs

 */




function trackClick (event) {
    event.preventDefault();
    var $originStar = $($(".star")[0]);
    var newStar = $originStar.clone();
    var $this = $(this);
    newStar.css("top",$this.position().top);
    newStar.css("left",$this.position().left);
    newStar.css("display","inline");
    newStar.addClass("approchHungry");
    newStar.bind('webkitAnimationEnd',
                 function(event){
                     $(this).remove();
                     growHungry();
                 });


    var href = $this.children().first().attr("href");
    $("#visitedLinks").children().last().after("<div><a href=''>"+href+"</a></div>");
    $this.replaceWith(newStar);
    newStar.animate({"top": "-80", left: "200"}, 800, growHungry);
}

function growHungry(){
    $(this).remove();
    bmac.hungrySize = bmac.hungrySize + 100;
    $("#hungry").animate({"font-size": bmac.hungrySize+ "%"}, 200);
}


function setLink(id){
    var href = bmac.tophundred.shift();
    var link = $("#"+id);
    if (link.length === 0){
        link = createNewLink(id);
    }

    link.children().first().attr("href", href);
    console.log($("#"+id).children().first().attr("href"));
}

function createNewLink(id){
    var newLink = $("<div id='"+id+"' class='link'><a  href='404.html'>☃</a></div>");
    $("#gameContainer").children().last().after(newLink);
    newLink.click(trackClick);
    return newLink;
}


var bmac = {};
bmac.hungrySize = 300;

bmac.tophundred = [ 'http://www.amazon.com/',
                    'http://www.about.com/',
                    'http://www.bartleby.com/',
                    'http://groups.google.com/',
                    'http://news.google.com/',
                    'http://www.cnn.com/',
                    'http://www.ebay.com/',
                    'http://www.download.com/',
                    'http://www.craigslist.org/',
                    'http://www.reference.com/',
                    'http://www.wikipedia.org/',
                    'http://www.beliefnet.com/',
                    'http://www.anywho.com/',
                    'http://www.weather.com/',
                    'http://www.search.com/',
                    'http://www.hotmail.com/',
                    'http://www.nih.gov/',
                    'http://www.cnet.com/',
                    'http://www.lrb.co.uk/',
                    'http://www.refdesk.com/',
                    'http://www.mayoclinic.com/',
                    'http://www.guidestar.org/',
                    'http://www.firstgov.gov/',
                    'http://www.bbc.com/',
                    'http://www.imdb.com/',
                    'http://www.expedia.com/',
                    'http://www.slate.com/',
                    'http://www.nutrition.gov/',
                    'http://www.altmedicine.com/',
                    'http://www.citysearch.com/',
                    'http://www.monster.com/',
                    'http://www.vote-smart.org/',
                    'http://www.sciam.com/',
                    'http://www.espn.com/',
                    'http://www.encarta.com/',
                    'http://www.findlaw.com/',
                    'http://www.nature.com/',
                    'http://www.usatoday.com/news/states/ns1.htm',
                    'http://www.allposters.com/',
                    'http://www.time.com/',
                    'http://www.mapquest.com/',
                    'http://www.abebooks.com/',
                    'http://www.allmusic.com/',
                    'http://www.medlineplus.gov/',
                    'http://www.dmoz.org/',
                    'http://www.loc.gov/',
                    'http://windowsmedia.msn.com/radiotuner/',
                    'http://www.ucomics.com/',
                    'http://www.infoplease.com/',
                    'http://www.alexa.com/',
                    'http://vlmp.museophile.com/',
                    'http://www.un.org/',
                    'http://www.sacred-texts.com/',
                    'http://www.artforum.com/',
                    'http://www.webmd.com/',
                    'http://www.vlib.org/',
                    'http://moneycentral.msn.com/',
                    'http://www.classmates.com/',
                    'http://europa.eu.int/',
                    'http://groups.yahoo.com/',
                    'http://www.nybooks.com/',
                    'http://www.jokes.com/',
                    'http://www.priceline.com/',
                    'http://www.rottentomatoes.com/',
                    'http://www.ipl.org/',
                    'http://www.acefitness.com/',
                    'http://www.quicken.com/',
                    'http://www.andante.com/',
                    'http://lpi.oregonstate.edu/infocenter/',
                    'http://www.pcmag.com/',
                    'http://www.timesonline.co.uk/',
                    'http://www.fedworld.gov/jobs/jobsearch.html',
                    'http://www.iht.com/',
                    'http://onlinebooks.library.upenn.edu/',
                    'http://www.pogo.com/',
                    'http://www.bizrate.com/',
                    'http://www.billboard.com/',
                    'http://world.altavista.com/#TranslationBar',
                    'http://www.give.org/',
                    'http://mathworld.wolfram.com/',
                    'http://www.webring.org/',
                    'http://www.careerbuilder.com/',
                    'http://www.411.com/',
                    'http://www.epinions.com/',
                    'http://www.ucalgary.ca/%7Elipton/journals.html',
                    'http://www.aldaily.com/',
                    'http://www.nolopress.com/',
                    'http://www.classical.net/',
                    'http://www.blogger.com/',
                    'http://www.nytimes.com/',
                    'http://www.earthcam.com/',
                    'http://www.bbb.org/',
                    'http://www.intelihealth.com/',
                    'http://www.livejournal.com/',
                    'http://www.bbc.co.uk/religion/',
                    'http://www.artsjournal.com/',
                    'http://www.ticketmaster.com/',
                    'http://www.gutenberg.net/'];





// document.ready
$("document").ready(function () {
$(".link").click(trackClick);

setInterval(function() {setLink("link1Animation");}, 5000);
setInterval(function() {setLink("link2Animation");}, 3000);
setInterval(function() {setLink("link3Animation");}, 7000);
setInterval(function() {setLink("link4Animation");}, 4000);
setInterval(function() {setLink("link5Animation");}, 3500);
});