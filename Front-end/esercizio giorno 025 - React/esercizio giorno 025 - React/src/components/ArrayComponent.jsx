
const ArrayComponent = (props) => {
    return(
        <table>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Cognome</th>
                    <th>Specie</th>
                    <th>Anni</th>
                </tr>
                
            </thead>
            <tbody>
                {props.animali.map(el => {
                        return(
                            <tr>
                                <td>{el.nome}</td>
                                <td>{el.cognome}</td>
                                <td>{el.specie}</td>
                                <td>{el.anni}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}

export default ArrayComponent;