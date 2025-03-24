const Challenge = () => {

    const n1 = 6;
    const n2 = 8;

    return (
        <div>
            <div>
                <p>N1: {n1}</p>
                <p>N2: {n2}</p>
            </div>
            <div>
                <button onClick={() => console.log(n1 + n2)}>Soma</button>
            </div>
        </div>
    )
}

export default Challenge;