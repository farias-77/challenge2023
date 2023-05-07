"use client";
import React from "react";
import TextField from "@mui/material/TextField";
import { FormControl, InputLabel, NativeSelect } from "@mui/material";
import { styled } from "@mui/material/styles";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import InputBase from "@mui/material/InputBase";
import Link from "next/link";
import Image from "next/image";

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: "#1f1f1f",
    width: 70,
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    color: "white",
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
}));

export default function Page() {
  const [coin, setCoin] = React.useState("");
  const handleChange = (event: { target: { value: string } }) => {
    setCoin(event.target.value);
  };

  return (
    <div className="w-full h-full flex flex-col p-8 relative bright">
      <div className="w-full h-fit mx-auto  flex flex-row justify-center align-middle items-center gap-6 p-7">
        <Link href="../" className="absolute left-10 self-start">
          <Image
            width={30}
            height={30}
            src={"/assets/icons/arrow.svg"}
            alt="back-button"
            className="self-start"
          />
        </Link>
        <span className="text-bright text-1xl self-center text-center">
            Transferir BTGUSD
        </span>
      </div>

      <span style={{marginTop: 40}} className="text-bright text-1xl">
            Transferir BTGUSD
        </span>
      <span className="text-bright text-3xl">
        USD <strong>20,00</strong>
      </span>
      <span style={{ marginTop: 24 }} className="text-bright">
        Em BTGUSD
      </span>
      <span style={{ marginTop: 24 }} className="text-bright">
        Para Otto Naggel
      </span>
      <div className="flex flex-row justify-between">
        <span style={{ marginTop: 24 }} className="text-bright">
          CPF
        </span>
        <span style={{ marginTop: 24 }} className="text-bright">
          273.982.002-19
        </span>
      </div>
      <div
        style={{ marginTop: 40 }}
        className="w-full h-[125px] justify-center bg-black p-3 px-5 shadow-xl rounded-2xl mt-5 flex flex-col"
      >
        <span className="text-bright flex w-full items-center">
          Digite a sua senha de 8 dígitos para transferir
        </span>
        <input
          placeholder=""
          style={{
            background: "transparent",
            color: "white",
            outline: 0,
            borderBottomWidth: 1,
            borderBottomColor: "#FFF",
            padding: 7,
            fontSize: 15,
            fontWeight: 500,
          }}
        />

      </div>
        <div style={{marginBottom: 103}} className="w-full h-full flex flex-colum justify-end items-center">
          <button className="btn-primary w-[335px] h-[45px] self-end">
            Entrar
          </button>
        </div>
    </div>
  );
}
