import React, { Component } from 'react';
// 클래스 : constructor -> render -> ref -> componentDidMount -> 
// (setState/props 바뀔때 -> shouldComponentUpdate(true일때) ->rerender -> componentDidUpdate)
// (부모가 나를 없앴을때 -> componentWillUnmount -> 소멸) 

class Rps extends Component {
    state = {
        result : '',
        imgCoord : 0,
        score : 0,
    };
    //쌍으로 한다. 비동기요청에 많이 사용됨
    componentDidMount() {  //첫 랜더링 직후에

    }

    componentWillUnmount() {  // 컴포넌트 제거되기 직전

    }

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