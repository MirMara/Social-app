/*import { formatDistance } from "date-fns";
import { it } from "date-fns/locale";*/
import {Time} from "../../components/Time";
import styles from "./Post.module.scss";
import { httpDELETE } from "../../libs/http";
import { Modal} from "../Modal";
import { useState } from "react";

const Post = (props) => {
  
  const data =  props.data || {
    author: "User",
    text: "text",
    date: new Date(),
    photo:
      "https://images.unsplash.com/photo-1639512398860-be15f48100ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1024&q=80",
  };

  const [isModalShown, setModalShown] = useState(false);

   const handleDeletePost = () => {
     httpDELETE(`/posts/${props.data.id}`).then(() => {});
     setModalShown(!isModalShown);
    window.location.href = "/";
   };


  return (
    <article className={styles.post}>
       <button onClick={handleDeletePost} className={styles.deleteBtn}>
        X
      </button> 
      {isModalShown && <Modal value="red" /> }
     
      <h3>{data.author}</h3>
      <p>
        <small>
       
        {data.date ? <Time relative= {data.date} /> : <></>}
        </small>
      </p>
      <p>{data.text}</p>

      {data.photo ? <img src={data.photo} alt={data.author} /> : <></>}
    </article>
  );
};

export { Post };
