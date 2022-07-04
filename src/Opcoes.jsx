import "./Opcoes.css"

function Opcoes({img, nome, desc, quanti, valor}) {

    return(
      
        <div className="centro">

        <img src={img} alt="COMBO" />

        <h3>{nome}</h3>

        <p>{desc}</p>

        <strong>{quanti}</strong>
        
        <p>{valor}</p>
        
    </div>

    );
}


export default  Opcoes