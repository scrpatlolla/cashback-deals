import React from "react";
import "./index.css";

class Percentages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      percentages: [],
      show: false
    };
  }
  
  componentDidMount() {
    fetch("https://5e15531421f9c90014c3d07e.mockapi.io/percentage")
      .then(res => res.json())
      .then(response => {
        this.setState({
          percentages: response
        });
      });
  }

  render() {
    return (
      <div className="percent-container">
        {this.state.percentages.map((el, i) => {
          return (
            <div id="content" key={i}>
              <a href={`/percentage/${el.percentage.replace('%', '')}`} className="percentages"><div className="circle blue">
                {el.percentage}
              </div></a>
            </div>  
          );
        })}
      </div>
    );
  }
}

export default Percentages;