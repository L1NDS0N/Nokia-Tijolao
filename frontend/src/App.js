import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
// import service from './service.js';
import axios from 'axios';


function App() {

    const api = axios.create({
        baseURL: 'http://localhost:8080',
    });

    const [valorFinal, setValorFinal] = useState('');
    const [resultado, setResultado] = useState('');

    function handleButtonClick(value) {
        let temp = valorFinal;
        temp += value;
        setValorFinal(temp);
    };

    function handleClear(event) {
        setValorFinal('');
    };

    async function handleSubmit(event) {
        event.preventDefault();
        console.log(valorFinal);
        const resultado = await api.post(`https://3333-d563c3b7-1424-48c2-be08-d3e0fd93d9a4.ws-us02.gitpod.io/app/2 222 222 33 66 8 88 777 33`);
        setResultado(resultado.data.palavraGerada);
        // await api.post(`https://3333-d563c3b7-1424-48c2-be08-d3e0fd93d9a4.ws-us02.gitpod.io/app/`, valorFinal);
    };
    
    return (
        <div className="NokiaTijolao">
            <header className="App-header">
                <h1 className="Titulo">Desafio Accenture - Nokia</h1>
            </header>

            <div className="input-group mb-3">
                <input
                    type="text"
                    id="display"
                    className="form-control"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                />
            </div>

            <div>Valor final - {valorFinal}</div>

            <main className="container">
                <div className="row">
                    <div className="col-sm-4">
                        <button onClick={() => { handleButtonClick('1') }}>
                            1<div className="Letters">o_o</div>
                        </button>
                        <button onClick={() => { handleButtonClick('2') }}>
                            2<div className="Letters">abc</div>
                        </button>
                        <button onClick={() => { handleButtonClick('3') }}>
                            3<div className="Letters">def</div>
                        </button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-4">
                        <button onClick={() => { handleButtonClick('4') }}>
                            4<div className="Letters">ghi</div>
                        </button>
                        <button onClick={() => { handleButtonClick('5') }}>
                            5<div className="Letters">jkl</div>
                        </button>
                        <button onClick={() => { handleButtonClick('6') }}>
                            6<div className="Letters">mno</div>
                        </button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-4">
                        <button onClick={() => { handleButtonClick('7') }}>
                            7<div className="Letters">pqrs</div>
                        </button>
                        <button onClick={() => { handleButtonClick('8') }}>
                            8<div className="Letters">tuv</div>
                        </button>
                        <button onClick={() => { handleButtonClick('9') }}>
                            9<div className="Letters">wxyz</div>
                        </button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-4">
                        <button onClick={() => { handleButtonClick(' ') }}>
                            0<div className="Letters">__</div>
                        </button><br />
                        <button onClick={handleSubmit} className="send">
                            Enviar
                        </button>
                        <button className="clear" onClick={handleClear}>
                            Limpar
                        </button>

                        <div>Resultado = {resultado}</div>
                    </div>
                </div>

            </main >
        </div >
    );
}

export default App;
