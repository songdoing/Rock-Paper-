import React, { Component } from 'react';
// 클래스 : constructor -> render -> ref -> componentDidMount -> 
// (setState/props 바뀔때 -> shouldComponentUpdate(true일때) ->rerender -> componentDidUpdate)
// (부모가 나를 없앴을때 -> componentWillUnmount -> 소멸) 

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
class Rps extends Component {
    state = {
        result : '',
        imgCoord : rpsCoords.rock,
        score : 0,
    };

    interval;

    //쌍으로 한다. 비동기에 많이 사용됨
    componentDidMount() {  //첫 랜더링 직후에, 비동기요청             
        this.interval = setInterval(()=> {
            //비동기 함수가 그 밖에 있는 변수를 참조하면 클로져 발생
            //비동기 함수 안에 변수처리함.   
            const {imgCoord} = this.state;
            if(imgCoord === rpsCoords.rock) {
                this.setState({
                    imgCoord : rpsCoords.scissors,
                });
            } else if(imgCoord === rpsCoords.scissors) {
                this.setState({
                    imgCoord : rpsCoords.paper,
                });
            } else if (imgCoord === rpsCoords.paper) {
                this.setState({
                    imgCoord : rpsCoords.rock,
                });
            }
        }, 100);
    }

    componentWillUnmount() {  // 컴포넌트 제거되기 직전, 비동기정리(취소)
        clearInterval(this.interval);
    }

    onClickBtn = (choice) => {

    };
    //render안에는 setState들어가면 무한...반복..안됨!
    render() {
        const { result, score, imgCoord } =this.state;
        return (
            <>
                <div id="computer" style={{ background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0` }} />
                <div>
                    <button id="rock" className="btn" onClick={this.onClickBtn('rock')}>rock</button>
                    <button id="paper" className="btn" onClick={this.onClickBtn('paper')}>paper</button>
                    <button id="scissors" className="btn" onClick={this.onClickBtn('scissors')}>scissors</button>                    
                </div>
                <div>{result}</div>
                <div>SCORE {score}points</div> 
            </>
        );
    }
}

export default Rps;