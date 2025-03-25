const UserDetails = ({nome, idade, profissao}) => {
  return (
    <div>
        <h2>Detalhes da pessoa</h2>
        <ul>
            <li>Nome: {nome}</li>
            <li>Idade: {idade}</li>
            <li>Profissao: {profissao}</li>
            {idade >= 18 ? (
                <div>
                    <p>Pode tirar carteira</p>
                </div>
            ) : (
                <div>
                    <p>Não pode tirar carteira</p>
                </div>
            )}
        </ul>
    </div>
  )
}

export default UserDetails