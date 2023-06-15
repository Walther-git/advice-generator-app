const api = 'https://api.adviceslip.com/advice';
const adviceId = document.querySelector('#adviceId');
const adviceTextId = document.querySelector('#adviceTextId');
const dividerId = document.querySelector('#dividerId');
const diceId = document.querySelector('#diceId');
const buttonId = document.querySelector('#buttonId');

// function for remove an add class in elements
const addRemoveClass = (element, class_element, secons) => {
    element.classList.add(`${class_element}`)
    setTimeout(() => {
        if (element.classList.contains(`${class_element}`)) {
            element.classList.remove(`${class_element}`)
        }
    }, `${secons}`)
}

// Render and modifi elements
const render = () => {
    buttonId.addEventListener('click', () => {

        // api
        fetch(api)
            .then(res => res.json())
            .then(object_advice => {

                //variables
                const id = object_advice.slip.id;
                const advice = object_advice.slip.advice;

                //modifi elements
                addRemoveClass(adviceId, 'opacity', '1500');
                addRemoveClass(adviceTextId, 'opacity', '1500');
                addRemoveClass(diceId, 'rotate', '500');
                adviceId.textContent = `ADVICE #${id}`;
                adviceTextId.textContent = `${advice}`;
            }
            )
    }
    )
}

// Load and render
document.addEventListener('DOMContentLoaded', render());