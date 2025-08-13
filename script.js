'use strict'

const questions = [ 
    {
        term: "Cost of attendance",
        imageUrl: "https://www.myfili.com/wp-content/uploads/2025/08/costOfAttendance.png",
        statements: [
            "It is the same for in-state and out-of-state students at public colleges.", // lie
            "Includes tuition, fees, housing, food, textbooks, transportation, and other expenses.",
            "Represents the total cost of attending college."
        ],
        lieIndex: 0,
        trueIndexes: [1, 2],
    },
    {
        term: "In-state tuition",
        imageUrl: "https://www.myfili.com/wp-content/uploads/2025/08/inStateTuition.png",
        statements: [
            "All public colleges charge the same in-state tuition.", // lie
            "It is the lower tuition rate offered to residents of the state.",
            "It helps make college more affordable for local students."
        ],
        lieIndex: 0,
        trueIndexes: [1, 2],
    },
    {
        term: "Out-of-state tuition",
        imageUrl: "https://www.myfili.com/wp-content/uploads/2025/08/outOfStateTuition.png",
        statements: [
            "Private colleges also charge out-of-state tuition.", // lie
            "It is the higher tuition rate for students from other states.",
            "It is usually higher than in-state tuition at public colleges."
        ],
        lieIndex: 0,
         trueIndexes: [1, 2],
    },
    {
        term: "Financial aid",
        imageUrl: "https://www.myfili.com/wp-content/uploads/2025/08/financialAid.png",
        statements: [
            "It is always free and never needs to be repaid.", // lie
            "Includes grants, scholarships, work-study programs, and loans.",
            "It is designed to help students pay for college costs."
        ],
        lieIndex: 0,
        trueIndexes: [1, 2],
    },
    {
        term: "Grants",
        imageUrl: "https://www.myfili.com/wp-content/uploads/2025/08/grants.png",
        statements: [
            "Must always be repaid with interest after graduation.", // lie
            "Are free money that usually do not require repayment.",
            "Can be awarded based on merit, financial need, or special criteria."
        ],
        lieIndex: 0,
        trueIndexes: [1, 2],
    },
    {
        term: "Scholarships",
        imageUrl: "https://www.myfili.com/wp-content/uploads/2025/08/scholarship.png",
        statements: [
            "Are only available to students with financial need.", // lie
            "Are typically merit-based and do not require repayment.",
            "Some scholarships require essays or recommendation letters."
        ],
        lieIndex: 0,
         trueIndexes: [1, 2],
    },
    {
        term: "Work-study programs",
        imageUrl: "https://www.myfili.com/wp-content/uploads/2025/08/workStudyProgram.png",
        statements: [
            "Eligibility is often based on financial need.",
            "Allow students to earn income through part-time jobs on or near campus.",
            "Guarantee that tuition will be completely covered by earnings." // lie
        ],
        lieIndex: 2,
        trueIndexes: [0, 1],
    },
    {
        term: "Student loans",
        imageUrl: "https://www.myfili.com/wp-content/uploads/2025/08/studentLoans.png",
        statements: [
            "Are borrowed money used to pay for college.",
            "Require repayment with interest.",
            "Are a type of free financial aid that does not require repayment." // lie
        ],
        lieIndex: 2,
        trueIndexes: [0, 1],
    },
    {
        term: "Scholarship databases",
        imageUrl: "https://www.myfili.com/wp-content/uploads/2025/08/scholarshipDatabase.png",
        statements: [
            "Can help students discover opportunities they might not know about.",
            "Require you to pay a fee to search for scholarships.", // lie
            "Provide online information about scholarships and grants."
        ],
        lieIndex: 1,
        trueIndexes: [0, 2],
    },
    {
        term: "Application requirements",
        imageUrl: "https://www.myfili.com/wp-content/uploads/2025/08/applicationRequirement.png",
        statements: [
            "Are always the same for every scholarship.", // lie
            "Include specific criteria and documents like transcripts and essays.",
            "May also include letters of recommendation."
        ],
        lieIndex: 0,
        trueIndexes: [1, 2],
    },
    {
        term: "Award criteria",
        imageUrl: "https://www.myfili.com/wp-content/uploads/2025/08/awardCriteria.png",
        statements: [
            "Are the factors used to select scholarship recipients.",
            "Can include academics, extracurriculars, community service, or need.",
            "Are randomly chosen with no evaluation process." // lie
        ],
        lieIndex: 2,
        trueIndexes: [0, 1],
    },
    {
        term: "Personal statement",
        imageUrl: "https://www.myfili.com/wp-content/uploads/2025/08/personalStatement.png",
        statements: [
            "Is a document that guarantees scholarship approval if well-written.", // lie
            "Is often required for scholarships to showcase your goals and story.",
            "Is an essay where you can highlight your achievements."
        ],
        lieIndex: 0,
        trueIndexes: [1, 2],
    },
    {
        term: "Federal loans",
        imageUrl: "https://www.myfili.com/wp-content/uploads/2025/08/federalLoans.png",
        statements: [
            "Are only available to students attending private colleges.", // lie
            "Are student loans offered by the government.",
            "Typically have lower interest rates and better repayment options than private loans."
        ],
        lieIndex: 0,
        trueIndexes: [1, 2],
    },
    {
        term: "Private loans",
        imageUrl: "https://www.myfili.com/wp-content/uploads/2025/08/privateLoans.png",
        statements: [
            "Are student loans offered by banks or private lenders.",
            "Always offer income-driven repayment plans from the start.", // lie
            "Usually have higher interest rates than federal loans."
        ],
        lieIndex: 1,
        trueIndexes: [0, 2],
    },
    {
        term: "Interest rate",
        imageUrl: "https://www.myfili.com/wp-content/uploads/2025/08/interestRate.png",
        statements: [
            "Is the percentage charged annually for borrowing money.",
            "Determines how much extra you pay beyond the principal loan amount.",
            "Never changes and is the same for all loans." // lie
        ],
        lieIndex: 2,
        trueIndexes: [0,1],
    },
    {
        term: "Repayment terms",
        imageUrl: "https://www.myfili.com/wp-content/uploads/2025/08/repaymentTerms.png",
        statements: [
            "Include how long you have to repay your loan.",
            "Are the same for every type of student loan.", // lie
            "Determine the minimum monthly payment required."
        ],
        lieIndex: 1,
          trueIndexes: [0, 2],
    },
    {
        term: "Forbearance",
        imageUrl: "https://www.myfili.com/wp-content/uploads/2025/08/forbearance.png",
        statements: [
            "Permanently cancels your student loan debt.", // lie
            "Allows a temporary reduction or pause in loan payments.",
            "Is typically granted during financial hardship."
        ],
        lieIndex: 0,
        trueIndexes: [1, 2],
    },
    {
        term: "Deferment",
        imageUrl: "https://www.myfili.com/wp-content/uploads/2025/08/deferment.png",
        statements: [
            "Temporarily postpones loan payments under certain conditions.",
            "Means your loans are automatically forgiven.", // lie
            "Is often available while enrolled in graduate school."
        ],
        lieIndex: 1,
        trueIndexes: [0, 2],
    },
    {
        term: "Income-driven repayment plans",
        imageUrl: "https://www.myfili.com/wp-content/uploads/2025/08/incomeDrivenRepayment.png",
        statements: [
            "Adjust your monthly payments based on your income and family size.",
            "Are only available for federal student loans.",
            "Guarantee that you never have to repay your loans." // lie
        ],
        lieIndex: 2,
        trueIndexes: [0,1],
    },
    {
        term: "Alternative education",
        imageUrl: "https://www.myfili.com/wp-content/uploads/2025/08/alternativeEducation.png",
        statements: [
            "Includes vocational training, apprenticeships, online learning, and community colleges.",
            "Is the traditional 4-year university route.", // lie
            "Can provide skills without the cost of a traditional degree."
        ],
        lieIndex: 1,
        trueIndexes: [0, 2],
    },
    {
        term: "Return on investment (ROI)",
        imageUrl: "https://www.myfili.com/wp-content/uploads/2025/08/ROI.png",
        statements: [
            "Is only important for students in business majors.", // lie
            "Measures the financial benefit of an education compared to its cost.",
            "Considers future earnings and total expenses."
        ],
        lieIndex: 0,
        trueIndexes: [1, 2],
    },
    {
        term: "Trade schools",
        imageUrl: "https://www.myfili.com/wp-content/uploads/2025/08/tradeSchools.png",
        statements: [
            "Always require a bachelor's degree for admission.", // lie
            "Offer specialized training for specific trades or skills.",
            "Are typically shorter and less expensive than traditional colleges."
        ],
        lieIndex: 0,
        trueIndexes: [1, 2],
    },
    {
        term: "Apprenticeships",
        imageUrl: "https://www.myfili.com/wp-content/uploads/2025/08/Apprenticeship.png",
        statements: [
            "Are unpaid volunteer opportunities with no instruction.", // lie
            "Combine paid on-the-job training with classroom instruction.",
            "Lead to certifications or skilled trade qualifications."
        ],
        lieIndex: 0,
        trueIndexes: [1, 2],
    },

    {
        term: "Community colleges",
        imageUrl: "https://www.myfili.com/wp-content/uploads/2025/08/communityCollege.png",
        statements: [
            "Offer two-year associate degrees and transferable credits.",
            "Only admit students who already have a bachelor’s degree.", // lie
            "Are usually more affordable than four-year colleges."
        ],
        lieIndex: 1,
        trueIndexes: [0, 2],
    },
    {
        term: "Net price",
        imageUrl: "https://www.myfili.com/wp-content/uploads/2025/08/netPrice.png",
        statements: [
            "Is the actual cost of college after subtracting grants and scholarships.",
            "Is always higher than the advertised tuition.", // lie
            "Reflects what students are likely to actually pay."
        ],
        lieIndex: 1,
        trueIndexes: [0, 2],
    },
    {
        term: "Accreditation",
        imageUrl: "https://www.myfili.com/wp-content/uploads/2025/08/Accreditation.png",
        statements: [
            "Is the official recognition of a school’s academic quality.",
            "Is optional and not important for any college or program.", // lie
            "Helps ensure your degree is recognized by employers and other schools."
        ],
        lieIndex: 1,
        trueIndexes: [0, 2],
    },
    {
        term: "Major",
        imageUrl: "https://www.myfili.com/wp-content/uploads/2025/08/Major.webp",
        statements: [
            "Determines every single class you take with no exceptions.", // lie
            "Is your primary field of study in college.",
            "Can influence your career options after graduation."
        ],
        lieIndex: 0,
        trueIndexes: [1,2],
    },
    {
        term: "Minor",
        imageUrl: "https://www.myfili.com/wp-content/uploads/2025/08/Minor.jpg",
        statements: [
            "Is a secondary field of study that complements your major.",
            "Is mandatory for every college student.", // lie
            "Requires fewer courses than your major."
        ],
        lieIndex: 1,
        trueIndexes: [0, 2],
    },
    {
        term: "Career counseling",
        imageUrl: "https://www.myfili.com/wp-content/uploads/2025/08/careerCounseling.jpg",
        statements: [
            "Provides guidance to help you explore career paths and options.",
            "Guarantees you will get a job immediately after graduation.", // lie
            "Can assist with resumes, internships, and job applications."
        ],
        lieIndex: 1,
        trueIndexes: [0, 2],
    }
];

function global() {
    let gameTerms = [];
    let currentIndex = 0;
    let score = 0;
    let secondsLeft = 10;
    let timeOutId;
    return {gameTerms, currentIndex, score, secondsLeft, timeOutId};
}

let {gameTerms, currentIndex, score, secondsLeft, timeOutId} = global();

function shuffleQuestions(questions){
    //clears gameQuestions array
    gameTerms = []

    while(gameTerms.length < 10){ // if we have 10 terms already, stop
        let randomNum = Math.floor(Math.random()*questions.length); // generate a random number between 0 and 30
        if(gameTerms.includes(questions[randomNum])){ // if the term is already in the gameTerms array, go back to while loop
            continue; // goes back to while loop
        }
        gameTerms.push(questions[randomNum]); // add the term object to the gameTerms array.
    }
}

function updateTime() {
    const time = document.getElementById("timer");
    time.classList.remove("hide");
    time.textContent = secondsLeft;
    if (secondsLeft > 0) {
        timeOutId = setTimeout(updateTime, 1000);
    }
    else {
        time.classList.add("hide");
        const feedback = document.getElementById("feedback");
        feedback.classList.remove("hide");
        feedback.textContent = `❌ You ran out of time!"`;
        const choicesContainer = document.getElementById("choices");
        const buttons = choicesContainer.querySelectorAll("button"); // get all the buttons inside the choices container
        buttons.forEach(btn => btn.disabled = true); // disable all the buttons so the user cant click again
        const nextBtn = document.getElementById("next-btn"); // show the next button so the us
        nextBtn.classList.remove("hide");
        nextQuestion();
    }
}

function stopTime() {
    clearTimeout(timeOutId);
    const time = document.getElementById("timer");
    time.classList.add("hide");
}

/* starts the game 
1. call shuffleQuestions() to pick 10 random questions
2. set currentIndex = 0 for first question
3. call showQuestion() to display the first one */
function initGame(){
    shuffleQuestions(questions); // shuffle the first list 
    currentIndex = 0;
    showQuestion();
}

// display question and its 3 statements
function showQuestion(){
    const randomTerm = gameTerms[currentIndex].term;
    const term = document.getElementById("term");
    term.innerText = randomTerm;

    updateTime();

    // Retrieve the image element and updates the new images
    const img = document.getElementById("term-image");
    const randomImg = gameTerms[currentIndex].imageUrl;
    img.src = randomImg;

    //display the 3 statements as buttons
    const choicesContainer = document.getElementById("choices");
    choicesContainer.classList.remove("hide");
    const randomStatement = gameTerms[currentIndex].statements;

    randomStatement.forEach((statement, index) => {
        const button = document.createElement("button");
        button.textContent = statement;
        button.classList.add("choice-button");
        button.id = `button-${index}`
        button.onclick = (e) => {
            e.preventDefault();
            let currentTerm = gameTerms[currentIndex];
            const answerIndex = currentTerm.lieIndex;
            const answerStatement = randomStatement[currentTerm.lieIndex];
            handleAnswer(index, answerIndex, answerStatement);
        }
        choicesContainer.appendChild(button);
    })
}

// checks if user selected the lie (compare selectedIndex with question.lieIndex)
function handleAnswer(userChoice, answerIndex, answerStatement){
    const feedback = document.getElementById("feedback");
    feedback.classList.remove("hide");
    feedback.textContent = " "; // clear any previous feedback message
    
    const choicesContainer = document.getElementById("choices");
    const buttons = choicesContainer.querySelectorAll("button"); // get all the buttons inside the choices container
    buttons.forEach(btn => btn.disabled = true); // disable all the buttons so the user cant click again
    if (answerIndex === userChoice) { // If they picked the lie correctly, show a "Correct" message in green
        feedback.textContent = "✅ Correct! You found the lie."
        feedback.style.color = "green";
        score++;
        const totalScore = document.getElementById("score")
        totalScore.textContent = `Score: ${score}`
        const correctButton = document.getElementById(`button-${userChoice}`);
        correctButton.style.backgroundColor = 'lightgreen';
    } else {
        // If they picked a truth by mistake, show the real lie and mark it wrong
        feedback.textContent = `❌ Nope! The lie was: "${answerStatement}"`;
        feedback.style.color = "red";
        const wrongButton = document.getElementById(`button-${userChoice}`)
        wrongButton.style.backgroundColor = 'red';
    }
    const nextBtn = document.getElementById("next-btn"); // show the next button so the us
    nextBtn.classList.remove("hide");
    stopTime();
    nextQuestion();
}

/* increment currentIndex and show next question
1. if there are more questions, call showQuestion() with the next question
2. if no more questions, call endGame() to show results
*/
function nextQuestion(){
    secondsLeft = 10;
    const nextBtn = document.getElementById("next-btn");
    nextBtn.onclick = () => {
        const feedback = document.getElementById("feedback");
        const choices = document.getElementById("choices");
        
        currentIndex++;

        if(currentIndex < gameTerms.length){
            choices.classList.add("hide");
            choices.textContent = "";
            feedback.classList.add("hide");
            feedback.textContent = "";
            nextBtn.classList.add("hide");
            showQuestion();
        }
        else{
            nextBtn.classList.add("hide");
            endGame();
        }
    }
}
// show the final score and allow a restart
function endGame(){
    const term = document.getElementById("term");
    term.innerText = "Game Over!";
    const img = document.getElementById("term-image");
    img.src = "";
    const choicesContainer = document.getElementById("choices");
    choicesContainer.textContent = "";
    const feedback = document.getElementById("feedback");
    feedback.textContent = `Your final score is ${score} out of ${gameTerms.length}.`;
    
    const restartBtn = document.getElementById("restart-btn");
    restartBtn.classList.remove("hide");
    restartBtn.onclick = () => {
        score = 0;
        const totalScore = document.getElementById("score")
        totalScore.textContent = `Current Score: ${score}`
        feedback.classList.add("hide");
        restartBtn.classList.add("hide");
        initGame();
    }
}

initGame();