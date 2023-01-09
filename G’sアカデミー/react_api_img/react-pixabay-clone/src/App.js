import axios from "axios";
import { useRef } from "react";
import { useState } from "react";
import "./App.css";
import ImageGrallery from "./ImageGrallery";

function App() {
  const [fetchData, setFetchData] = useState([]);
  //useRef　参照を保持する役割
  const ref = useRef();

  const handleSubmit = (e) => {
    //enterでリロードされることを防ぐ
    e.preventDefault();
    console.log(ref.current.value);
     //APIURl
    const endPointURL = `https://pixabay.com/api/?key=32711207-e3f78bfd5074d5cadcbc3f318&q=${ref.current.value}&image_type=photo`;
     //APIを叩く（データフェッチング）

     //axiosの場合
     axios.get(endPointURL)
    .then((res) => {
      console.log(res.data.hits);
      setFetchData(res.data.hits);
    })

    //  fetchデータの件
    //  fetch(endPointURL)
    //  .then((res) =>{
    //   return res.json();
    //  })
    //  .then((data) => {
    //   console.log(data.hits);
    //   setFetchData(data.hits);
    //  });
  };

  return (
    <div className="container">
      <h2>My pixabay</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" placeholder="検索" ref={ref}></input>
      </form>
      {/* propsの考え→fetchDataという名前で{fetchData}を渡す */}
      <ImageGrallery fetchData={fetchData} />
    </div>
  );
}

export default App;
