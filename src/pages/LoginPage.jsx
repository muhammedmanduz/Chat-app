import React from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";

const LoginPage = ({ setIsAuth }) => {
  // butona tıklanınca google ile oturum aç
  const handleClick = () => {
    signInWithPopup(auth, provider)
      .then((res) => {
        //yetkisini true ya çekiyoruz
        setIsAuth(true);
        console.log(res.user);

        // sayfa yenilendiği zaman tekrar giriş yapmak zorunda olmasın diye tokeni localde saklıyıruz
        localStorage.setItem("token", res.user.refreshToken);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container">
      <div className="login">
        <h1>Chat Odası</h1>
        <p>Devam Etmek için Giriş Yapın</p>

        <button onClick={handleClick} className="button">
          <img width={35} src="/google-icon.png" alt="google logo" />
          <span className="">Google ile Gir</span>
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
