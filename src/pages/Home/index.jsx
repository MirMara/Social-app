import { useState, useEffect } from "react";
import { FriendPreview } from "../../components/FriendPreview";
import {MessagePreview} from "../../components/MessagePreview";
import {Post} from "../../components/Post";
import {http} from "./../../libs/http";
import styles from "./home.module.scss";

const friends = [
    {name: 'Chandler', photo: ""},
    {name: 'Pippo', photo: "" },
    {name: 'Geralt', photo: "" },
];

const messages = [
    { text: 'lorem Ipsum', date: new Date (), sender: "Pippo"},
    { text: 'Hey', date: new Date (), sender: "Pluto"},
    { text: 'yooo', date: new Date (), sender: "V"},
    { text: 'finish the fight', date: new Date (), sender: "MasterChieff"},
    { text: 'hello', date: new Date (), sender: "Cortona"},
];

const posts = [
    {author: "User", text:"Oggi ho mangiato cibo buono", date: new Date() },
];

const Home = () => {
 const [friendsPreview, setFriendsPreview] = useState(friends);
 const [allPosts, setAllPosts] = useState(friends);
 const [messagesPreview, setMessagesPreview] = useState(friends); 
// const friendPreview = []; (stessa cosa)

useEffect(() => {
//fetch("https://edgemony-backend.herokuapp.com/friends?_limit=4")
//.then((response) => response.json())
//.then((data) => setFriendsPreview(data));

http("/friends?_limit=4").then((data) => setFriendsPreview(data));
http("/messages?_limit=4").then((data) => setMessagesPreview(data));
http("/posts").then((data) => setAllPosts(data));
}, []);


return (
    <section className= {styles.home}>
        <h3>Benvenuto Utente </h3> 
        <div className={styles.grid}>
             <aside>
            {friendsPreview.map((friend, index) => (
             <FriendPreview key={index} data={friend} />
            ))}
            </aside>
            <main>
            {allPosts.map((post, index) => (
             <Post key={index} data={post} />
            ))}
            </main>
            <aside> 
                {messagesPreview.map((message, index)=> (
                <MessagePreview key={index} data={message}/>
                ))}
            </aside>
        </div>
    </section>
    );
};

export default Home;