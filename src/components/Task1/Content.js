import React, { Component } from "react";
import Header from "./Header";
import Image from "./Image";
import "./styles.css";

class Content extends Component {
  constructor(props) {
    super(props);
    this.targetIndex = (158 % 10) + 1;
    this.state = {
      clickedElements: {},
    };
  }

  createToggleClickHandler = (id) => {
    this.setState((prevState) => {
      const isFirstClick = !prevState.clickedElements[id];
      const newClickedState = isFirstClick
        ? "color-toggle"
        : prevState.clickedElements[id] === "color-toggle"
        ? "new-color"
        : "color-toggle";

      return {
        clickedElements: {
          ...prevState.clickedElements,
          [id]: newClickedState,
        },
      };
    });
  };

  render() {
    return (
      <div>
        <Header />
        <p>Місце народження: 3 грудня 2003 року, м. Миколаїв</p>
        <p>
          Освіта: Миколаївська гімназія №3, м. Миколаїв <br />
          Національний технічний університет України «Київський політехнічний
          інститут імені Ігоря Сікорського», м. Київ
        </p>
        <p>Хобі:</p>
        <ul>
          <li>Комп'ютерні ігри</li>
          <li>Настільні ігри</li>
          <li>Готування</li>
        </ul>
        <p>Улюблені фільми:</p>
        <ol>
          {["Будинок «Слово». Нескінчений роман", "Доріан Ґрей", "Рататуй"].map(
            (item, index) => {
              const id = `element${index + 1}`;
              const className =
                this.state.clickedElements[id] || "";

              return (
                <li
                  key={id}
                  id={id}
                  className={className}
                  onClick={() => this.createToggleClickHandler(id)}
                >
                  {item}
                </li>
              );
            }
          )}
        </ol>
        <p>
          По́знань (пол. Poznań, лат. Posnania, нім. Posen) — місто на правах
          повіту в центральній частині західної Польщі, розташоване на Поозер'ї
          Великопольському, на річці Варта, в гирлі Цибіни. Історична столиця
          Великопольщі, від 1999 р. адміністративний центр Великопольського
          воєводства і познанського повіту.
        </p>
        <Image />
      </div>
    );
  }
}

export default Content;