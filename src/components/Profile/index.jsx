import "./styles.css"
export default function Profile({ nome, idade, profissao, foto }) {
    return (
        <div className="body">
            <h1 className="name">NOME: {nome}</h1>
            <p className="age">IDADE: {idade} anos</p>
            <p className="profission">PROFISSÃO: {profissao}</p>
            <img src={foto} alt="" className="photo" />
        </div>
    )
}