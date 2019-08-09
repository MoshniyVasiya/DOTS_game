import React from 'react';
import ReactDOM from 'react-dom';
import Dot from './button'

class App extends React.Component {
    constructor() {
        super();

        function createDots() {
            const dotArr = [];
            for (let i = 0; i < 10; i++) {
                dotArr[i] = [];
                for (let j = 0; j < 10; j++) {
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

    // surroundCheck(i, j) {
    //     let xxx = this.state.dots[i];
    //     let yyy = this.state.dots[j];


    //     if (this.state.dots[i][j].color === 'red' && i !== 0 && j !== 0 && i !== j) {
    //         for (let x = i - 1, y = j - 1;
    //             x <= i + 1, y <= j + 1;
    //             x++ , y++) {
    //             if (this.state.dots[i][j].color === 'blue' || this.state.dots[i][j].color === 'transparent') {
    //                 return console.log(' похожих соседей нет')
    //             } else if (this.state.dots[i][j].color === 'red') {
    //                 surroundCheck(xxx[x], yyy[y]);
    //             }
    //         }
    //     }
    // }




    // logicRed(arr, i, j) {

    //     let sum = 0
    //     if (arr[i][j].color === 'red') {
    //         console.log(i + '_' + j)
    //         for (let x = i - 1; x <= i + 1; x++) {
    //             for (let y = j - 1; y <= j + 1; y++) {
    //                 if (arr[i + 1][j + 1].color === "blue" && arr[i + 1][j - 1].color === "blue" && arr[i - 1][j + 1].color === "blue" && arr[i - 1][j - 1].color === "blue") {
    //                     sum += 1
    //                 }

    //             }
    //         }
    //     }
    //     if (sum > 4) {
    //         console.log("RED_!_DONE")
    //     }
    //     console.log(sum)
    // }

   



    thrower(arr, i, j, color) {

        let result ;
        if (arr[i][j].color === color) {
            console.log(i + '_the color is '+ color + '_' + j)
            for (let x = i - 1; x <= i + 1; x++) {
                for (let y = j - 1; y <= j + 1; y++) {
                    
                    result = thrower(arr, x, y, color)     
                        if (arr[x][y].color === color){  
                            return result()
                        }else { 
                            return null
                        }
                    
                    
                } 
            }
        }
       
    }



    
   
    onClick(i, j) {
        const changer = this.state.dots[i][j];
        changer.color = this.colorChanger();
        const arr = this.state.dots;
        const color = this.state.dots[i][j].color;
        changer.disabled = true;

        this.setState({
            dots: [...this.state.dots],
            player: this.playerChanger(),

        })
        // this.surroundCheck(i, j);

        


        this.thrower(arr, i, j, color)


    }



    render() {

        console.log();


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