
window.onload = function loaded(){



var choiceArray = [];
var guy;
var correct = 0;
var wrong = 0;

var players = [

    {
        name: "Stephen Louis",
        image: "assets/images/stephenlouis.jpg",
        hometown: "West Palm Beach, FL",
        position: "WR",
        height: "N/A",
        weight: "N/A",
        composite: "0.8051",
        committed: "11/18/2013",
        major: "Graduate",
        number: "1"
    },
    {
        name: "Louis Acceus",
        image: "assets/images/lAcceus.jpg",
        hometown: "Montvale, NJ",
        position: "OLB",
        height: "6-1",
        weight: "190",
        composite: "0.8625",
        committed: "1/15/2017",
        major: "Sports Management",
        number: "2"
    },
    {
        name: "Kelvin Harmon",
        image: "assets/images/kHarmon.jpg",
        hometown: "Palmayra, NJ",
        position: "WR",
        height: "6-3",
        weight: "213",
        composite: "0.8655",
        committed: "2/1/2016",
        major: "Parks, Recreation, and Tourism Management",
        number: "3"
    },
    {
        name: "Nick McCloud",
        image: "assets/images/nMccloud.jpg",
        hometown: "Rock Hill, SC",
        position: "CB",
        height: "6-1",
        weight: "175",
        composite: "0.8487",
        committed: "1/30/2016",
        major: "Management",
        number: "4"
    },
    {
        name: "Cary Angeline",
        image: "assets/images/cAngeline.jpg",
        hometown: "Exton, PA",
        position: "TE",
        height: "6-7",
        weight: "240",
        composite: "0.9064",
        committed: "Transfer",
        major: "N/A",
        number: "6"
    },
    {
        name: "Matt McKay",
        image: "assets/images/mMckay.jpg",
        hometown: "Raleigh, NC",
        position: "DUAL",
        height: "6-4",
        weight: "185",
        composite: "0.8560",
        committed: "2/26/2016",
        major: "Explatory Studies",
        number: "7"
    },
    {
        name: "Maurice Trowell",
        image: "assets/images/mTrowell.jpg",
        hometown: "Durham, NC",
        position: "CB",
        height: "5-11",
        weight: "191",
        composite: "0.8373",
        committed: "6/22/2013",
        major: "Interdisciplinary Studies",
        number: "8"
    },
    {
        name: "Tanner Ingle",
        image: "assets/images/tIngle.jpg",
        hometown: "Orlando, FL",
        position: "DB",
        height: "5-9",
        weight: "180",
        composite: "0.8567",
        committed: "12/12/2017",
        major: "N/A",
        number: "10"
    },
    {
        name: "Jakobi Meyers",
        image: "assets/images/jMeyers.jpg",
        hometown: "Lithonia, GA",
        position: "PRO",
        height: "N/A",
        weight: "N/A",
        composite: "0.8037",
        committed: "1/19/2015",
        major: "Sports Management",
        number: "11"
    },
    {
        name: "Brock Miller",
        image: "assets/images/bMiller.jpg",
        hometown: "Vero Beach, FL",
        position: "OLB",
        height: "6-4",
        weight: "215",
        composite: "0.8350",
        committed: "7/30/2015",
        major: "Science, Technology, and Society",
        number: "12"
    },
    {
        name: "Devin Leary",
        image: "assets/images/dLeary.jpg",
        hometown: "Sicklerville, NJ",
        position: "PRO",
        height: "6-1",
        weight: "189",
        composite: "0.8905",
        committed: "4/6/2017",
        major: "Management",
        number: "13"
    },
    {
        name: "Dexter Wright",
        image: "assets/images/dWright.jpg",
        hometown: "Wilson, NC",
        position: "OLB",
        height: "6-2",
        weight: "232",
        composite: "0.8266",
        committed: "6/20/2013",
        major: "Social Work",
        number: "14"
    },
    {
        name: "Ryan Finley",
        image: "assets/images/rFinley.jpg",
        hometown: "Phoenix, AZ",
        position: "PRO",
        height: "6-4",
        weight: "205",
        composite: "0.8600",
        committed: "Transfer",
        major: "Graduate",
        number: "15"
    },
    {
        name: "Chris Ingram",
        image: "assets/images/cIngram.jpg",
        hometown: "Mooresville, NC",
        position: "CB",
        height: "6-0",
        weight: "175",
        composite: "0.8634",
        committed: "7/25/2015",
        major: "Sports Management",
        number: "15"
    },
    {
        name: "CJ Riley",
        image: "assets/images/cRiley.jpg",
        hometown: "Pompano Beach, FL",
        position: "WR",
        height: "6-4",
        weight: "180",
        composite: "0.8465",
        committed: "11/27/2015",
        major: "Sports Management",
        number: "19"
    },
    {
        name: "Ricky Person, Jr",
        image: "assets/images/rPerson.jpg",
        hometown: "Wake Forest, NC",
        position: "RB",
        height: "6-2",
        weight: "202",
        composite: "0.9502",
        committed: "1/18/2017",
        major: "Communication",
        number: "20"
    },
    {
        name: "Stephen Griffin",
        image: "assets/images/sGriffin.jpg",
        hometown: "Charlotte, NC",
        position: "S",
        height: "6-2",
        weight: "205",
        composite: "0.8564",
        committed: "Transfer",
        major: "Communication",
        number: "21"
    },
    {
        name: "Isaiah Stallings",
        image: "assets/images/iStallings.jpg",
        hometown: "Fayetteville, NC",
        position: "S",
        height: "6-4",
        weight: "200",
        composite: "0.8656",
        committed: "12/7/2015",
        major: "Business Administration",
        number: "22"
    },
    {
        name: "Reggie Gallaspy, Jr",
        image: "assets/images/rGallaspy.jpg",
        hometown: "Greensboro, NC",
        position: "RB",
        height: "5-11",
        weight: "205",
        composite: "0.8736",
        committed: "9/27/2014",
        major: "Communication",
        number: "25"
    },
    {
        name: "Trent Pennix",
        image: "assets/images/tPennix.jpg",
        hometown: "Raleigh, NC",
        position: "RB",
        height: "6-2",
        weight: "200",
        composite: "0.8530",
        committed: "6/9/2017",
        major: "Undeclared",
        number: "26"
    },
    {
        name: "Vernon Grier",
        image: "assets/images/vGrier.jpg",
        hometown: "Charlotte, NC",
        position: "WR",
        height: "N/A",
        weight: "N/A",
        composite: "0.8271",
        committed: "1/18/2015",
        major: "Sports Management",
        number: "27"
    },
    {
        name: "Kishawn Miller",
        image: "assets/images/kMiller.jpg",
        hometown: "Milledgeville, GA",
        position: "CB",
        height: "5-10",
        weight: "170",
        composite: "0.8415",
        committed: "6/9/2017",
        major: "Sports Management",
        number: "28"
    },
    {
        name: "Dylan Parham",
        image: "assets/images/dParham.jpg",
        hometown: "Raleigh, NC",
        position: "TE",
        height: "6-4",
        weight: "198",
        composite: "0.8494",
        committed: "11/8/2014",
        major: "Exploratory Studies",
        number: "28"
    },
    {
        name: "Alim McNeill",
        image: "assets/images/aMcneill.jpg",
        hometown: "Raleigh, NC",
        position: "DT",
        height: "6-2",
        weight: "299",
        composite: "0.9234",
        committed: "11/4/2017",
        major: "Undeclared",
        number: "29"
    },
    {
        name: "Jarius Morehead",
        image: "assets/images/jMorehead.jpg",
        hometown: "Whitsett, NC",
        position: "S",
        height: "N/A",
        weight: "N/A",
        composite: "0.8393",
        committed: "6/14/2014",
        major: "Sports Management",
        number: "31"
    },
    {
        name: "Chris Dunn",
        image: "assets/images/cDunn.jpg",
        hometown: "Lexington, NC",
        position: "K",
        height: "5-10",
        weight: "160",
        composite: "0.7865",
        committed: "6/24/2016",
        major: "Agricultural Science",
        number: "32"
    },
    {
        name: "James Smith-Williams",
        image: "assets/images/jSW.jpg",
        hometown: "Raleigh, NC",
        position: "SDE",
        height: "6-4",
        weight: "210",
        composite: "0.8269",
        committed: "7/22/2014",
        major: "Business Administration",
        number: "39"
    },
    {
        name: "Isaiah Moore",
        image: "assets/images/iMoore.jpg",
        hometown: "Chester, VA",
        position: "OLB",
        height: "6-2",
        weight: "205",
        composite: "0.8517",
        committed: "7/22/2016",
        major: "Communication",
        number: "41"
    },
    {
        name: "Dylan Autenrieth",
        image: "assets/images/dAutenrieth.jpg",
        hometown: "Dallas, GA",
        position: "TE",
        height: "6-5",
        weight: "215",
        composite: "0.8290",
        committed: "6/18/2015",
        major: "Sports Management",
        number: "42"
    },
    {
        name: "Joe Babros",
        image: "assets/images/jBabros.jpg",
        hometown: "Mission Viejo, CA",
        position: "SDE",
        height: "6-5",
        weight: "250",
        composite: "0.8623",
        committed: "Transfer",
        major: "Sports Management",
        number: "44"
    },
    {
        name: "Darian Roseboro",
        image: "assets/images/dRoseboro.jpg",
        hometown: "Lincolnton, NC",
        position: "SDE",
        height: "6-4",
        weight: "285",
        composite: "0.9509",
        committed: "10/11/2014",
        major: "Sports Management",
        number: "45"
    },
    {
        name: "Kendall Brown",
        image: "assets/images/kBrown.jpg",
        hometown: "Jacksonville, FL",
        position: "OT",
        height: "6-4",
        weight: "265",
        composite: "0.7824",
        committed: "1/30/2016",
        major: "Exploratory Studies",
        number: "52"
    },
    {
        name: "Ibrahim Kante",
        image: "assets/images/iKante.jpg",
        hometown: "New York, NY",
        position: "WDE",
        height: "6-5",
        weight: "240",
        composite: "0.8269",
        committed: "1/22/2017",
        major: "Management",
        number: "52"
    },
    {
        name: "Tyler Jones",
        image: "assets/images/tJones.jpg",
        hometown: "Stone Mountain, GA",
        position: "OG",
        height: "6-3",
        weight: "300",
        composite: "0.8575",
        committed: "9/30/2013",
        major: "Communication",
        number: "53"
    },
    {
        name: "Deonte Holden",
        image: "assets/images/dHolden.jpg",
        hometown: "Hyattsville, MD",
        position: "SDE",
        height: "6-4",
        weight: "240",
        composite: "0.8472",
        committed: "6/24/2013",
        major: "Graduate",
        number: "55"
    },
    {
        name: "Kollin Byers",
        image: "assets/images/kByers.jpg",
        hometown: "Shelby, NC",
        position: "OL",
        height: "6-4",
        weight: "276",
        composite: "0.8090",
        committed: "7/24/2015",
        major: "Sports Management",
        number: "56"
    },
    {
        name: "Devontae McCrae",
        image: "assets/images/dMccrae.jpg",
        hometown: "Miami, FL",
        position: "SDE",
        height: "6-5",
        weight: "255",
        composite: "0.8423",
        committed: "7/7/2017",
        major: "Undeclared",
        number: "58"
    },
    {
        name: "Liam Ryan",
        image: "assets/images/lRyan.jpg",
        hometown: "Cary, NC",
        position: "OT",
        height: "6-3",
        weight: "290",
        composite: "N/A",
        committed: "N/A",
        major: "Exploratory Studies",
        number: "59"
    },
    {
        name: "Bryson Speas",
        image: "assets/images/placeholder.png",
        hometown: "Greensboro, NC",
        position: "OG",
        height: "6-4",
        weight: "260",
        composite: "0.8183",
        committed: "10/9/2016",
        major: "Exploratory Studies",
        number: "62"
    },
    {
        name: "Kahric Belle",
        image: "assets/images/kBelle.jpg",
        hometown: "Miami, FL",
        position: "OT",
        height: "6-6",
        weight: "292",
        composite: "0.8526",
        committed: "12/16/2017",
        major: "Undeclared",
        number: "64"
    },
    {
        name: "Garrett Bradbury",
        image: "assets/images/gBradbury.jpg",
        hometown: "Charlotte, NC",
        position: "OC",
        height: "6-3",
        weight: "300",
        composite: "0.8031",
        committed: "4/24/2013",
        major: "Graduate",
        number: "65"
    },
    {
        name: "Joshua Fedd-Jackson",
        image: "assets/images/jFedd.jpg",
        hometown: "North Arlington, NJ",
        position: "OG",
        height: "6-3",
        weight: "300",
        composite: "0.8660",
        committed: "1/15/2017",
        major: "Exploratory Studies",
        number: "66"
    },
    {
        name: "Justin Witt",
        image: "assets/images/jWitt.jpg",
        hometown: "New Lenox, IL",
        position: "OT",
        height: "6-6",
        weight: "255",
        composite: "0.8603",
        committed: "6/24/2016",
        major: "Sports Management",
        number: "67"
    },
    {
        name: "Terronne Prescod",
        image: "assets/images/tPrescod.jpg",
        hometown: "Decatur, GA",
        position: "OT",
        height: "6-5",
        weight: "334",
        composite: "0.8431",
        committed: "6/29/2013",
        major: "Science, Technology, and Society",
        number: "70"
    },
    {
        name: "Joe Sculthorpe",
        image: "assets/images/jSculthorpe.jpg",
        hometown: "Hampstead, NC",
        position: "OG",
        height: "6-2",
        weight: "285",
        composite: "0.8334",
        committed: "9/21/2014",
        major: "Criminology",
        number: "71"
    },
    {
        name: "Phillip Walton, Jr",
        image: "assets/images/pWalton.jpg",
        hometown: "Charlotte, NC",
        position: "OT",
        height: "6-6",
        weight: "N/A",
        composite: "0.8353",
        committed: "4/1/2014",
        major: "Agricultural Business",
        number: "72"
    },
    {
        name: "Justin Chase",
        image: "assets/images/jChase.jpg",
        hometown: "Chesapeake, VA",
        position: "OT",
        height: "6-6",
        weight: "265",
        composite: "0.8000",
        committed: "12/8/2015",
        major: "Sports Management",
        number: "73"
    },
    {
        name: "Grant Gibson",
        image: "assets/images/gGibson.jpg",
        hometown: "Charlotte, NC",
        position: "DT",
        height: "6-1",
        weight: "305",
        composite: "0.8721",
        committed: "3/1/2016",
        major: "Management",
        number: "73"
    },
    {
        name: "Emanuel McGirt, Jr",
        image: "assets/images/eMcGirt.jpg",
        hometown: "Durham, NC",
        position: "OT",
        height: "6-6",
        weight: "300",
        composite: "0.9109",
        committed: "11/19/2014",
        major: "English",
        number: "74"
    },
    {
        name: "Jaylnn Strickland",
        image: "assets/images/jStrickland.jpg",
        hometown: "Waycross, GA",
        position: "OT",
        height: "6-6",
        weight: "295",
        composite: "0.8540",
        committed: "7/4/2017",
        major: "Communication",
        number: "75"
    },
    {
        name: "Gabriel Gonzalez",
        image: "assets/images/gGonzalez.jpg",
        hometown: "Mebane, NC",
        position: "OT",
        height: "6-4",
        weight: "275",
        composite: "0.8485",
        committed: "6/24/2017",
        major: "Undeclared",
        number: "78"
    },
    {
        name: "Max Fisher",
        image: "assets/images/mFisher.jpg",
        hometown: "Washington, DC",
        position: "WR",
        height: "6-3",
        weight: "188",
        composite: "0.8372",
        committed: "8/2/2016",
        major: "Sports Management",
        number: "82"
    },
    {
        name: "Jasiah Provillon",
        image: "assets/images/jProvillon.jpg",
        hometown: "Irvington, NJ",
        position: "WR",
        height: "6-1",
        weight: "185",
        composite: "0.8742",
        committed: "6/24/2017",
        major: "Undeclared",
        number: "84"
    },
    {
        name: "Devin Carter",
        image: "assets/images/dCarter.jpg",
        hometown: "Clayton, NC",
        position: "WR",
        height: "6-4",
        weight: "205",
        composite: "0.8639",
        committed: "5/12/2017",
        major: "Undeclared",
        number: "85"
    },
    {
        name: "Emeka Emezie",
        image: "assets/images/eEmezie.jpg",
        hometown: "Waxhaw, NC",
        position: "WR",
        height: "6-3",
        weight: "200",
        composite: "0.8665",
        committed: "2/1/2017",
        major: "Exploratory Studies",
        number: "86"
    },
    {
        name: "Thayer Thomas",
        image: "assets/images/tThomas.jpg",
        hometown: "Wake Forest, NC",
        position: "WR",
        height: "6-1",
        weight: "180",
        composite: "N/A",
        committed: "Walk-On",
        major: "N/A",
        number: "87"
    },
    {
        name: "Adam Boselli",
        image: "assets/images/aBoselli.jpg",
        hometown: "Jacksonville, FL",
        position: "TE",
        height: "6-4",
        weight: "210",
        composite: "0.8283",
        committed: "11/6/2016",
        major: "Engineering",
        number: "88"
    },
    {
        name: "AJ Cole",
        image: "assets/images/ajCole.jpg",
        hometown: "Atlanta, GA",
        position: "P",
        height: "6-4",
        weight: "215",
        composite: "0.8230",
        committed: "N/A",
        major: "Industrial Engineering",
        number: "90"
    },
    {
        name: "Shug Frazier",
        image: "assets/images/sFrazier.jpg",
        hometown: "Buford, GA",
        position: "DT",
        height: "6-2",
        weight: "321",
        composite: "0.8838",
        committed: "10/29/2015",
        major: "Communication",
        number: "90"
    },
    {
        name: "Eurndraus Bryant",
        image: "assets/images/eBryant.jpg",
        hometown: "North Charleston, SC",
        position: "DT",
        height: "6-1",
        weight: "330",
        composite: "0.8316",
        committed: "2/3/2015",
        major: "Sports Management",
        number: "91"
    },
    {
        name: "Kyle Bambard",
        image: "assets/images/kBambard.jpg",
        hometown: "Walled Lake, MI",
        position: "K",
        height: "5-8",
        weight: "190",
        composite: "0.7764",
        committed: "11/18/2013",
        major: "Sports Management",
        number: "92"
    },
    {
        name: "Larrell Murchison",
        image: "assets/images/lMurchison.jpg",
        hometown: "Elizabethtown, NC",
        position: "SDE",
        height: "6-4",
        weight: "290",
        composite: "0.8454",
        committed: "2/1/2017",
        major: "Sports Management",
        number: "92"
    },
    {
        name: "Kennan Solomon",
        image: "assets/images/kSolomon.jpeg",
        hometown: "Roxboro, NC",
        position: "SDE",
        height: "6-5",
        weight: "275",
        composite: "N/A",
        committed: "Transfer",
        major: "N/A",
        number: "94"
    },
    {
        name: "Derrick Eason",
        image: "assets/images/dEason.jpg",
        hometown: "Norfolk, VA",
        position: "SDE",
        height: "6-4",
        weight: "240",
        composite: "0.8464",
        committed: "1/26/2018",
        major: "Undeclared",
        number: "95"
    },
    {
        name: "Dante Johnson",
        image: "assets/images/dJohnson.jpg",
        hometown: "Apopka, FL",
        position: "SDE",
        height: "6-4",
        weight: "252",
        composite: "0.8037",
        committed: "1/24/2017",
        major: "Exploratory Studies",
        number: "96"
    },
    {
        name: "Xavier Lyas",
        image: "assets/images/xLyas.jpg",
        hometown: "Plant City, FL",
        position: "WDE",
        height: "6-5",
        weight: "210",
        composite: "0.8391",
        committed: "6/16/2016",
        major: "Management",
        number: "97"
    },
    {
        name: "Joseph Boletepli",
        image: "assets/images/josephB.jpg",
        hometown: "Wake Forest, NC",
        position: "SDE",
        height: "6-3",
        weight: "244",
        composite: "0.8622",
        committed: "11/12/2017",
        major: "Management",
        number: "99"
    },
    {
        name: "Damontay Rhem",
        image: "assets/images/dRhem.jpg",
        hometown: "Wendell, NC",
        position: "RB",
        height: "5-11",
        weight: "215",
        composite: "N/A",
        committed: "Transfer",
        major: "Sports Management",
        number: "5"
    }

]// close players array

$("#start").on("click", function(){
    $("#start").text("Submit");
    // $("#start").hide();
    $("#table").show();
    

    // document.getElementById("hint").disabled = true;
    choiceArray = [];
    $("#help").html("");
    game();
    

}); //end start on click



function game(){
    $("#help").html("");
    choiceArray = [];
    var random = randomNum();
    var i = random;
    guy = players[i];
    //var random = (Math.floor(Math.random() * 6) + 1);
    
    console.log(random);
  

    $("#bio").html(guy.hometown + '<br/>' + guy.position + '<br/>' + guy.height + '<br/>' + guy.weight + '<br/>' + guy.composite + '<br/>' + guy.committed + '<br/>' + guy.major);
    // $("#image").html('<img src= "'+ players[i].image +'" width="182px" height="250px" alt="image"></img>');

    $("#image").html('<img src="' + guy.image + '" alt="image">');

    $("#hint").show();

    $("#hint").on("click", function(){
        $("#help").html('<br/>' + "I wear number " + guy.number + " for the Wolfpack.");
    }); //end hint

    

    choices(i);
    
}// end game function

function randomNum(){
    var random = (Math.floor(Math.random() * players.length) );
    return random;
}//end randomNum function

function choices(i){   //FIRST, SECOND, AND THIRD SHOULD NOW BECOME INDEXES FOR THE PLAYERS ARRAY
    
    var first = i;
    console.log("first", first);


    var second = randomNum();
    checkNum();
    var third = randomNum();
    checkNum();
    var fourth = randomNum();
    checkNum();
    var fifth = randomNum();
    checkNum();
    
    function checkNum(){
    if (first == second){
        second = randomNum();
        checkNum();
    }
    else if (third == first || third == second){
            third = randomNum();
            checkNum();
        } 
    else if(fourth == first || fourth == second || fourth == third){
            fourth = randomNum();
            checkNum();
    }
    else if(fifth == first || fifth == second || fifth == third || fifth == fourth){
            fifth = randomNum();
            checkNum();
    }

    }//end checkNum

choiceArray.push(first, second, third, fourth, fifth);


console.log("choicesArray", choiceArray);

$("#choices").html("");
list();
    
}// end choices

//CREATE A FUNCTION FOR 3 RADIO BUTTON PLAYER CHOICES
function list(){
    //for each index in choiceArray, append #choices with the player[index].name

    
    var shuffledArray = shuffle(choiceArray);

    shuffledArray.forEach(function(element){
        var man = players[element].name;
        // $("#choices").append(man + '<br/>');
       
        $("#choices").append('<p><input type="radio" name="'+ man +  '">'  + man  + '</input></p>');
        
        console.log("name", players[element].name);
    });//end shuffled for eEach

        


    $('input:radio').change(
        function(){
            if ($(this).is(':checked')) {
                test(this.name);
            }
        });




    


}//close list()


// $("#submit").on("click", function(){
//     choiceArray = [];
    
// });


function shuffle(array){

    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }

  function test(name){
      console.log("test fired");
      if (name == guy.name){
          correct ++;
          console.log("Correct!" + " You have " + correct + " correct answers");
        $("#correct").html(correct);

        }
        else{
            wrong ++;
            console.log("Wrong.  The correct player is " + guy.name + ". You have " + wrong + " wrong answers");
            $("#wrong").html(wrong);
        }
        game();
  }



}// close window.onload 