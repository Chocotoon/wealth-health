function EmployeeTableTH({ scope, children }) {
    return (
        <th scope={scope}>
            <div style={{ display: "flex", justifyContent: "center" }}>
                {children}
            </div>
        </th>
    )
}

export default EmployeeTableTH