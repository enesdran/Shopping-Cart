import "./App.css";
import React, { useState } from "react";
import Card from "./components/card/Card.js";

function App() {
  const [product, setProduct] = useState([
    {
      id: "1",
      title: "Işıltı",
      image: "https://picsum.photos/id/10/2500/1667",
      info: " Hayatın aydınlığına odaklanırsan, mutluluk içinde olabilirsin. Karanlık düşünceler ise seni negatif yönde etkileyebilir.",
      adet: 1,
    },
    {
      id: "2",
      title: "Bakış Açısı",
      image: "https://picsum.photos/id/19/2500/1667",
      info: "Uzun ve zorlu bir yol olsa da, her şeyin sonunda bir son bulunur. Hiçbir şey kolayca elde edilmez, sürekli çaba göstermek önemlidir.",
      adet: 1,
    },
    {
      id: "3",
      title: "Değer",
      image: "https://picsum.photos/id/4/5000/3333",
      info: "Not almak, gelecekte ortaya çıkabilecek sorunlara karşı önlem almaktır. Bu şekilde gelecekteki başarılarını garanti altına alabilirsin",
      adet: 1,
    },
    {
      id: "4",
      title: "Huzur",
      image: "https://picsum.photos/id/25/5000/3333",
      info: "Gördüklerimiz, bakış açımıza bağlı olarak farklı şekillerde düşündürebilir. Güneşin ışığıyla aydınlanan bir resim, huzur ve aydınlığı sembolize edebilir.",
      adet: 1,
    },
  ]);

  const [print, setPrint] = useState([]);
  return (
    <div className="App">
      <h1>Alışveriş Sepeti</h1>
      <h3>Ürünler</h3>
      <div className="urunler">
        {product.map((eleman, index) => {
          return (
            <Card
              onClick={() => {
                const arr = [...print];
                if (
                  arr.findIndex((ind) => {
                    return eleman.id === ind.id;
                  }) === -1
                ) {
                  arr.push(eleman);
                  setPrint(arr);
                } else {
                  arr.map((item) => {
                    if (item.id === eleman.id) {
                      return (eleman.adet += 1);
                    }
                    setPrint(arr);
                  });
                }
                console.log(print);
              }}
              key={index}
              title={eleman.title}
              image={eleman.image}
              info={eleman.info}
            />
          );
        })}
      </div>

      <div className="sepet">
        <h2>Sepetiniz</h2>
        <ul className="sepet">
          {print.map((eleman, index) => {
            return (
              <li key={eleman.id}>
                {eleman.title + "---->" + eleman.info}{" "}
                <b style={{ color: "red", fontSize: "18px" }}>
                  Adet:{eleman.adet}
                </b>
              </li>
            );
          })}
        </ul>
        <div className="temizle">
          {print.length > 0 ? (
            <button
            className="my-button"
              onClick={() => {
                setPrint([]);
              }}
            >
              Sepeti Temizle
            </button>
          ) : (
            <h2>Sepetiniz Boş.</h2>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
