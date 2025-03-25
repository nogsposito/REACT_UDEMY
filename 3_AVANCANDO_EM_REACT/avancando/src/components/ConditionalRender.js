import {useState} from 'react'

const ConditionalRender = () => {

    const[x] = useState(true);

    const [name, setName] = useState("Marcos");

    return (
        <div>
            <h1>Exibido?</h1>
            {x && <p>Se x for true sim!</p>}
            <h1>If tenário</h1>
            {name === "João" ? (
                <div>
                    <p>O nome é joão</p>
                </div>
            ) : (
                <div>
                    <p>O nome não é!</p>
                </div>
            )}
            <button onClick = {() => setName("João")}>Joãozar</button>
        </div>
    )

}

export default ConditionalRender