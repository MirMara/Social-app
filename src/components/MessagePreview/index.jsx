import { formatDistance } from "date-fns";
import { it } from "date-fns/locale";
import styles from "./MessagePreview.module.scss";
console.log(formatDistance);

const MessagePreview = (props) => {
  const data = props.data || {
    text: "lorem Ipsum",
    date: new Date(),
    sender: "User",
  };

  return (
    <div className={styles.message}>
      <h5>{data.sender}</h5>
      <p>
        <small>
          {formatDistance(
            new Date(1986, 3, 4, 11, 32, 0),
            new Date(1986, 3, 4, 10, 32, 0),
            { addSuffix: true }
          )}
          ;
        </small>
      </p>
      <p>{data.text}</p>
    </div>
  );
};

export { MessagePreview };
