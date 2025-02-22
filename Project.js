
var k;
function demo() {
    display();
}

async function display() {
    var a = document.getElementById('search-input').value;
    let ginButton = document.getElementById("gin");

    document.getElementById("sid").style.display = "none";

    for (let i = 0; i < arr.length; i++) {
        if (a === arr[i].Statename) {
            k=arr[i].Statename;
            document.getElementById('Statename').innerHTML = arr[i].Statename;
            document.body.style.backgroundImage = "none";
            document.getElementById("search-box").style.display = "none";
           
            document.getElementById("Simg").style.backgroundImage = "url(./" + arr[i].img + ")";
            document.getElementById("Simg").style.backgroundSize = "cover";
            document.getElementById("Simg").style.backgroundRepeat = "no-repeat";
            document.getElementById("Simg").style.border = "3px solid gold";

            

            // Hide gin button before printing starts
            ginButton.style.display = "none"; 

            // Reset Info content before starting animation
            document.getElementById('Info').innerHTML = "";

            await new Promise((resolve) => setTimeout(resolve, 100));

            let index = 0;
            let words = arr[i].Info.split(" ");
            
            document.getElementById('Info').innerHTML = `<h2>${arr[i].Statename} Info :-</h2>`;


            function printWords() {
                if (index < words.length) {
                    document.getElementById('Info').innerHTML += words[index] + " ";
                    index++;
                    setTimeout(printWords);
                } else {
                    // Show the gin button only after info has been completely printed
                    ginButton.style.display = "block";
                    document.getElementById("hid").style.display="block";
                    document.getElementById("toid").style.display="block";
                }
            }

            printWords();

            document.getElementById('search-input').style.display = 'none'; // Hide the input box
            document.querySelector('#search-box button').style.display = 'none'; // Hide search button
              k = arr[i];
            break; // Exit loop after finding the state
        }
    }
}

function demo(){
    let ginButton = document.getElementById("gin");
    ginButton.style.display='none';
    document.getElementById('ghid').innerHTML = k.Statename+" Giographical Info : -";
    let index = 0;
    let words = k.Giographical.split(" ");
    
    function printWords() {
        if (index < words.length) {
            document.getElementById('Area').innerHTML += words[index] + " ";
            index++;
            setTimeout(printWords);
        } else {
            // Show the gin button only after info has been completely printed
            ginButton.style.display = "none";
        }
    }

    printWords();

}

function history(){
    let ginButton = document.getElementById("hid");
    ginButton.style.display='none';
    document.getElementById('hsid').innerHTML = k.Statename+" Historical Info : -";
    let index = 0;
    let words = k.Historical.split(" ");
    
    function printWords() {
        if (index < words.length) {
            document.getElementById('his').innerHTML += words[index] + " ";
            index++;
            setTimeout(printWords);
        } else {
            // Show the gin button only after info has been completely printed
            ginButton.style.display = "none";
        }
    }

    printWords();

}



function tourist(){
    let ginButton = document.getElementById("toid");
    ginButton.style.display='none';
    document.getElementById('tid').innerHTML = k.Statename+" Tourist Points : -";
    let index = 0;
    let words = k.Tourist.split(".");
    
    function printWords() {
        if (index < words.length) {
            document.getElementById('tour').innerHTML += `* ${words[index]}  <br> `;
            index++;
            setTimeout(printWords,500);
        } else {
            // Show the gin button only after info has been completely printed
            ginButton.style.display = "none";
        }
    }

    printWords();

}

function White(){
    document.body.style.backgroundColor= "white";
    document.body.style.color= "black";
    document.getElementById("search-box").style.backgroundColor="black";
    document.getElementById("search-box").style.color="black";
    document.getElementById("sid").style.color="black";
    document.getElementById("wtid").style.backgroundColor="white";
    document.getElementById("wtid").style.color="black";
    document.getElementById("search-box").style.backgroundColor="black";
    document.getElementById("wtid").style.display="none"
     document.getElementById("dtid").style.display="block"
}

function Dark(){
    document.body.style.backgroundColor= "black";
    document.body.style.color= "white";
    document.getElementById("search-box").style.backgroundColor="white";
    document.getElementById("search-box").style.color="white";
    document.getElementById("sid").style.color="white";
    document.getElementById("dtid").style.backgroundColor="black";
    document.getElementById("dtid").style.color="white";
    document.getElementById("search-box").style.backgroundColor="white";
    document.getElementById("dtid").style.display="none"
    document.getElementById("wtid").style.display="block"
}