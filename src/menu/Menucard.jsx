import './Menudata'
const Card = (props) => {
  return (
    <>
      <div className="card-container">
        <div className="card-carousel">
          <div className="slider">
            <img className="slider-image" id="slide-1"
              src={props.imgsrc_1} alt="eror" />
            <img className="slider-image" id="slide-2"
              src={props.imgsrc_2} alt="eror" />
            <img className="slider-image" id="slide-3"
              src={props.imgsrc_3} alt="eror" />
          </div>
        </div>
        <div className="category">
          <button>{props.title}</button>

        </div>

      </div>
    </>
  );
};
export default Card;