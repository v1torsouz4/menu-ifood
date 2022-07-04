import Opcoes from "./Opcoes.jsx"
import Menu from "./Menu.jsx"

function App() {

	const menu =[

		{
			texto:"Entregador",

		},

		{
			texto:"Resturante e Mercado",

		},

		{
			texto:"Carreiras",

		},

		{
			texto:"Ifood Card"

		},
		

	];


	const opcoes = [
		{
			img: "",
			nome: "Combo Big King",
			desc: "Um hambúguer com duas carnes bovinas grelhadas de 57g, pão com gergelim, queijo...",
			quanti: "Serve 1 pessoa",
			valor: "R$ 41,90",
		},
		{
			img: "",
			nome: "Combo Cheddar Duplo",
			desc: "Um hambúguer com duas carnes bovinas grelhadas de 57g, pão com gergelim, queijo...",
			quanti: "Serve 1 pessoa",
			valor: "R$ 41,90",
		},
		{
			img: "",
			nome: "	Combo Cheeseburger Duplo com Bacon",
			desc: "Um hambúguer com duas carnes bovinas grelhadas de 57g, pão com gergelim, queijo...",
			quanti: "Serve 1 pessoa",
			valor: "R$ 36,90",
		},
		{
			img: "",
			nome: "Combo Mega Stacker 2.0",
			desc: "Um hambúguer com duas carnes bovinas grelhadas de 113g, pão com gergelim, queijo...",
			quanti: "Serve 1 pessoa",
			valor: "R$ 51,90",
		},
	];

	return(
<div className="principal">
		teste
			<div className="part1">
	
		  			{menu.map((men, con) => {
						return <Menu key={con}
	
			  			texto={men.texto}
					/>;
	
	
		 			 })
		  			}
			
			</div>

		<div className="part2">

			{opcoes.map((mens, cons) => {
				return <Opcoes key={cons}

					img={mens.img}
					nome={mens.nome}
					desc={mens.desc}
					quanti={mens.quanti}
					valor={mens.valor}
				/>;


			})
			}

		</div>


	</div>
	);
	


}

export default App;