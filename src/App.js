import React, { Component } from "react";
import "./styles.css";

export default class React05 extends Component {
  state = {
    frutas: [
      { tipo: "cítrica", fruta: "laranja" },
      { tipo: "seca", fruta: "nozes" },
      { tipo: "carnosa", fruta: "melância" },
      { tipo: "exótica", fruta: "lichia" },
      { tipo: "tropical", fruta: "abacaxi" },
      { tipo: "cítrica", fruta: "limão" },
      { tipo: "exótica", fruta: "pitaia" }
    ]
  };
  render() {
    return (
      <nav>
        {this.state.frutas.map((rastrear) => (
          <ul>
            <li>
              O tipo da fruta é {rastrear.tipo} e um exemplo de fruta para esse
              tipo é: {rastrear.fruta}.
            </li>
          </ul>
        ))}
      </nav>
    );
  }
}
