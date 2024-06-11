
import React, {useState} from 'react'
import QRCode from "react-qr-code";

const Qgen = () => {
    const [myqrcode, setMyqrcode] = useState('')
    const [input, setInput] = useState('')

    function handleGenerateQrCode() {
        setMyqrcode(input)
    }

  return (
    <div>
      <h1>Qr code generator</h1>
      <div>
      <input onChange={(e)=>setInput(e.target.value)} type="text" name='qr-code' placeholder='Enter value' />
      <button style={{marginBottom: "20px"}} disabled={input && input.trim() !== '' ?false : true} onClick={handleGenerateQrCode}>Generate</button>
      </div>
      <div>
        <QRCode
        id='qr-code-value'
        value={myqrcode}
        size= {400}
        bgColor = '#fff'
        />
      </div>
    </div>
  )
}

export default Qgen
