function Opcoes({img, nome, desc, quanti, valor}) {

    return(
      
        <div className="centro">

        <p>{img}</p>
        <h3>{nome}</h3>
        <p>{desc}</p>
        <strong>{quanti}</strong>
        <p>{valor}</p>
    </div>

    );
}


export default  Opcoes