import {
  collection,
  limit,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "../../firebase";
import { format } from "date-fns";
import { utcToZonedTime } from "date-fns-tz";

export function formatDate(isoDate: string) {
  const zonedDate = utcToZonedTime(isoDate, "America/Sao_Paulo");
  const output = format(zonedDate, "dd/MM/yyyy - HH:mm:ss");

  return output;
}

export async function useGetLastData(setCurrentData: any) {
  const q = query(
    collection(db, "level"),
    orderBy("timestamp", "desc"),
    limit(1)
  );
  onSnapshot(q, (querySnapshot) => {
    querySnapshot.forEach((doc) => {
      setCurrentData({
        id: doc.id,
        timestamp: formatDate(doc.data().timestamp),
        value: doc.data().value,
      });
    });
  });
}
