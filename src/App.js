import React,{useEffect,useState} from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const [veri,setVeri]=useState();
  const [tarih,setTarih]=useState("");

  useEffect(()=>{
    
    axios.get("https://raw.githubusercontent.com/ozanerturk/covid19-turkey-api/master/dataset/timeline.json")
    .then(res=>setVeri(res.data[tarih]))
    .catch(err=>console.log(err))

  },[veri,tarih])

  return (
    <div className="App">
      <div className="container">
        <div className="left_content">
          <div className='top_left_content'>
            <h2>TÜRKİYE COVİD-19 VAKA ANALİZ TABLOSU</h2>
            <input type="text" placeholder="GG/AA/YY"
            onChange={(e)=>setTarih(e.target.value)}/>
          </div>
          <div className='bottom_left_content'></div>
        </div>
        <div className="right_content">
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Test Sayısı</th>
                <th>Hasta Sayısı</th>
                <th>Vefat Sayısı</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>{veri===undefined ? "Veri Bekleniyor" : veri.totalTests}</td>
                <td>{veri===undefined ? "Veri Bekleniyor" : veri.patients}</td>
                <td>{veri===undefined ? "Veri Bekleniyor" : veri.deaths}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
