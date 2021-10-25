import React from "react";

import "./distribution.styles.css";
class Distribution extends React.Component {
  constructor() {
    super();

    this.state = {
      randomNumberUrl: "0000",
      userInput: "",
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = () => {
    const userInputNum = this.state.userInput;

    if (userInputNum < 0 || userInputNum > 9999) {
      return;
    }

    const numStr = userInputNum.toString();
    let formattedStr = "";

    if (numStr.length > 4) {
      return;
    }

    switch (numStr.length) {
      case 1:
        formattedStr = "000" + numStr;
        this.setState({
          randomNumberUrl: formattedStr,
          userInput: formattedStr,
        });
        break;
      case 2:
        formattedStr = "00" + numStr;
        this.setState({
          randomNumberUrl: formattedStr,
          userInput: formattedStr,
        });
        break;
      case 3:
        formattedStr = "0" + numStr;
        this.setState({
          randomNumberUrl: formattedStr,
          userInput: formattedStr,
        });
        break;
      default:
        formattedStr = numStr;
        this.setState({
          randomNumberUrl: formattedStr,
          userInput: formattedStr,
        });
    }
  };

  handleGenerateRandomNum = () => {
    const generatedNumber = Math.floor(Math.random() * 10000);
    const numStr = generatedNumber.toString();
    let formattedStr = "";

    switch (numStr.length) {
      case 1:
        formattedStr = "000" + numStr;
        this.setState({
          randomNumberUrl: formattedStr,
          userInput: formattedStr,
        });
        break;
      case 2:
        formattedStr = "00" + numStr;
        this.setState({
          randomNumberUrl: formattedStr,
          userInput: formattedStr,
        });
        break;
      case 3:
        formattedStr = "0" + numStr;
        this.setState({
          randomNumberUrl: formattedStr,
          userInput: formattedStr,
        });
        break;
      default:
        formattedStr = numStr;
        this.setState({
          randomNumberUrl: formattedStr,
          userInput: formattedStr,
        });
    }
  };

  handleClick = () => {
    this.handleGenerateRandomNum();
  };

  componentDidMount() {
    this.handleGenerateRandomNum();
  }

  render() {
    return (
      <div className="distribution-container">
        <div className="distribution">
          <div className="content-placeholder">
            <div className="main-image">
              <img
                className="image-generated"
                alt="img"
                src={
                  require(`../../resources/${this.state.randomNumberUrl}.png`)
                    .default
                }
              />
            </div>
            <div className="button-holders">
              <div>
                <div className="punk-holder-main">
                  <input
                    className="random-num"
                    name="userInput"
                    type="number"
                    max={9999}
                    min={0}
                    value={this.state.userInput}
                    onChange={this.handleChange}
                  />
                  <div onClick={this.handleSubmit} className="punk">
                    See Punk
                  </div>
                </div>
                <button onClick={this.handleClick} className="random">
                  Random Punk
                </button>
              </div>
              <div className="sub-image">
                <img
                  className="image-larva"
                  alt="img"
                  src={`https://larvalabs.com/public/images/cryptopunks/punk${this.state.randomNumberUrl}.png`}
                />
              </div>
            </div>
          </div>
          <div className="distribution-content">
            <span className="distribution-title">DISTRIBUTION</span>
            <p className="distribution-sub-title">
              There will only ever be 10,000 MyFirstPunks.
            </p>
            <ul className="list-distribution">
              <li>100 will be given away to community pre-sale</li>
              <br />
              <br />
              <li>9700 can be minted in the private and public sales</li>
              <br />
              <br />
              <li>
                100 will be kept in a treasury for community building efforts.
              </li>
              <br />
              <br />
              <li>
                The final 100 will be kept by Infant.Anon and his friends who
                have helped out along the way.
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Distribution;
