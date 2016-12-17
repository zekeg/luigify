//mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm
/*m          pppriimm              oooooooooo                              m
m      pppppprrii m               ooooooooo                              m
m         ppprrriimmm                 oooooooo                           m
m ppppppppppprrrrii                   oooooooooo                         m
m       pppppprrr                     oooooo   oo                        m
m        ppp  ppr                     ooooooo                            m
m    ppppppppppiiii             iiiii  oooooooo                          m
m       ppp       iiiiiii  iiiiiiioo    oooooooo                         m
m       ppp      ooooo         oooooo    oo  ooooooooooo                 m
m     pp pp      ooooo         oooooo    oooo                            m
mpppppp  pl       ooo            oo      iooooo                          m
m       p l                              i  oooooo                       m
m      pp p                              i   oo  oo                      m
m    ppp pl            mmmmmmm           i    o                          m
m   p   ppll         mmmmmmmmmmmmm      ii    oo                         m
m   p  pp  l   m   mmmmmm    mmmmmm   m i       oo                       m
m     pp   ll  mmmmmmmm         mmmmmmmii        ooo                     m
m     p     l   mmmmaaaaaaaaaaaaa                                        m
m              u    .............     g    l u u i ggg i ffy y           m
m              u      aaaaaaaaaa     gg    l u u i g g i f y y           m
m              uu                    g     l u u i ggg i ffyyy           m
m               uu    i        i   ggg     l u u i   g i f  y            m
m                uuuu i       ii ggg       l uuu igggg i f  y            m
m                   uuiii    iiggg                                       m
m                       iiiiii                                           m
mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm*/

$(document).ready(function() {

    console.log("this thing on?");

    $("#submit").click(function() {
        textInput = $("#inputMessage").val();
        console.log(textInput);
        var text = luigify(textInput);
        $("#display").text(text);

        $(".hidden").removeClass();

    })
});

function luigify(textInput) {
    //Example String


    var testCases = ["I'm", "Im", "am", "are", "I", "my", "and", "but, it’s", "It's", "It", "they", "they’re", "that", "that’s", "who", "where", "why", "how", "to", "be", "in", "on", "of", "so", "good", "great", "and", "not", "always", "never", "sometimes", "still", "make", "or", "at", "with", "we", "We", "he", "she", "the", "is"];

    var negations = ["do not", "cannot", "can't", "won't", "will not", "does not", "can't", "doesn't", "don't"];

    var curses = ["piece of shit", "fucker", "asshole", "dick", "cocksucker", "motherfucker", "nerd", "dweeb", "bitch", "whore", "bastard", "slut", "cunt", "idiot", "fool", "terrible", "awful", "shitstain", "piss-stain"];

    var newCurses = ["mamaluke", "squistomad", "a bad pizza"];

    var negatives = ["terrible", "bad", "horrible", "sad", "tragedy", "disaster", "not good", "negative", "poor", "disasterous", "dire", "insensitive", "fruity", "palletable", "awful"];

    var ending = [" I'm a Luigi Primo!", " I'm Luigi!", " I'm a Luigi...Primo", " I make a the best pizza!", " Every Time.", " I'm a best wrestler.", " I'm a best wrestler and a strong!", " It's a not a good a pizza!"];


    function assembleArray(str) {
        //INCLUDE ANY RULES THAT REQUIRE THE FULL STRING OF TEXT HERE
        //INCLUDE ANY FORMAT STRIPS HERE
        var strArray = str.split(" ");
        return strArray;
    }

    var strArray = assembleArray(textInput);


    //Eventually Turn These Into a single call function that can be used on anything
    function randomEnding() {
        return ending[Math.floor(Math.random() * ending.length)];
    }

    function randomCurse() {
        return newCurses[Math.floor(Math.random() * newCurses.length)];
    }

    function addAToArray() {
        console.log("adding a")
            //suffix case
        for (var x = 0; x < strArray.length; x++) {
            console.log("examining word: " + strArray[x]);
            for (var y = 0; y < testCases.length; y++) {
                if (strArray[x] == testCases[y] && strArray[x + 1] != "a") {
                    //it hits index x and compares it to index y and then adds the word
                    strArray.splice(x + 1, 0, "a");
                    console.log("a");
                }
            }


        }
        //future include prefix case
        return strArray;
    }

    function aNoGood() {
        for (var x = 0; x < strArray.length; x++) {

            for (y = 0; y < negatives.length; y++) {

                if (strArray[x] == negatives[y]) {
                    strArray.splice(x, 1, "a no good");
                }
            }

        }
    }


    //Iterates through array of word strings
    function aNo() {
        for (var x = 0; x < strArray.length; x++) {
            //iterates through negations list
            for (y = 0; y < negations.length; y++) {
                //if there is a word match, perform the splice replacement
                if (strArray[x] == negations[y]) {
                    console.log("hit");
                    strArray.splice(x, 1, "a no");
                }
            }

        }
    }





    function mamaluke() {
        for (var x = 0; x < strArray.length; x++) {

            for (y = 0; y < curses.length; y++) {

                if (strArray[x] == curses[y]) {
                    strArray.splice(x, 1, randomCurse());
                }

            }

        }
    }

    function reassembly(stringArray) {
        var reassembledArray = stringArray.join([separator = ' ']);
        reassembledArray = (reassembledArray + randomEnding());
        return reassembledArray;
    }

    mamaluke();
    //aNoGood should be run last because it inserts a "no"
    aNoGood();
    addAToArray();
    return reassembly(strArray);
    strArray = '';

}
