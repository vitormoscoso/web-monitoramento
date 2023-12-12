import { useEffect, useState } from "react";
import CardComponent from "../components/CardComponent";
import Header from "../components/Header";
import { useGetLastData } from "../service/useGetLastData";

export default function Home() {
  const [currentData, setCurrentData] = useState<any>({});

  async function getCurrentData() {
    const data = useGetLastData(setCurrentData);
    setCurrentData(data);
  }

  useEffect(() => {
    getCurrentData();
  }, []);

  return (
    <>
      <style>
        {`
          body, html {
            margin: 0;
            padding: 0;
            width: 100%;
            height: 100%;
            overflow: hidden;
          }
        `}
      </style>
      <Header />
      <div
        style={{
          width: "100%",
          height: "100vh",
          boxSizing: "border-box",
          backgroundColor: "whitesmoke",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CardComponent data={currentData} />
        </div>
      </div>
    </>
  );
}
