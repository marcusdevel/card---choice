 const ratingNumbersDOM = document.querySelectorAll('.rating-card-number')
 const primarycardDOM = document.querySelector('.first-card')
 const thankcardDOM = document.querySelector('.second-card')
 const resultValueDOM = document.querySelector('.choice-card-value')

let activeRatingNumber;

function selectRating(number){
    const ratingNumbersDOM = document.querySelectorAll('.rating-card-number')
    const selectedRatingNumberDOM = ratingNumbersDOM[number-1]
    selectedRatingNumberDOM.classList.add('rating-card-number--active')

    if(activeRatingNumber){
        const activeRatingDOM = ratingNumbersDOM[activeRatingNumber-1]
        activeRatingDOM.classList.remove('rating-card-number--active')
    }
    activeRatingNumber = number;
}

function submit(){
 if(!activeRatingNumber) return;
 primarycardDOM.classList.add('hide');
thankcardDOM.classList.remove('hide');
 resultValueDOM.textContent = activeRatingNumber;
}

