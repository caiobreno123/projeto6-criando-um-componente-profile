import Perfil from "./components/Profile"
export default function App() {
  return (
    <div className="App">
      <Perfil nome='Helder Lima' idade='25' profissao='Trader' foto={"https://th.bing.com/th/id/OIP.mkzAbppmkgJBUlx0iEil3wHaHa?w=183&h=183&c=7&r=0&o=5&pid=1.7"} />
      <Perfil nome='José Enzo' idade='23' profissao='Programador' foto={"https://static.vecteezy.com/system/resources/previews/012/591/917/original/programmer-icon-illustration-vector.jpg"} />
      <Perfil nome='Francisco Tiago' idade='27' profissao='Comerciante' foto={"https://static.vecteezy.com/system/resources/previews/006/675/277/non_2x/trade-line-icon-vector.jpg"} />
    </div>
  )
}