import { useEffect, useState } from "react";
import { useGetAuth } from "../service/useGetAuth";
import { useGetLastData } from "../service/useGetLastData";
import CardComponent from "../components/CardComponent";

export default function Home() {
  const [currentData, setCurrentData] = useState<any>({});

  async function getCurrentData() {
    const data = useGetLastData(setCurrentData);
    setCurrentData(data);
  }

  useEffect(() => {
    getCurrentData();
  }, []);

  useGetAuth("vitor@email.com", "123456");

  console.log("home: ",currentData);
  

  return (
    <div
      style={{
        width: "100%",
        position: "fixed",
        height: "100vh",
        backgroundColor: "whitesmoke",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "20%",
        }}
      >
        <CardComponent data={currentData}/>
      </div>
    </div>
  );
}
