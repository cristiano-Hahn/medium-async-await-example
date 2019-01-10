import React, { Component } from 'react';
import Axios from 'axios';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      inputValue: '89874000',
      nameOfCity:''
    }
  }



  async executarPesquisas(){
    await this.buscarCidade('89874000')
    await this.buscarCidade('89873000')
  }

  async buscarCidade(numeroDoCep){
    const url = `https://viacep.com.br/ws/${numeroDoCep}/json/`

    let cidadeEncontrada 
    
    await Axios.get(url)
      .then( (resultado) => cidadeEncontrada = resultado.data.localidade)
      .catch((erro) => alert("Erro: " + erro))

      alert("Resultado: " + cidadeEncontrada)
  }

  render() {
    return (
      <div className="App">
        <input
          type='number'
          placeholder='Informe um cep'
          value={this.state.value}
          onChange={e => this.setState({inputValue: e.target.value})}
        />  

        <button onClick={() =>this.buscarCidade(this.state.inputValue)}>
          Buscar nome da cidade
        </button>

        <h1>{this.state.nameOfCity}</h1>
      </div>
    );
  }
}

export default App;
