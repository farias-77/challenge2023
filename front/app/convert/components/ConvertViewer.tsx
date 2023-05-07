'use client'
import styled from 'styled-components'
import { IoIosArrowRoundBack } from 'react-icons/io'
import { useEffect, useState } from 'react'

export const CONVERT_ADDRESS = '0x297E71655F828Ec5AC42562d0D849c73013C2a31'
export const SALDO_BTG_DOL = 5000
export async function getBTC() {
  const token = localStorage.getItem('token-access')
  const res = await fetch('http://localhost:5000/user', {
    headers: { Authorization: `Bearer ${token}` },
  })
  const data = await res.json()
  return data
}
export function ConvertViewer() {
  const [valor, setValor] = useState('')
  const [dolar, setDolar] = useState()

  useEffect(() => {
    getBTC().then((data) => setDolar(data.dollar))
  }, [])

  async function handleSubmit() {
    const token = await localStorage.getItem('token-access')
    const res = await fetch('http://localhost:5000/transfer', {
      body: JSON.stringify({
        destinationAddress: CONVERT_ADDRESS,
        amount: Number(valor),
        Authorization: `Bearer ${token}`,
      }),
      method: 'post',
    })
    const data = await res.json()
    console.log(data) // FAZER ALGO PARA GERENCIAR O QUE RETORNA DA REQUISIÇÃO
  }

  return (
    <Container>
      <Header>
        <IoIosArrowRoundBack size={40} color="#fff" />
        <h1>Converter</h1>
        <IoIosArrowRoundBack size={40} color="#fff" opacity={0} />
      </Header>

      <div className="w-full bg-black p-5 gap-2 rounded-2xl text-bright flex flex-col">
        <div className="flex gap-2 items-center">
          <h1>Origem</h1>
          <div className="w-[1px] h-[18px]  bg-white"></div>
          <strong>
            <h3>Mynt Account</h3>
          </strong>
        </div>
        <div className="flex gap-2 items-center">
          <h1>Destino</h1>
          <div className="w-[1px] h-[18px] bg-white"></div>
          <strong>
            <h3>BTG Account</h3>
          </strong>
        </div>
      </div>

      <div className="mt-[20px] h-fit py-[16px] px-[30px]  bg-dark-20 rounded-2xl flex gap-2 flex-col">
        <div className="flex text-bright justify-between">
          <h1>Saldo disponível</h1>
          <h1>BTG Dol {!isNaN(SALDO_BTG_DOL) ? Number(SALDO_BTG_DOL).toFixed(2) : '8.502,00'}</h1>
        </div>
        <div className="bg-white w-full min-h-[1px] "></div>
        <div className="flex justify-between text-bright">
          <div className="flex flex-col">
            <h1>Equivalente ao dolar</h1>
            <h2 className="text-2xl">
              R${' '}
              <span className="font-bold">
                {!isNaN(SALDO_BTG_DOL * 5.02)
                  ? Number(SALDO_BTG_DOL * 5.02).toFixed(2)
                  : '10.000,00'}
              </span>
            </h2>
          </div>
          <div className="flex flex-col">
            <h1>Equivalente ao real</h1>
            <h2 className="text-2xl">
              R$ <span className="font-bold">{(SALDO_BTG_DOL * (dolar ?? 4.95)).toFixed(2)}</span>
            </h2>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center mt-5 items-center w-[370px] mx-auto">
        <h1 className="text-lg text-bright">Insira o valor em dólares que deseja converter</h1>
        <input
          className="bg-dark-20 outline-none w-full py-2 px-5 rounded-md text-bright"
          onChange={(e) => setValor(e.target.value)}
          placeholder="USD 0,00"
          value={valor}
        />
      </div>
      <button className="btn-primary w-full h-12 mt-20" onClick={handleSubmit}>
        {' '}
        Converter
      </button>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 100vh;

  padding: 0 30px;
  padding-top: 50px;
  margin-bottom: 82px;

  background-color: #171717;

  box-sizing: border-box;
`

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-size: 20px;
    color: #fff;
  }
`
