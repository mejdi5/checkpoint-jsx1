import React from 'react'
import './style.css';
import myWonderfulImage from "./image.jpg"

function App() {
  return (
    <div className="App">     
<div style={{border:'solid 1px black' , maxWidth:'100vw'}}>

<h1 className="title red">M E J D I</h1>

<br />

<img src={myWonderfulImage} className='Image' alt ='myImage'/>

<br />

<img src="/photo.jpg" className='Photo' alt = 'myPhoto' />

</div>

<video className="video" width ="320"  height ="240"  controls >

<source src="myVideo.mp4" type="video/mp4" />

</video>
    </div>
  );
}

export default App;
