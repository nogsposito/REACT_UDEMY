const TemplateExpressions = () => {
    const name = "Matheus";
    const data = {
        age: 31,
        job: "Programmer",
    }

    return (
        <div>
            <h1>Olá {name}, tudo bem?</h1>
            <p>Você atua como {data.job}</p>
            <p>{console.log("eai")}</p>
        </div>
    );
};

export default TemplateExpressions;