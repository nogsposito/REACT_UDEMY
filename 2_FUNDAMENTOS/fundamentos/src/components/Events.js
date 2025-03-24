const Events = () => {

    const handleMyEvent = (e) => {
        console.log(e);
    };

    const renderSomething = (x) => {
        if (x){
            return <h1>render isso</h1>
        } else {
            return <h1>render aquilo</h1>
        }
    }

    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique aqui</button>
            </div>
            <div>
                <button onClick={() => console.log("click")}>Clique aqui também</button>
            </div>
            {renderSomething(true)}
        </div>
    )

}

export default Events;