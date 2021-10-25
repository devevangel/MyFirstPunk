import React from "react";

import "./compare.styles.css";

class Compare extends React.Component {
  constructor() {
    super();

    this.state = {
      startNumber: 0,
      endNumber: 1,
      lists: [],
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = () => {
    const startNum = parseInt(this.state.startNumber);
    const endNum = parseInt(this.state.endNumber);

    if (startNum < 0 || endNum > 9999) {
      return;
    }

    const startNumStr = !startNum.toString();
    const endNumStr = !endNum.toString();

    if (startNumStr.length > 4 || endNumStr.length > 4) {
      return;
    }

    const interval = 1;

    const length = (endNum - startNum) / interval + 1;
    const arr = Array.from({ length }, (_, i) => startNum + i * interval);
    const newArray = [];

    for (let i = 0; i < arr.length; i++) {
      const currentValStr = arr[i].toString();
      let formattedStr = "";

      switch (currentValStr.length) {
        case 1:
          formattedStr = "000" + arr[i];
          break;
        case 2:
          formattedStr = "00" + arr[i];
          break;
        case 3:
          formattedStr = "0" + arr[i];
          break;
        default:
          formattedStr = arr[i];
      }
      newArray.push(formattedStr);
    }
    this.setState({ lists: newArray });
  };

  render() {
    return (
      <div className="compare-container">
        <div className="card-container">
          <label>Start Number</label>
          <input
            type="number"
            min={0}
            max={9998}
            name="startNumber"
            value={this.state.startNumber}
            onChange={this.handleChange}
            placeholder="enter starting number..."
          />
          <label>End Number</label>
          <input
            type="number"
            min={1}
            max={9999}
            name="endNumber"
            value={this.state.endNumber}
            onChange={this.handleChange}
            placeholder="enter end number..."
          />
          <br />
          <button onClick={this.handleSubmit} className="submit-button">
            Get
          </button>
        </div>

        <div className="list">
          {this.state.lists.map((item, index) => (
            <div className="list-holder">
              <h3 className="number-text">{item}</h3>
              <div key={index} className="image-side">
                <img
                  className="list-image"
                  alt="img"
                  src={require(`../../resources/${item}.png`).default}
                />
                <img
                  className="image-cloud"
                  alt="img"
                  src={`https://larvalabs.com/public/images/cryptopunks/punk${item}.png`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Compare;
