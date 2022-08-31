import './App.css';
import bottle from './components/assets/img/bottle.jpeg';
import photo2 from './components/assets/img/photo2.avif';
import photo3 from './components/assets/img/photo3.avif';

import SuperShop from './components/supershop/SuperShop.js'

let products = [
  { fpath: { bottle }, productname: 'cocooil', price: '30$' },
  { fpath: { photo2 }, productname: 'Polaroid', price: '60$' },
  { fpath: { photo3 }, productname: 'Maui Moisture', price: '20$' }
]

let myArr = [bottle, photo2, photo3];

function App() {
  return (
    <>
      <h1>SUPERSHOP</h1>
      <div className="clsParent">
        {
          products.map((element, index) =>
            <SuperShop
              imgpath={myArr[index]}
              pname={element.productname}
              price={element.price}
            />
          )
        }
      </div>
    </>);
}

export default App;
