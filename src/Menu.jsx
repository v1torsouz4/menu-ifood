import "./Menu.css"

function Menu({texto, texto2}) {

    return(
      
        <div className="ce">

        <p>{texto}</p>

        <button className="botao">

            <p>{texto2}</p>
        </button>

    </div>

    );
}


export default  Menu