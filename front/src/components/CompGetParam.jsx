import React, {useState, useEffect} from 'react';
import { getFetchData } from '../util/fetchDatas';

export default function CompGetParam() {
    const [list, setList] = useState([]);
    useEffect(() => {
        const fetchData = async() => {
            const jsonData = await getFetchData('products');
            setList(jsonData.products);
        }
        fetchData();
    }, []);

    const handleProductDetail = async (product) => {
        const jsonData = await getFetchData(`products/${product.pid}`);
        console.log(jsonData);
    }

    return (
        <div style={{width:"1000px", margin:"auto"}}>
            <h1>GET :: Product List</h1>
            <ul style={{display:"flex", gap:"10px", listStyle:"none"}}>
                {list?.map((product) => 
                    <li key={product.pid}>
                        <img src={product.img}
                            style={{width: "150px", cursor: "pointer"}}
                            onClick={()=>{handleProductDetail(product)}}
                        />
                        <p>{product.name}</p>
                        <p>{product.price}</p>
                    </li>
                )}
            </ul>
        </div>
    );
}