import FAQ from "./Faq"
import Form from "./Form"
import Map from "./Map"
import classes from './Contact.module.css'

const Contact = () =>{
    return (
        <>
        <FAQ/>
        <div className={classes.contact}>
            <Form/>
            <Map/>
        </div>
        </>
    )
}
export default Contact