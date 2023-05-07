"use client";
import styled from "styled-components";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useState } from "react";

export default function ConvertToReal({ saldoBtgDol }) {
    const [valor, setValor] = useState();

    return (
        <Container>
            <Header>
                <IoIosArrowRoundBack size={40} color="#fff" />
                <h1>Converter</h1>
                <IoIosArrowRoundBack size={40} color="#fff" opacity={0} />
            </Header>

            <OriginAndDestination>
                <div>
                    <h1>Origem</h1>
                    <h2>|</h2>
                    <h3>Mynt Account</h3>
                </div>
                <div>
                    <h1>Destino</h1>
                    <h2>|</h2>
                    <h3>BTG Account</h3>
                </div>
            </OriginAndDestination>

            <Balance>
                <div style={{ marginBottom: "10px" }}>
                    <h1>Saldo disponível</h1>
                    <h1>
                        BTG Dol{" "}
                        {!isNaN(saldoBtgDol)
                            ? Number(saldoBtgDol).toFixed(2)
                            : "8.502,00"}
                    </h1>
                </div>
                <div className="divider"></div>
                <div style={{ marginTop: "10px", marginBottom: "5px" }}>
                    <h1>Equivalente ao dolar</h1>
                    <h1>Equivalente ao real</h1>
                </div>
                <div>
                    <h2>
                        USD{" "}
                        <span>
                            {!isNaN(saldoBtgDol)
                                ? Number(saldoBtgDol).toFixed(2)
                                : "8.502,00"}
                        </span>
                    </h2>
                    <h2>
                        R${" "}
                        <span>
                            {!isNaN(saldoBtgDol * 5.02)
                                ? Number(saldoBtgDol * 5.02).toFixed(2)
                                : "50.102,00"}
                        </span>
                    </h2>
                </div>
            </Balance>

            <Input>
                <h1>Insira o valor em dólares que deseja converter</h1>
                <input
                    onChange={(e) => setValor(e.target.value)}
                    placeholder="USD 0,00"
                />
            </Input>
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    height: 100vh;

    padding: 0 30px;
    padding-top: 50px;
    margin-bottom: 82px;

    background-color: #171717;

    box-sizing: border-box;
`;

const Header = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
        font-size: 20px;
        color: #fff;
    }
`;

const OriginAndDestination = styled.div`
    width: 100%;
    height: 76px;

    background-color: #000;
    margin-top: 10px;
    padding: 15px;

    color: #fff;

    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
    border-radius: 16px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

    > div {
        width: 50%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    h1 {
        font-family: "Raleway";
        font-style: normal;
        font-weight: 400;
        font-size: 13px;
        line-height: 13px;
        /* identical to box height */

        color: #ffffff;
    }

    h3 {
        font-family: "Raleway";
        font-style: normal;
        font-weight: 600;
        font-size: 13px;
        line-height: 13px;
        /* identical to box height */

        color: #ffffff;
    }
`;

const Balance = styled.div`
    width: 100%;
    height: 100px;

    padding: 10px 30px;

    background-color: #1f1f1f;
    border-radius: 16px;

    margin-top: 20px;
    color: #fff;

    > div {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    h1 {
        font-weight: 400;
        font-size: 11px;
        line-height: 15px;
        text-align: right;

        color: #ffffff;
    }

    h2 {
        font-weight: 300;
        font-size: 15px;
        line-height: 20px;
        /* identical to box height */

        color: #ffffff;
    }

    span {
        font-weight: 600;
    }

    .divider {
        width: 100%;
        height: 1px;
        background-color: #454545;
    }
`;

const Input = styled.div`
    width: 100%;
    height: 80px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    > h1 {
        width: 100%;
        font-style: normal;
        font-weight: 400;
        font-size: 13px;
        line-height: 15px;

        text-align: center;

        margin-bottom: 5px;

        color: #ffffff;
    }

    > input {
        width: 300px;
        height: 31px;

        border: none;

        background: #1f1f1f;
        border-radius: 4px;

        color: #fff;
    }
`;
