function Datepicker({ id, htmlFor, label }) {
    return(
        <div>
            <label htmlFor={ htmlFor }>{ label }</label>
            <input id={ id } type="date"/>
        </div>
    )
}

export default Datepicker