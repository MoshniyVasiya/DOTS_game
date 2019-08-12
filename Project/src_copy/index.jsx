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
    }


  }

  playerChanger() {
    return this.state.player === 1 ? 2 : 1;
  }

  colorChanger() {
    return this.state.player === 1 ? 'red' : 'blue'
  }

  logic() {
    for (let y0 = 0; y0 < this.state.dots.length; y0 += 1) {

      for (let x0 = 0; x0 < this.state.dots[y0].length; x0 += 1) {

        const dot = this.state.dots[y0][x0];

        if (dot.color !== 'transparent' ) {
          const needColor = dot.color === 'red' ? 'blue' : 'red';

          out: for (let dy = -1; dy < 2; dy += 1) {
            for (let dx = -1; dx < 2; dx += 1) {

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

                if (result && result.length >= 4 && a[0] && a[1] && a[2] && a[3] && result.length % 2 == 0 ) {

                  console.log(result);
                  dot.color = 'white';
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

    for (let dy = -1; dy < 2; dy += 1) {
      for (let dx = -1; dx < 2; dx += 1) {
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
    // this.surroundCheck(i, j);




    this.logic()


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
    )
  }
}

ReactDOM.render((
  <div id="container">
    <App />
  </div>


), document.getElementById('root'))