import React, {useState} from 'react'
import QRCode from 'react-qr-code'

const Qgen2 = () => {
    const [value, setValue] = useState('')
    const [qrcodegen, setQrcodegen] = useState('')

    function handleinputchange(e) {
        setValue(e.target.value)
    }

    function handleclick() {
        setQrcodegen(value)
    }
  return (
    <div>
        <h1 className='heading' >Generate QR code with your text</h1>
      <div className='input-button'>
      <input type="text" name='qr-value' className='input-value' onChange={handleinputchange} placeholder='Enter value to generate QR' />
      <button onClick={handleclick} className='my-button'>Generate</button>
      </div>
      <div>
    <QRCode
    value={qrcodegen}

    />
      </div>
    </div>
  )
}

export default Qgen2
