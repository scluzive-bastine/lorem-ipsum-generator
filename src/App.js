import React, { useState } from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import Nav from './Nav'
import HeroSvg from './HeroSvg'
import data from './data'
function App() {
  const [count, setCount] = useState()
  const [text, setText] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    let amount = parseInt(count)
    if (count <= 0) {
      amount = 1
    }
    if (count > 8) {
      amount = 8
    }

    setText(data.slice(0, amount))
  }
  return (
    <>
      <Container fluid>
        <div className='container'>
          <div className='header-blob d-none d-lg-block d-xl-block'>
            <svg
              width='590'
              height='379'
              viewBox='0 0 590 379'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M561.167 -419.587C639.659 -432.648 728.578 -481.516 794.272 -454.184C864.999 -424.759 834.142 -334.207 882.259 -285.999C921.928 -246.255 1020.76 -249.999 1044.91 -203.073C1068.76 -156.718 1020.87 -101.76 1003.39 -50.6208C987.267 -3.46473 974.475 43.1366 945.494 87.6978C913.808 136.419 891.492 199.683 825.767 222.494C757.045 246.346 686.471 184.715 615.219 202.327C524.253 224.812 475.594 332.958 383.041 331.929C301.755 331.026 292.821 240.171 239.73 198.153C188.478 157.59 78.1249 146.31 74.7976 87.972C71.1059 23.2473 187.993 -19.6195 223.757 -81.9014C248.662 -125.273 232.249 -172.029 249.828 -216.835C271.889 -273.063 279.439 -339.07 340.174 -378.622C399.875 -417.501 486.325 -407.133 561.167 -419.587Z'
                fill='#42B1D0'
              />
            </svg>
          </div>
          <Nav />
          <div className='mt-5 pt-5'>
            <Row className='gap-2'>
              <Col>
                <div className='hero-container'>
                  <h4>Generate</h4>
                  <h1>Lorem ipusm placeholder text is boring right?</h1>
                </div>
              </Col>
              <Col>
                <div className='d-flex justify-content-center'>
                  <HeroSvg />
                </div>
              </Col>
            </Row>
          </div>
        </div>
        <div className='mt-5 bg-svg'>
          <div className='container'>
            <div className='bg-white rounded shadow-lg p-4'>
              <div className='d-flex justify-content-center'>
                <form className='gap-2' onSubmit={handleSubmit}>
                  <div className='form-group'>
                    <h6 className='text-center'>Paragraph</h6>
                    <input
                      type='number'
                      className='form-control rounded-pill'
                      name='number'
                      placeholder='1'
                      value={count}
                      onChange={(e) => setCount(e.target.value)}
                    />
                  </div>
                  <button
                    type='submit'
                    className='btn btn-primary btn-block rounded-pill'
                  >
                    Generate
                  </button>
                </form>
              </div>
              <hr />
              <article className='mt-5'>
                {text.map((item, index) => {
                  return <p key={index}>{item}</p>
                })}
              </article>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default App
