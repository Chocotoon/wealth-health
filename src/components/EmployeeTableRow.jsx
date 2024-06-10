function EmployeeTableRow({ data }) {
    return (
            <tr className="body_tr">
                {Object.keys(data).map(stat => (
                    <td key={stat}>
                        {data[stat]}
                    </td>
                ))}
            </tr>
    );
}

export default EmployeeTableRow;