import React from 'react';
import ReactDOM from 'react-dom';
import Battlefield from '../src/battlefield_copy';

const getColor = player => {
    if (!player) {
        return 'none';
    }

    return player === 1 ? 'red' : 'green';
}

const Dot = ({ onClick, top, left, player }) => <div onClick={onClick} disabled={player} className="dots" style={{ background: getColor(player), top: top * 50, left: left * 50 }}></div>


// const dots = [{ r1c1}, {r1c2}, {r2,c1}, {r2c2}]


// const dots2 = { 'r1c1': {}, 'r1c2': {} }

// const dotsNew = { ...dots2, [key]: { player: getPlayer }}

// Object.keys(this.state.dots).map(key => <Dot key={key} onClick />)


class App extends React.Component {
    constructor() {
        super();

        this.state = {
            dots: [
                [{}, {}, { player: 1 }, { color: 'none', disabled: false }, { color: 'none', disabled: false }],
                [{ color: 'none', disabled: false }, { color: 'none', disabled: false }, { color: 'none', disabled: false }, { color: 'none', disabled: false }, { color: 'none', disabled: false }],
                [{ color: 'none', disabled: false }, { color: 'none', disabled: false }, { color: 'none', disabled: false }, { color: 'none', disabled: false }, { color: 'none', disabled: false }],
                [{ color: 'none', disabled: false }, { color: 'none', disabled: false }, { color: 'none', disabled: false }, { color: 'none', disabled: false }, { color: 'none', disabled: false }],
                [{ color: 'none', disabled: false }, { color: 'none', disabled: false }, { color: 'none', disabled: false }, { color: 'none', disabled: false }, { color: 'none', disabled: false }],
            ],
            player: false,
        }


        this.onClick.bind(this);
    }
    onMouseMove(e) {
        // console.log(e.nativeEvent.offsetX, e.nativeEvent.offsetY);

    }

    onClick(i, j) {
        const dotObj = { player: this.state.player }
        const nextPlayer = this.state.player === 1 ? 2 : 1;
        const newState = {
            dots: [ ...this.state.dots,  ], // изменить нужную точку
            player: nextPlayer
        }

        this.setState({ ...this.state, newState })


            
            // this.state.dots.color
            // this.setState({ 
            //     dots:[[{color: 'red'}]]
            // })
        } 
        // else if (this.state.player == true) {
        //     this.props.style.background = 'blue';
        //     this.setState = ({
        //         player: false,
        //     })
        // }

    


    render() {
        // const arr = this.state.dots;
        // const div = [];
        // for (let i in arr) {
        //     for (let j in arr[i]) {
        //         div.push(<div onClick={this.onClick.bind(this)} className="dots" key={i + j} style={{ background: this.state.dots[i][j].color, top: i * 50, left: j * 50 }}></div>)
        //     }

        // }
        // console.log(div);




        return (
            <div id="battlefield" onMouseMove={this.onMouseMove.bind(this)}>
                {this.state.dots.map((row, i) =>
                    row.map((cell, j) => (
                        <Dot
                            onClick={() => this.onClick(i, j)}
                            top={i}
                            left={j}
                            color={cell.color}
                            key={'' + i + j}
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