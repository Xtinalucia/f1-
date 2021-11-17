// Grab Data from a form after submit

// const form = document.getElementById('testDataForm');

// form.addEventListener('submit', (e) =>{
//     e.preventDefault();
//     console.log('Form submitted');
//     console.log(e);
//     let firstName = e.target.first.value
//     let lastName = e.target.last.value
//     console.log(firstName, lastName);
//     // Grab the data from the document
//     let firstNameAgain = document.getElementById('firstName').value;
//     let lastNameAgain = document.getElementById('lastName').value;
//     console.log(firstNameAgain, lastNameAgain);
// })


const getRacerInfo = async function(season, round){
    let response = await fetch(`http://ergast.com/api/f1/${season}/${round}/driverStandings.json`)
    let data = await response.json()
    return data
}

const RacerForm = document.getElementById('RacerForm');
console.log(RacerForm)
RacerForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    console.log(e)
    let racer = e.target.season.value;
    let racerround = e.target.round.value;
    console.log(racer, racerround);
    let f1 = await getRacerInfo(racer, racerround);
    console.log(f1);
    let newHeader = document.createElement('h1');
    newHeader.innerHTML = getRacerInfo.StandingTable
    let subHeader = document.createElement('h5');
    subHeader.innerHTML = getRacerInfo.StandingLists
    
    document.body.append(newHeader);
    document.body.append(subHeader);
})