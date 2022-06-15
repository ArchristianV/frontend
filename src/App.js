import './App.css';
import {useState} from "react";
import Axios from "axios";

function App() {

const [imagedata, setImagedata] = useState('');

const handleChange = file => {
  setImagedata(file[0]);
}

const submitData = e =>{
  e.preventDefault();
  const fData = new FormData();

  fData.append('image', imagedata);

  Axios.post('http://127.0.0.1:8000/api/upload-image', fData)
  .then((res) =>{
    console.log('response', res);
  }).catch(e => {
    console.error('Failure', e);
  })

}
  return (
    <>
      <form onSubmit={submitData}>
        <label htmlFor="image">Upload Image to Laravel</label>
        <input name="image" id="image" type="file" onChange={e => handleChange(e.target.files)}/>
        <button type="submit" onClick={submitData}>Upload the Image</button>
      </form>
    </>
  );
}

export default App;
