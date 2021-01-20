import React, {useState, useRef} from 'react';

const rpsCoords = {
    rock : '0',
    scissors : '-142px',
    paper : '-284px',
};

const scores = {
    scissors : 1,
    rock : 0,
    paper : -1,
};

const computerChoice = (imgCoord) => {
    return Object.entries(rpsCoords).find(function(v) {
        return v[1] === imgCoord;
    })[0];
};

const Rps = () => {
    const [result, setResult] = useState('');
    const [imgCoord, setImgCoord] = useState(rpsCoords.rock);
    const [score, setScore] = useState(0);
    const interval = useRef();

    const changeHand = () => {
        if(imgCoord === rpsCoords.rock) {
            setImgCoord(rpsCoords.scissors);
        } else if(imgCoord === rpsCoords.scissors) {
            setImgCoord(rpsCoords.paper);
        } else if (imgCoord === rpsCoords.paper) {
            setImgCoord(rpsCoords.rock);
        }
    };

    const onClickBtn = (choice) => () => {
        
        clearInterval(interval.current);
        const myScore = scores[choice];
        const cpuScore = scores[computerChoice(imgCoord)];
        const diff = myScore - cpuScore;
        if(diff ===0) {
            setResult('Tie!');
        } else if([-1, 2].includes(diff)) {
            setResult('Win!');
            setScore((prevScore) => prevScore + 1);
        } else {
            setResult('Lose!');
            setScore((prevScore) => prevScore - 1);
        }
        setTimeout(() => {
            interval.current = setInterval(changeHand, 100);
        }, 1000);        
    };

    return (
        <>
            <div id="computer" style={{ background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0` }} />
            <div>
                <button id="rock" className="btn" onClick={onClickBtn('rock')}>rock</button>
                <button id="paper" className="btn" onClick={onClickBtn('paper')}>paper</button>
                <button id="scissors" className="btn" onClick={onClickBtn('scissors')}>scissors</button>                    
            </div>
            <div>{result}</div>
            <div>SCORE : {score}points</div>
        </>
    );
};

export default Rps;