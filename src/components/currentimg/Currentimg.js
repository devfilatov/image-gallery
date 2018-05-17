import React, { Component } from 'react';
import './Currentimg.css';

export default class Currentimg extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var img = this.props.img;
    return (
      <div className="block">
        <img
          src={img.url}
          onClick={() => {
            this.props.imgState.setState({
              urlCurrentImg: img.url,
              textCurrentImg: img.text
            });
          }}
        />
        <p>{img.text}</p>
      </div>
    );
  }

  // Img.defaultProps = {
  //   url: "http://www.ya.ru",
  //   text: "yandex"
  // }
}
