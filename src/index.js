const dogBar = document.querySelector('#dog-bar')

const run = () => {
    fetch("http://localhost:3000/pups")
    .then((resp) => (resp.json()))
    .then((pupData) => {
        
        pupData.forEach((pupData) => {
            addPupToNavBar(pupData)
        })
    })   
}
const addPupToNavBar =  (pupData) => {
    const dogBar = document.querySelector('#dog-bar');
    const dogSpan = document.createElement('span');
    const dogInfo = document.querySelector('#dog-info');

    dogSpan.addEventListener('click', () => {
        dogInfo.innerText = ''
        
        const dogImage = document.createElement('img');
        dogImage.src = pupData.image
        

        const dogName = document.createElement('h2')
        dogName.innerText = pupData.name
        

        const dogButton = document.createElement('button')
        dogButton.innerText = pupData.isGoodDog ? 'Good dog!' : 'Bad dog!';
        dogButton.addEventListener('click', () => {
            if (dogButton.innerText === 'Good dog!') {
                dogButton.innerText = 'Bad dog!'
            } else dogButton.innerText = 'Good dog!'
            
        })
    dogInfo.append(dogImage, dogName, dogButton)
  })

    dogSpan.innerText = pupData.name
    dogBar.append(dogSpan)

}


document.addEventListener('DOMContentLoaded', run)