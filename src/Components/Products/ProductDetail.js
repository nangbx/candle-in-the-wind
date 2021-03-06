import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import "./ProductDetail.scss";
import InputNumber from '../Small/InputNumber'
import {API_URL, IMG_URL} from "../../const"
import { useSelector, useDispatch } from "react-redux";
import { notifySuccess, notifyWarning } from "../../Redux/Actions/Notify";
import { actAddProductRequest } from "../../Redux/Actions/Cart";
export default function ProductDetail() {
  const {user, trang_thai} =  useSelector((state) => state.users);
  const qty = {count: 1}
  const dispatch = useDispatch();
  const { id } = useParams();
  let navigate = useNavigate();
  const [item, setItem] = useState({});
  useEffect(() => {
    fetch(`${API_URL}/api/Products/${id}`)
      .then((res) => res.json())
      .then((item) => setItem(item));
  }, item);
  const handleBack = () => {
    navigate(-1)
  }
  const handleClick = () => {
    if(!trang_thai)
      dispatch(notifyWarning('Bạn chưa đăng nhập'))
    else{
      dispatch(actAddProductRequest({
        id: id,
        count: qty.count
      }))
    }
  };
  return (
    <div className="detail">
      <div className="image">
        <div className="wrapImage">
          <img src={`${IMG_URL}${item.imageUrl}`} alt="" />
          <div className="miniImage">
            <img src={`${IMG_URL}${item.imageUrl}`} alt="" />
            <img src={`${IMG_URL}${item.imageUrl}`} alt="" />
            <img src={`${IMG_URL}${item.imageUrl}`} alt="" />
          </div>
        </div>
      </div>
      <div className="info">
        <a onClick={handleBack}>
          <i className="fas fa-arrow-left" />
          Back
        </a>
        <h1>{item.name}</h1>
        <h2>{item.write}</h2>
        <p>{item.description}</p>
        <hr />
        <br/>
        <div>
          Số lượng: <InputNumber quantily={qty}/>
        </div>
        <h3>Giá: {item.price}</h3>
        <button className="add" onClick={handleClick}>ADD TO CARD</button>
      </div>
    </div>
  );
}
