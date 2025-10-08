import Question from './components/Question.js';       //Import Westion function

const renderDOM = (html) => document.getElementById('view').innerHTML = html;   //Set HTML in view

export const PlayScene = (props) => { //Function for HTML view
    const {trivia} = props; //Destructure properties
    renderDOM( //render the Scene's HTML to DOM
        `${Question(trivia)}`
    )
}