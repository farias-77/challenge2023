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
      <form className="w-full h-fit mx-auto  flex flex-row justify-center align-middle items-center gap-6 p-7">
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
      </form>
      <div style={{ padding: 24 }}>
        <span className="text-bright">Usar como referência valor em</span>
        <FormControl sx={{ m: 1 }} variant="standard">
          <NativeSelect
            id="demo-customized-select-native"
            value={coin}
            onChange={handleChange}
            style={{ marginTop: 8 }}
            input={<BootstrapInput />}
          >
            <option style={{ backgroundColor: "#1f1f1f" }} value="Real">
              Real
            </option>
            <option style={{ backgroundColor: "#1f1f1f" }} value="USD">
              USD
            </option>
            <option style={{ backgroundColor: "#1f1f1f" }} value="BTG USD">
              BTG USD
            </option>
          </NativeSelect>
          <span style={{ marginTop: 24 }} className="text-bright">
            Qual valor em dólar você deseja transferir?
          </span>
        </FormControl>
        <input
          style={{
            fontSize: 15,
            fontWeight: 500,
            backgroundColor: "#1f1f1f",
            padding: 10,
            borderRadius: 4,
            color: "white",
            outline: 0,
            marginTop: 8,
          }}
          className="w-full"
          placeholder={coin}
        />
        <div
          style={{ marginTop: 18 }}
          className="flex w-full flex-row justify-between"
        >
          <div className="flex flex-col justify-betwen">
            <span className="text-bright">Equivalente em BTGUSD</span>
            <span className="text-bright">Equivalente em Real</span>
          </div>
          <div className="flex flex-col justify-betwen">
            <span className="text-bright">20</span>
            <span className="text-bright">R$5,00</span>
          </div>
        </div>
      </div>
      <div
        style={{ marginTop: 40 }}
        className="w-full h-[125px] justify-center bg-black p-3 px-5 shadow-xl rounded-2xl mt-5 flex flex-col"
      >
        <span className="text-bright">Para quem você quer transferir?</span>
        <input
          placeholder="CEP"
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
      <div className="w-full h-full flex flex-colum justify-end items-center">
        <button className="btn-primary w-[335px] h-[45px] self-end">Entrar</button>
      </div>
    </div>
  );
}
