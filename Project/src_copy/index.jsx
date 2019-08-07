import React from 'react';
import ReactDOM from 'react-dom';
import Dot from './button'

class App extends React.Component {
    constructor() {
        super();

        function createDots() {
            const dotArr = [];
            for (let i = 0; i < 5; i++) {
                dotArr[i] = [];
                for (let j = 0; j < 5; j++) {
                    dotArr[i][j] = { color: 'transparent', disabled: false };
                }
            }
            return dotArr
        }

        this.state = {
            dots: createDots(),
            player: 1,
        }
    }

    playerChanger() {
        return this.state.player === 1 ? 2 : 1;
    }

    colorChanger() {
        return this.state.player === 1 ? 'red' : 'blue'
    }


    onClick(i, j) {
        const changer = this.state.dots[i][j];
        changer.color = this.colorChanger();

        changer.disabled = true;

        this.setState({
            dots: [...this.state.dots],
            player: this.playerChanger(),

        })


        function surroundCheck(i, j) {
            let entryPoint = this.state.dots[i][j];
            if (entryPoint.color === 'red') {
                for (let x = i - 1; x <= i + 1; x++) {
                    for (let y = j - 1; y <= j + 1; y++) {
                        if (entryPoint.color === 'blue' || entryPoint.color === 'transparent') {
                            return console.log(' похожих соседей нет')
                        } else if (entryPoint.color === 'red') {
                            surroundCheck(this.state.dots[x][y])
                        }
                    }
                }
            }
        }
    }



    render() {

        console.log(this.state.dots);


        return (
            <div id="battlefield">
                {this.state.dots.map((row, i) =>
                    row.map((cell, j) => (
                        <Dot
                            onClick={() => this.onClick(i, j)}
                            top={i}
                            left={j}
                            color={this.state.dots[i][j].color}
                            disabled={this.state.dots[i][j].disabled}
                            key={i + j}
                        />

                    ))
                )}
            </div>
        )
    }
}

ReactDOM.render((
    <div id="container">
        <App />
    </div>


), document.getElementById('root'))