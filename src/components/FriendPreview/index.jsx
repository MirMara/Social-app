import styles from "./FriendPreview.module.scss";

const FriendPreview = (props) => {
    const data = props.data || {
        name: "Friend", 
        photo: "",
    };

    return (
        <div className={styles.friend}>
            <p>{data.name}</p>
            <img src={data.photo} alt={data.name} />
        </div>
    );
};

export { FriendPreview};