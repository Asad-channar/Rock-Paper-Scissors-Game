let computerMove = '';
let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
}

jsScore();
function reset()
{
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    localStorage.removeItem('score');
    jsScore();
}

if(score === null)
{
   score={wins:0,losses:0,ties:0};
}

function playGame(playerMove)
{
    let result = '';
    if(playerMove === 'Scissors')
    {
        pickMove();

            if(computerMove === 'Rock')
            {
                result = 'you lose';
            }
            else if (computerMove === 'Paper')
            {
                result = 'you win';
            }
            else if (computerMove === 'Scissors')
            {
                result = 'tie';
            }
    }

    else if (playerMove === 'Paper')
    {
        pickMove();

        if(computerMove === 'Rock')
        {
            result = 'you win';
        }
        else if (computerMove === 'Paper')
        {
            result = 'tie';
        }
        else if (computerMove === 'Scissors')
        {
            result = 'you lose';
        }    
    }

    else if (playerMove === 'Rock')
    {
        pickMove();

    if(computerMove === 'Rock')
    {
        result = 'tie';
    }
    else if (computerMove === 'Paper')
    {
        result = 'you lose';
    }
    else if (computerMove === 'Scissors')
    {
        result = 'you win';
    }

    }

    if(result === 'you win')
    {
        score.wins++;
    }
    else if(result === 'you lose')
    {
        score.losses++;
    }
    else if(result === 'tie')
    {
        score.ties++;
    }

    document.querySelector('.js-result').innerHTML = result;
    document.querySelector('.js-moves')
        .innerHTML = `You
    <img class = "images-img" src = "pictures/${playerMove}-emoji.png">
    <img class = "images-img" src = "pictures/${computerMove}-emoji.png">
    Computer</p>`;

    localStorage.setItem('score' , JSON.stringify(score));
    jsScore();


}

function jsScore()
{
    document.querySelector('.js-score')
    .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function pickMove() {
    const randomNumber = Math.random();

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'Rock';
    }
    else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'Paper';
    }
    else 
    {
        computerMove = 'Scissors';
    }

    return computerMove;
}