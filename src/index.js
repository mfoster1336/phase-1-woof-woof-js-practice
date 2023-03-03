// On the page, there is a div with the id of "dog-bar". When the page loads, use fetch to get all of the pup data from your server. When you have this information, you'll need to add a span with the pup's name to the dog bar (ex: <span>Mr. Bonkers</span>).

// STEP 3: SHOW MORE INFO ABOUT EACH PUP
// When a user clicks on a pup's span in the div#dog-bar, that pup's info (image, name, and isGoodDog status) should show up in the div with the id of "dog-info". Display the pup's info in the div with the following elements:

// an img tag with the pup's image url
// an h2 with the pup's name
// a button that says "Good Dog!" or "Bad Dog!" based on whether isGoodDog is true or false. Ex:
// <img src="dog_image_url" />
// <h2>Mr. Bonkers</h2>
// <button>Good Dog!</button>
// STEP 4: TOGGLE GOOD DOG
// When a user clicks the Good Dog/Bad Dog button, two things should happen:

// The button's text should change from Good to Bad or Bad to Good
// The corresponding pup object in the database should be updated to reflect the new isGoodDog value
// You can update a dog by making a PATCH request to /pups/:id and including the updated isGoodDog status in the body of the request.

const run = () => {
    fetch("http://localhost:3000/pups")
    .then(resp => resp.json())
    .then((pupData) => {
        pupData.forEach((pupData) => {
            addPupToNavBar(pupData)
        })
    })
}

const addPupToNavBar = (pupData) => {
    const dogBar = document.querySelector("#dog-bar")
    const dogInfo = document.querySelector("#dog-info")
    const dogSpan = document.createElement("span")
    dogSpan.innerText = pupData.name
    dogBar.append(dogSpan)

    dogSpan.addEventListener('click', () => {
        dogInfo.innerText = ''

        const dogImage = document.createElement("img")
        dogImage.src = pupData.image

        const dogName = document.createElement("h2")
        dogName.innerText = pupData.name

        const dogButton = document.createElement("button")
        dogButton.innerText = pupData.innerText ? 'Good dog!' : 'Bad dog!'

        dogButton.addEventListener("click", (e) =>{
            dogButton.innerText = dogButton.innerText === 'Good dog!' ? 'Bad dog!' : 'Good dog!'

        })
        dogInfo.append(dogImage, dogName, dogButton)
    })
        


}
document.addEventListener("DOMContentLoaded", run)