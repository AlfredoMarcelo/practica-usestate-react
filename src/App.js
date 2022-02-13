import { useState } from "react";

function App() {
  const hola = (
    <>
      <h1>Hola 🤩</h1>
    </>
  );
  const chao = (
    <>
      <h1>Chao 🥱</h1>
    </>
  );

  const [saludo, setSaludo] = useState(hola);
  const [count, setCount] = useState(0)
  
  


  return (
    <div className="container">
      <div className="row mt-5 text-center">
        <div className="col-12">
          {saludo}
        </div>
        <div className="col-12">
          <div className="d-grid gap-2">
            <button onClick={()=>setSaludo(chao)} className="btn btn-outline-danger rounded-pill">
              <p className="h5">Despidete</p>
            </button>
            <button onClick={()=>setSaludo(hola)} className="btn btn-outline-success rounded-pill">
              <p className="h5">Saluda</p>
            </button>
          </div>
        </div>
        <div className="col-12">
            <p className="h1">{count ===15? "Ya enserio cortala de apretar el boton, vas haciendolo 15 veces 🙄":count ===10?"Es enserio?, ya apretaste 10 veces 😐":count === 5?"Ya apretaste 5 veces 😮":count}</p>
        </div>
        <div className="col-12">
          <div className="d-grid gap-2">
            <button className="btn btn-outline-warning rounded-pill" onClick={()=>setCount(count + 1)}>Click me!</button>
          </div>
        </div>
        </div>
      </div>
  );
}

export default App;
