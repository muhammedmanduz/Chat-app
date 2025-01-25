import { useEffect, useRef, useState } from "react";
import { auth, db } from "../firebase";
import {
  addDoc,
  collection,
  onSnapshot,
  serverTimestamp,
} from "firebase/firestore";
import Message from "../components/Message";

const ChatPage = ({ room, setRoom }) => {
  const [text, setText] = useState("");
  const [messages, setMessages] = useState([]);

  // son mesajın referansını
  const lastMsg = useRef();

  // mesajı veritbanına kaydet
  const handleSubmit = async (e) => {
    e.preventDefault();

    //mesaj boş mu kontrol et
    if (text.trim() === "") return;

    //mesaja documentini kaydedileceği kolleksiyonun  referansını al
    const messageCollection = collection(db, "messages");

    //referansı alınan kolleksiyona document'i ekle
    await addDoc(messageCollection, {
      text,
      room,
      author: {
        id: auth.currentUser.uid,
        name: auth.currentUser.displayName,
        photo: auth.currentUser.photoURL,
      },
      createdAt: serverTimestamp(),
    });
    //formu temizle
    setText("");
  };

  //mevcut oadada gönderilen mesajları anlık olarak al
  useEffect(() => {
    //1) abone oluncak kolleksiyonun referansını al
    const messagesCol = collection(db, "message");

    //kolleksiyondaki verileri al
    // 3) onSnapshot: anlık olarak kolleksiyondaki değişimleri izler.Kolleksiyon her değiştiğinde callback fn tetikler ve bu fn parametre olarak kolleksiyondaki veriyi alır.
    onSnapshot(messagesCol, (data) => {
      data.docs.forEach((doc) => {
        temp.push(doc.data());

        // mesajları state aktar
      });
    });
  }, []);

  return (
    <div className="chat-page">
      <header>
        <p>{auth.currentUser.displayName}</p>

        <p>{room}</p>

        <button onClick={() => setRoom(null)}>Farklı Oda</button>
      </header>

      <main>
        {messages.length < 1 ? (
          <div className="warn">
            <p>Sohbete ilk mesajı gönderin</p>
          </div>
        ) : (
          messages.map((data, key) => <Message key={key} data={data} />)
        )}

        <div ref={lastMsg} />
      </main>

      <form onSubmit={handleSubmit} className="message-form">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="mesajınızı yazınız"
          type="text"
        />
        <button type="submit">Gönder</button>
      </form>
    </div>
  );
};

export default ChatPage;
