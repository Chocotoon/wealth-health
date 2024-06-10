function Dropdown({ name, id, data}) {
    return(
        <div>
            <select name={ name } id={ id }>
                {data.map(option =>
                     (<option key={`${option.name}-${option.abbreviation}`}>
                        {option.name}
                     </option>))}
            </select>
        </div>
    )
}

export default Dropdown