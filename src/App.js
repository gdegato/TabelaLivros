import React, { Component } from "react";
import TabelaHead from "./components/TabelaHead";
import TabelaFoot from "./components/TabelaFoot";
import TabelaBody from "./components/TabelaBody";

class App extends Component {
  state = {
    livros: []
  };

  componentDidMount() {
    fetch("/api/livros.json")
      .then(response => response.json())
      .then(livros => this.setState({ livros }))
      .catch(function (error) {
        alert("Erro na requisição");
      })
      .finally(function () {
        console.log("Sempre retorna");
      });
  };

  handleRemoverLinha = (id) => {
    const livros = this.state.livros.filter(l => l.id !== id);
    this.setState({ livros });
  };

  handleOrdenarCrescente = (titulo) => {
    const livros = this.state.livros.sort((a, b) => a.titulo < b.titulo ? -1 : 0);
    this.setState({ livros });
  };

  handleOrdenarDecrescente = titulo => {
    const livros = this.state.livros.sort((a, b) => a.titulo < b.titulo ? -1 : 0);
    livros.reverse();
    this.setState({ livros });
  };

  handleOrdenarAlfabCrescente = (autor) => {
    const livros = this.state.livros.sort((a, b) => a.autor < b.autor ? -1 : 0);
    this.setState({ livros });
  }

  handleOrdenarAlfabDecrescente = (autor) => {
    const livros = this.state.livros.sort((a, b) => a.autor < b.autor ? -1 : 0);
    livros.reverse();
    this.setState({ livros });
  }

  render() {
    return (
      <table className="tabela">
        <TabelaHead ordenarCrescente={this.handleOrdenarCrescente} ordenarDecrescente={this.handleOrdenarDecrescente} ordenarAlfabCrescente={this.handleOrdenarAlfabCrescente}
          ordenarAlfabDecrescente={this.handleOrdenarAlfabDecrescente} />

        <TabelaFoot qtdeLivros={this.state.livros.length} />

        <TabelaBody livros={this.state.livros} removerLinha={this.handleRemoverLinha} />
      </table>
    );
  }
}

export default App;
