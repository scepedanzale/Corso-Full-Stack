
function ChiamataAjaxComponent(){
   
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => {
            console.log(json)
            return(
                <table>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>titolo</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{json.id}</td>
                            <td>{json.title}</td>
                        </tr>
                    </tbody>
                </table>
            )
        } )
        .catch(error => console.log(error))
}

export default ChiamataAjaxComponent;