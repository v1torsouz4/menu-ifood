import Opcoes from "./Opcoes.jsx"
import Menu from "./Menu.jsx"
import "./Opcoes.css"

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

		{
			texto2:"Criar conta"

		},

		{
			texto2:"Entrar"

		},
		

	];


	const opcoes = [
		{
			img: "big-king.webp",
			nome: "Combo Big King",
			desc: "Um hambúguer com duas carnes bovinas grelhadas de 57g, pão com gergelim, queijo...",
			quanti: "Serve 1 pessoa",
			valor: "R$ 41,90",
		},
		{
			img: "cheddar-duplo.webp",
			nome: "Combo Cheddar Duplo",
			desc: "Um hambúguer com duas carnes bovinas grelhadas de 57g, pão com gergelim, queijo...",
			quanti: "Serve 1 pessoa",
			valor: "R$ 41,90",
		},
		{
			img: "cheeseburger-duplo.webp",
			nome: "	Combo Cheeseburger Duplo com Bacon",
			desc: "Um hambúguer com duas carnes bovinas grelhadas de 57g, pão com gergelim, queijo...",
			quanti: "Serve 1 pessoa",
			valor: "R$ 36,90",
		},
		{
			img: "mega-stacker.webp",
			nome: "Combo Mega Stacker 2.0",
			desc: "Um hambúguer com duas carnes bovinas grelhadas de 113g, pão com gergelim, queijo...",
			quanti: "Serve 1 pessoa",
			valor: "R$ 51,90",
		},
	];

	return(
<div className="principal">
		
			<div className="part1">
	
		  			{menu.map((men, con) => {
						return <Menu key={con}
	
			  			texto={men.texto}
						texto2={men.texto2}
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