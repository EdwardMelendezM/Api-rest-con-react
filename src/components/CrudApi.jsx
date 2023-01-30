import React, { useState ,useEffect} from 'react';
import { helpHttp } from '../helpers/helpHttp';
const CrudApi = () => {

    const [db, setDb] = useState([]);
    const [dataEdit, setDataEdit] = useState(null);
    let api = helpHttp();
    let url="http://localhost:5000/santos";


    useEffect(() => {
        api.get(url).then(res=>{console.log(res)})
    }, []);



    const createData = () => {
        dataEdit.id = Data.now();
        setDb([...db, data])
    }
    const updateData = (data) => {
        let newData = db.map((el) => (el.id === data.id ? data : el));
        setDb(newData)
    }
    const deleteData = (data) => {
        //let newData = db.map
        console.log("Raa")
    }

    return (
        <div>
            <h2>Crud API</h2>
            <hr />
        </div>
        )
}
export default CrudApi;