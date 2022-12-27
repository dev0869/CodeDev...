import React from 'react'
import { useState, useEffect } from 'react'
import Logo from './components/Logo'
import Editor from './components/editor'
import Footer from './components/footer'


const App = () => {

 


  
  const [html, setHtml] = useState('')
  const [CSS, setCss] = useState('')
  const [JS, setJS] = useState('')
  const [data, setData] = useState('html')
  const [srcDoc, setSrcDoc] = useState()




  useEffect(() => {
    const time = setTimeout(() => {
      setSrcDoc(`
    <html>
    <body>${html}</body>
    <style>${CSS}</style>
   
    <script>${JS}</script>
    
    
    </html>
    
    `


      )

    }, 250);
    return () =>
      clearTimeout(time)



  }, [html, CSS, JS])

  useEffect(() => {
    const unloadCallback = (event) => {
      event.preventDefault();
      event.returnValue = "";
      return "";
    };

    window.addEventListener("beforeunload", unloadCallback);
    return () => window.removeEventListener("beforeunload", unloadCallback);
  }, []);




  return (

    <>
      <div className="main">
        <div className="nav">
          <Logo />
          <div className='nav_div' >
            <div className='combine' contentEditable={true} suppressContentEditableWarning={true} style={{ outline: "none", color: 'white' }}>
              <span style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>Untitled   </span>
              <svg  viewBox="0 0 100 100" className="ItemTitle_iconEdit-rW2EJ"><path d="M24.56 92.536L0 100l7.453-24.583c6.356-.244 17.322 10.792 17.107 17.119zM96.617 32.082l-.475.471L67.383 3.766l.472-.472c12.927-12.94 42.016 15.517 28.762 28.788zM61.64 9.516l28.758 28.785-46.303 46.345c-1.222 1.221-2.234.884-2.234.884l2.314-15.356-14.454.074.072-14.468-15.342 2.312s-.34-1.011.883-2.234L61.64 9.516z"></path></svg>
            </div>
            <p style={{ color: 'white' }}>Captain Anonymous</p>
          </div>

        </div>
        {/* mobile */}
        <div className="mob-nav">
          <button className='button2' onClick={() => setData('html')}>html</button>
          <button className='button2' onClick={() => setData('css')}>css</button>
          <button className='button2' onClick={() => setData('js')}>js</button>


          {data === 'html' ? <Editor language={'xml'} color={'orangeRed'} item={'/'} value={html} name={'Html'} onChange={setHtml} /> : null}
          {data === 'css' ? <Editor language={'css'} color={'cyan'} item={`*`} value={CSS} name={'Css'} onChange={setCss} /> : null}
          {data === 'js' ? <Editor language={'javascript'} color={'yellow'} item={'( )'} value={JS} name={'Js'} onChange={setJS} /> : null}



        </div>

        <div className="upperpath">


          <Editor language={'xml'} value={html} color={'orangeRed'} name={'Html'} item={'/'} onChange={setHtml} />
          <Editor language={'css'} value={CSS} color={'cyan'} name={'Css'} item={`*`} onChange={setCss} />
          <Editor language={'javascript'} value={JS} color={'yellow'} name={'Js'} item={'()'} onChange={setJS} />

        </div>
        <div style={{width:'100%',height:'6px', backgroundColor:'#1D1E22'}}></div>
    

        <div className="lowerpath">
          <iframe style={{ backgroundColor: 'white' }} onload={"resizeIframe(this)"} allowFullScreen='true' frameBorder="0" srcDoc={srcDoc}  sandbox='allow-scripts' title='Outputs' width={'100%'} height={'180px'}><h1>aid asd ai d</h1></iframe>
        </div>
    

      </div>

      <Footer/>






    </>
  )
}

export default App