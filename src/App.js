import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

import Footer from "./components/Footer/Footer.js";
//import NewPost from "./pages/NewPost";
//import Messages from "./pages/Messages";
//import Friends from "./pages/Friends";
//import Login from "./components/Login";
import Loading from "./components/Loading/Loading.jsx";

//import Home from "./pages/Home";

const Home = lazy(() => import(/* webpackChunkName: "home"*/ "./pages/Home"));
const NewPost = lazy(() => import(/* webpackChunkName: "new-post"*/ "./pages/NewPost"));
const Messages = lazy(() => import(/* webpackChunkName: "messages"*/ "./pages/Messages"));
const Friends = lazy(() => import(/* webpackChunkName: "friends"*/ "./pages/Friends"));
const Login = lazy(() => import(/* webpackChunkName: "login"*/ "./components/Login"));

function App() {

  return (
    <div>
      

     
      

      <Routes>
        <Route path="/" element={
          <Suspense fallback={<Loading />}>
            <Home />
          </Suspense>
        } 
        /> 
        <Route path="/new-post" element={
          <Suspense fallback={<Loading />}>
            <NewPost />
          </Suspense>} />
        <Route path="/messages" element={
          <Suspense fallback={<Loading />}>
            <Messages />
          </Suspense>} />
        <Route path="/friends" element={
          <Suspense fallback={<Loading />}>
            <Friends />
          </Suspense>} />
        <Route path="/login" element={
          <Suspense fallback={<Loading />}>
            <Login />
          </Suspense>
        } />

      </Routes>

{/* <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new-post" element={<NewPost />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/friends" element={<Friends />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Suspense> */}

      <Footer />
    </div>
  );
  }

export default App;