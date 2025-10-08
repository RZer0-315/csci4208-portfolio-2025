const Question = (trivia) => ( //Function for HTML component
    `<h3>
        <div>Category - ${trivia.category}</div>
        <div>Difficulty - ${trivia.difficulty}</div>
    </h3>
    <h4>Question:</h4>
    <p>${trivia.question}</p>`
)                           //Return HTML text

export default Question;    //Export Question function