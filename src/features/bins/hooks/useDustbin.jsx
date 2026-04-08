import { useEffect, useState } from "react";
import { db, ref, onValue, } from "../../../config/firebase/firebaseDB";

const useDustbins = () => {
  const [dustbins, setDustbins] = useState([]);

  useEffect(() => {
    const dustbinsRef = ref(db, "dustbins");

    const unsubscribe = onValue(dustbinsRef, (snapshot) => {
      const data = snapshot.val();
      const arr = data ? Object.keys(data).map((id) => ({
        id,
        ...data[id],
      })) : [];

      setDustbins(arr);
    });

    return () => unsubscribe();
  }, []);

  return dustbins;
};

export default useDustbins;