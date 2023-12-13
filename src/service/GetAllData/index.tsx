import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "../../firebase";
import { formatDate } from "../useGetLastData";

export interface DataItem {
  id: string;
  timestamp: string;
  value: number;
}

export async function getAllData(): Promise<DataItem[]> {
  try {
    const q = query(collection(db, "level"), orderBy("timestamp", "desc"));
    const querySnapshot = await getDocs(q);
    let responseData: any[] = [];
    querySnapshot.forEach((doc) => {
      responseData.push({
        id: doc.id,
        timestamp: formatDate(doc.data().timestamp),
        value: doc.data().value,
      });
    });
    return responseData;
  } catch (error) {
    console.log("erro: ", error);
    return [];
  }
}
