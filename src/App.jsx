import { useState } from "react";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import RoomPage from "./pages/RoomPage";
import ChatPage from "./pages/ChatPage";

function App() {
  // kullanıcının yetkisi var mı  satate'i
  const [isAuth, setIsAuth] = useState(localStorage.getItem("token") || false);

  // kullanıcın girmek isteği odanın state'i
  const [room, setRoom] = useState(null);

  // yetkisi yoksa :loginPage 'i ekrana bas
  if (!isAuth) return <LoginPage setIsAuth={setIsAuth} />;

  // yetkisi varsa :
  return (
    <div className="container">
      {room ? (
        //oda seçildiyse:sohbet sayfası
        <ChatPage room={room} setRoom={setRoom} />
      ) : (
        //oda seçilmediyse:oda seçme  sayfası
        <RoomPage setIsAuth={setIsAuth} setRoom={setRoom} />
      )}
    </div>
  );
}

export default App;
