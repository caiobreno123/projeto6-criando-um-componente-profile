import Perfil from "./components/Profile"
export default function App() {
  return (
    <div className="App">
      <Perfil nome='Carlos antonio' idade='22' profissao='Trader' foto={"https://th.bing.com/th/id/OIP.ii9zI9gpbWP2J8VOG5JRhQHaGF?w=216&h=180&c=7&r=0&o=5&pid=1.7"} />
      <Perfil nome='José Enzo' idade='17' profissao='Programador' foto={"https://media.licdn.com/dms/image/D5603AQHNp9Uerm1Law/profile-displayphoto-shrink_800_800/0/1673969710595?e=2147483647&v=beta&t=NSwpcvEqAtqqs39vEbNLiNjkOrPhMFzmBbKfo1vC9xM"} />
      <Perfil nome='Francisco cavalcante' idade='33' profissao='Comerciante' foto={"https://static.vecteezy.com/system/resources/previews/006/675/277/non_2x/trade-line-icon-vector.jpg"} />
    </div>
  )
}
