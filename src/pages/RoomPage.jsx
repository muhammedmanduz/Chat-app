import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../firebase";

const RoomPage = ({ setIsAuth, setRoom }) => {
  // çıkış fonk
  const logout = () => {
    //yetki state ini false çek
    setIsAuth(false);

    // localdeki tokeni kaldır
    localStorage.removeItem("token");

    //firebase oturumunu kapat
    signOut(auth);
  };

  // form gönderilince
  const handleSubmit = (e) => {
    e.preventDefault();

    //inputtaki veriyı al
    const room = e.target[0].value.toLowerCase();

    // seçilen oda state ini güncelle
    setRoom(room);
  };

  return (
    <form onSubmit={handleSubmit} className="room-page">
      <h1>Chat Odası</h1>
      <p>Hangi Odaya Gireceksiniz</p>

      <input type="text" placeholder="ör:haftasonu" />

      <button type="submit">Odaya Gir</button>
      <button type="button" onClick={logout}>
        Çıkış Yap
      </button>
    </form>
  );
};

export default RoomPage;
