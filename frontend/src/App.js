import React from 'react';
import './App.css';
//import 'bootstrap/dist/css/bootstrap.css';

function App() {
    return (
        <div className="NokiaTijolao">
            <header className="App-header">
                <h1 className="Titulo">Desafio Accenture - Nokia</h1>
            </header>
            <main className="container">
                <div className="row">
                    <div className="col-sm-4">
                        <button>1</button>
                        <button>2<div className="Letters">abc</div></button>
                        <button>3<div className="Letters">def</div></button>
                    </div>
                </div>
                
                <div className="col-sm">
                <button>4<div className="Letters">ghi</div></button>
                <button>5<div className="Letters">jkl</div></button>
                <button>6<div className="Letters">mno</div></button>
                </div>
                <div className="col-sm">
                <button>7<div className="Letters">pqrs</div></button>
                <button>8<div className="Letters">tuv</div></button>
                <button>9<div className="Letters">wxyz</div></button>
                </div>
                <button>0</button>
            <button className="send">
                Enviar
            </button>
            </main >
        </div >
    );
}

export default App;
