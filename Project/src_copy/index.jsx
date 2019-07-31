import React from 'react';
import ReactDOM from 'react-dom';
import Battlefield from '../src/battlefield_copy';



class App extends React.Component {
    constructor() {
        super();

        this.state = {
            dots: [
                [{ color: 'none', disabled: false }, { color: 'none', disabled: false }, { color: 'none', disabled: false }, { color: 'none', disabled: false }, { color: 'none', disabled: false }],
                [{ color: 'none', disabled: false }, { color: 'none', disabled: false }, { color: 'none', disabled: false }, { color: 'none', disabled: false }, { color: 'none', disabled: false }],
                [{ color: 'none', disabled: false }, { color: 'none', disabled: false }, { color: 'none', disabled: false }, { color: 'none', disabled: false }, { color: 'none', disabled: false }],
                [{ color: 'none', disabled: false }, { color: 'none', disabled: false }, { color: 'none', disabled: false }, { color: 'none', disabled: false }, { color: 'none', disabled: false }],
                [{ color: 'none', disabled: false }, { color: 'none', disabled: false }, { color: 'none', disabled: false }, { color: 'none', disabled: false }, { color: 'none', disabled: false }],
            ],
            player: false,
        }



    }
    onMouseMove(e) {
        // console.log(e.nativeEvent.offsetX, e.nativeEvent.offsetY);

    }

    onClick(i,j) {
        
        if (this.state.player == false){
            const arr = this.state.dots;
                    
            for (let i in arr) {
                for (let j in arr[i]) {
                        
                        color= 'red'
                

            }
        }
            
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

    }


    render() {
        const arr = this.state.dots;
        const div = [];
        for (let i in arr) {
            for (let j in arr[i]) {
                div.push(<div onClick={this.onClick.bind(this, 0,0)} className="dots" key={i + j} style={{ background: this.state.dots[i][j].color, top: i * 50, left: j * 50 }}></div>)
            }

        }
        console.log(div);



        return (
            <div id="battlefield" onMouseMove={this.onMouseMove.bind(this)}>
                {div}
            </div>
        )
    }
}

ReactDOM.render((
    <div id="container">
        <App />
    </div>


), document.getElementById('root'))