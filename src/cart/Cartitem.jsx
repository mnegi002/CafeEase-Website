const Cartitem = () => {
  return (
    <>
      <div className="container">
        <div className="cart-box">
          <div className="item-box">
            <div className="item-detail">
              <div className="item-name">
                <p>Maggi</p>
              </div>
              <div className="item-price">
                <div className="price">
                  <p>200</p>
                </div>
                <div className="quantity">
                  <p>x1</p>
                </div>
              </div>
            </div>

            <div className="incre-decre">
              <button>+</button>
              <button>-</button>
            </div>
          </div>
          <div className="total-box">
            <div className="amount-box">
              <div className="total-text">
                <b>Total Amount</b>
              </div>
              <div className="total-amount">
                <b>NA</b>
              </div>
            </div>
            <div className="close-order-cart-buttons">
              <button className="close-button">close</button>
              <button className="order-button">order</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cartitem;
