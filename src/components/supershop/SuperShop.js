import './SuperShop.css';

const SuperShop = (props) => {
    return (
        <>
            <div className="clsChildDiv">
                <img src={props.imgpath} alt="" />
                <p>  {props.pname}</p>
                <p> {props.price}</p>
                <button>BUY NOW</button>
            </div>
        </>
    )
}

export default SuperShop;