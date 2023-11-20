// import './Menudata'
import classes from './Menu.module.css'
const MenuCard = (props) => {
  return (
    <>
      <div className={classes['card-container']}>
        <div className={classes['card-carousel']}>
          <div className={classes.slider}>
            <img className={classes['slider-image']} id={classes['slide-1']}
              src={props.imgsrc_1} alt='err' />
            <img className={classes['slider-image']} id={classes['slide-2']}
              src={props.imgsrc_2} alt='err' />
            <img className={classes['slider-image']} id={classes['slide-3']}
              src={props.imgsrc_3} alt='err' />
          </div>
        </div>
        <div className={classes.category}>
          <button>{props.title}</button>

        </div>

      </div>
    </>
  );
};
export default MenuCard;