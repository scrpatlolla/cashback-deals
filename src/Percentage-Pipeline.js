  
import React from "react";
import "./index.css";

class Pipeline extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Pipeline: [],
      show: false
    };
  }
  componentDidMount() {
    fetch(`../landing-${window.location.href.substring(window.location.href.lastIndexOf('/') + 1)}.json`, {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    })
      .then(res => res.json())
      .then(response => {
        this.setState({
          Pipeline: response.data
        });
      });
  }
  render() {
    return (
      <div className="App">
        <h1 className="header">Percentages Details</h1>
        <div className="articles-container">
        {this.state.Pipeline.map((el, i) => {
          return (
            <>
              <article className="card n-cards" key={i}>
                <div className="thumb">
                </div>
                <div className="infos">
                  <h2 className="title">{el.attributes.companyName}<span className="flag"></span></h2>
                  <h3 className="date">{el.attributes.card}</h3>
                  <h3 className="seats">{el.attributes.category}</h3>
                  <p className="txt">
                    {el.attributes.content}
                  </p>
                </div>
              </article>
            </>
          )
        })}
        </div>
        <div className="back-container">
            <a href="/" className="back">Go Back</a>
        </div>
      </div>
    );
  }
}

export default Pipeline;