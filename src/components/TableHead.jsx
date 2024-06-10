function TableHead({children}) {
    return(
        <thead>
            <tr style={{display:'flex', justifyContent:'space-around', flexDirection:"row"}}>
                {children}
            </tr>
        </thead>
    )
}

export default TableHead