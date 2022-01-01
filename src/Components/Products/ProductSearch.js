import React, {useState, useEffect} from "react";
import ProductItem from "./ProductItem";
import { useParams } from "react-router-dom";
import { API_URL } from "../../const";
export default function ProductSearch() {
    const {key} = useParams();
    const [product, setProduct] = useState();

    useEffect(() => {
        fetch(`${API_URL}/api/Products/Filter?searchText=${key}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    const handleShow  = () => {

    }
	return (
		<React.Fragment>
            
			<div className="category">
            <h1>Từ khóa:  '{key}'</h1>
			<div className='category-list'>
				{product ? product.products.map((item) => (
					<ProductItem key={item.id} data={item} />
				)): 'Không có kết quả'}
			</div>
			<div className='showmore'>
				<a className='show' onClick={handleShow} href='javascript:;'>
					Show more
				</a>
			</div>
		</div>
		</React.Fragment>
	);
}
