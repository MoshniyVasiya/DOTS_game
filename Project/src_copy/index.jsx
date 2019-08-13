import React from 'react';
import ReactDOM from 'react-dom';
import Dot from './button'
import Header from './header'


class App extends React.Component {
  constructor() {
    super();

    function createDots() {
      const dotArr = [];
      for (let i = 0; i < 10; i++) {
        dotArr[i] = [];
        for (let j = 0; j < 10; j++) {
          dotArr[i][j] = { color: 'transparent', disabled: false, opacity: 1 };
        }
      }
      return dotArr
    }


    this.state = {
      dots: createDots(),
      player: 1,
      lines: [],
      p1Color: '',
      p2Color: '',
    }
    this.handleChangeCompleteP1 = this.handleChangeCompleteP1.bind(this);
    this.handleChangeCompleteP2 = this.handleChangeCompleteP2.bind(this);

  }


  handleChangeCompleteP1(color) {
    this.setState({
      p1Color: color.hex,
    });
  };
  handleChangeCompleteP2(color) {
    this.setState({
      p2Color: color.hex,
    });
  };
  playerChanger() {
    return this.state.player === 1 ? 2 : 1;
  }

  colorChanger() {
    if(this.state.player === 1 && this.state.p1Color !== this.state.p2Color){
      return this.state.player === 1 ? this.state.p1Color : this.state.p2Color;
    }
  }

  logic() {
    for (let y0 = 0; y0 < this.state.dots.length; y0 += 1) {

      for (let x0 = 0; x0 < this.state.dots[y0].length; x0 += 1) {

        const dot = this.state.dots[y0][x0];
        const p1Color = this.state.p1Color;
        const p2Color = this.state.p2Color;

        if (dot.color !== 'transparent') {
          const needColor = dot.color === p1Color ? p2Color : p1Color;

          function funcIf(y0, x0) {
            let resultDy;
            let length;
            if (y0 === 0 || x0 === 0) {
              resultDy = 0;
              length = 2
            }
            else if (y0 === 9) {
              resultDy = 1
              length = 0
            }
            else if (x0 === 9) {
              resultDy = -1;
              length = 0
            }
            else {
              resultDy = -1
              length = 2
            }

            return { cycleValue: resultDy, cycleLength: length }
          };
          const resultFuncIf = funcIf(y0, x0)

          out: for (let dy = resultFuncIf.cycleValue; dy < resultFuncIf.cycleLength; dy += 1) {
            for (let dx = resultFuncIf.cycleValue; dx < resultFuncIf.cycleLength; dx += 1) {

              if (this.state.dots[y0 + dy][x0 + dx].color === needColor) {

                const result = this.rec(needColor, -1, -1, y0 + dy, x0 + dx, []);

                let a = [false, false, false, false]
                for (let i = 0; i < result.length; i += 1) {

                  const yx = result[i].split('-');

                  if (yx[0] < y0) {
                    a[0] = true;
                  }
                  if (yx[0] > y0) {
                    a[2] = true;
                  }
                  if (yx[1] > x0) {
                    a[1] = true;
                  }
                  if (yx[1] < x0) {
                    a[3] = true;
                  }

                }

                if (result && result.length >= 4 && a[0] && a[1] && a[2] && a[3]) {

                  console.log(result);
                  dot.color = 'black';
                  dot.opacity = 0.5;



                  for (let i = 0; i < result.length - 1; i += 1) {

                    this.state.lines.push([result[i].split('-'), result[i + 1].split('-'), needColor]);
                  }

                  this.state.lines.push([result[result.length - 1].split('-'), result[0].split('-'), needColor]);

                  break out;
                }
              }

            }
          }

        }
      }
    }

    this.forceUpdate();
  }

  rec(color, fy, fx, y, x, visited) {
    visited = [...visited, `${y}-${x}`];

    function funcIfRec(y, x) {
      let resultRecY;
      let lengthY;
      if (y === 0 || x === 0) {
        resultRecY = 0;
        lengthY = 2
      } else if (y === 9) {
        resultRecY = -1
        lengthY = 0
      }
      else if (x === 9) {
        resultRecY = -1;
        lengthY = 0
      }
      else {
        resultRecY = -1
        lengthY = 2
      }

      return { cycleValue: resultRecY, cycleLength: lengthY }
    };
    const resultFuncIfRec = funcIfRec(y, x)

    for (let dy = resultFuncIfRec.cycleValue; dy < resultFuncIfRec.cycleLength; dy += 1) {
      for (let dx = resultFuncIfRec.cycleValue; dx < resultFuncIfRec.cycleLength; dx += 1) {
        if (dy === 0 && dx === 0) {
          continue;
        }
        if (y + dy === fy && x + dx === fx) {
          return visited;
        }
        if (this.state.dots[y + dy][x + dx].color === color && visited.indexOf(`${y + dy}-${x + dx}`) === -1) {
          const result = this.rec(color,
            fy === -1 ? y : fy,
            fx === -1 ? x : fx,
            y + dy, x + dx, visited);

          if (result) {
            return result;
          }
        }
      }
    }

    return false;
  }





  onClick(i, j) {
    const dot = this.state.dots[i][j];
    dot.color = this.colorChanger();
    dot.disabled = true;

    this.setState({
      dots: [...this.state.dots],
      player: this.playerChanger(),

    })

    this.logic()

  }
    




  render() {

    console.log(<Header />)
    
    

    return (
      <div id="container">
        <Header 
        colorP1={this.state.p1Color}
        handleChangeCompleteP1={this.handleChangeCompleteP1}
        colorP2={this.state.p2Color}
        handleChangeCompleteP2={this.handleChangeCompleteP2}
        />
        <div id="battlefield">
          {this.state.dots.map((row, i) =>
            row.map((cell, j) => (
              <Dot
                onClick={() => this.onClick(i, j)}
                top={i}
                left={j}
                color={this.state.dots[i][j].color}
                disabled={this.state.dots[i][j].disabled}
                opacity={this.state.dots[i][j].opacity}
                key={i + j}
              />

            ))
          )}
          <svg viewBox="0 0 500 500" style={{ position: 'absolute', pointerEvents: 'none' }}>
            {this.state.lines.map((line, key) => (
              <line
                key={key}
                x1={line[0][1] * 55}
                y1={line[0][0] * 55}
                x2={line[1][1] * 55}
                y2={line[1][0] * 55}
                strokeWidth={3}
                stroke={line[2]}
              />
            ))}
          </svg>
        </div>
      </div>
    )
  }
}

ReactDOM.render((

  <App />



), document.getElementById('root'))