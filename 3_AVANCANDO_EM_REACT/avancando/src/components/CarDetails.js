const CarDetails = ({brand, km, color, newCar}) => {
  return (
    <div>
        <h2>Detalhes de carro</h2>
        <ul>
            <li>Marca: {brand}</li>
            <li>KM: {km}</li>
            <li>Cor: {color}</li>
        </ul>
        {newCar && <p>Este caro é novo</p>}
    </div>
  )
}

export default CarDetails