import { formatDistance } from "date-fns";
import { it } from "date-fns/locale";
import {Time} from "../../components/Time";
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
       <Time relative={data.date} />
        </small>
      </p>
      <p>{data.text}</p>
    </div>
  );
};

export { MessagePreview };
