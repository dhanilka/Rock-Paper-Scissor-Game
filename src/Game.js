import React, { useState, useEffect } from 'react';
import uRock from './Assets/uRock.png';
import cRock from './Assets/cRock.png';
import uPaper from './Assets/uPaper.png';
import cPaper from './Assets/cPaper.png';
import uScissor from './Assets/uScissor.png';
import cScissor from './Assets/cScissor.png';

function Game() {
    const [winner, setwinner] = useState('Doing something Better');
    const [userChoice, setuserChoice] = useState(null);
    const [computerChoice, setcomputerChoice] = useState(null);
    const [uScore, setUscore] = useState(0);
    const [cScore, setCscore] = useState(0);
    const [final, setFinal] = useState(false);
    const [finalWinner, setFinalWinner] = useState('');

    function generateComputerChoice() {
        const choice = [cRock, cPaper, cScissor];
        const randomIndex = Math.floor(Math.random() * choice.length);
        return choice[randomIndex];
    }

    function judgeBoard(user, computer) {
        if (
            (user === uRock && computer === cRock) ||
            (user === uPaper && computer === cPaper) ||
            (user === uScissor && computer === cScissor)
        ) {
            return { result: "It's a tie !", winner: 'tie' };
        } else if (
            (user === uRock && computer === cScissor) ||
            (user === uPaper && computer === cRock) ||
            (user === uScissor && computer === cPaper)
        ) {
            return { result: 'You Won !', winner: 'user' };
        } else {
            return { result: 'Computer Won !', winner: 'computer' };
        }
    }

    function reset() {
        setCscore(0);
        setUscore(0);
        setFinal(false);
    }

    useEffect(() => {
        if (cScore === 50) {
            setFinalWinner('Computer Won The Match !');
            setFinal(true);
        } else if (uScore === 50) {
            setFinalWinner('You Won The Match !');
            setFinal(true);
        }
    }, [cScore, uScore]);

    function rockClick() {
        const userClick = uRock;
        const compChoice = generateComputerChoice();
        const result = judgeBoard(userClick, compChoice);
        if (result.winner === 'user') {
            setUscore(uScore + 1);
        } else if (result.winner === 'computer') {
            setCscore(cScore + 1);
        }
        setuserChoice(userClick);
        setcomputerChoice(compChoice);
        setwinner(result.result);
    }

    function paperClick() {
        const userClick = uPaper;
        const compChoice = generateComputerChoice();
        const result = judgeBoard(userClick, compChoice);
        if (result.winner === 'user') {
            setUscore(uScore + 1);
        } else if (result.winner === 'computer') {
            setCscore(cScore + 1);
        }
        setuserChoice(userClick);
        setcomputerChoice(compChoice);
        setwinner(result.result);
    }

    function scissorClick() {
        const userClick = uScissor;
        const compChoice = generateComputerChoice();
        const result = judgeBoard(userClick, compChoice);
        if (result.winner === 'user') {
            setUscore(uScore + 1);
        } else if (result.winner === 'computer') {
            setCscore(cScore + 1);
        }
        setuserChoice(userClick);
        setcomputerChoice(compChoice);
        setwinner(result.result);
    }

    return (
        <div>
            {final ? (
                <div>
                    <h1>{finalWinner}</h1>
                    <button onClick={reset}>Restart</button>
                </div>
            ) : (
                <>
                    <h1>Rock Paper Scissor Game</h1>
                    <hr />
                    <h2>{winner}</h2>
                    <br />
                    <div className="scoreBoard">
                        <h3 className="score">You - {uScore}</h3>
                        <h3 className="score">Computer - {cScore}</h3>
                    </div>
                    <div className="board">
                        <h1>
                            <img className="board-img" src={userChoice} alt="" />
                        </h1>
                        <h1>
                            <img className="board-img" src={computerChoice} alt="" />
                        </h1>
                    </div>
                    <div className="btn-div">
                        <button onClick={rockClick}>
                            <img className="btn-img" src={uRock} alt="" />
                        </button>
                        <button onClick={paperClick}>
                            <img className="btn-img" src={uPaper} alt="" />
                        </button>
                        <button onClick={scissorClick}>
                            <img className="btn-img" src={uScissor} alt="" />
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}

export default Game;
