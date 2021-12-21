import styles from "./Modal.module.scss";
// const [show, setShow] = useState (false)
const Modal = (props) => {
   let result = "";

    if (props.value === "red") {
        result = "Post successfully deleted";
    } if (props.value === "#3fc0eb") {
        result = "Post successfully Added"
    }
    return (
        <div className={styles.modal} style={{background: props.value}}>
            <p>{result}</p>
        </div>
    )


}


export {Modal} ;