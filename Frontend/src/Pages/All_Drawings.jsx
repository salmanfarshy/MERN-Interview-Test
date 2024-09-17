import { useEffect, useState } from "react";
import Drawing_Component from "../Components/Drawing_Component";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import apiRequest from "../Functions/apiRequest.js";
import Drawing_Card_Skeleton from "@/Components/Drawing_Card_Skeleton";
function All_Drawings() {
  const [allDrawing, setAllDrawing] = useState([]);
  console.log(allDrawing);

  useEffect(() => {
    const getDrawings = async () => {
      const res = await apiRequest.get("/get-drawings");
      setAllDrawing(res.data);
    };

    getDrawings();
  }, []);

  return (
    <div className="bg-gray-300 w-full min-h-screen relative m-0 p-0">
      {/* header component  */}
      <Header title="New Drawing" />

      {/* all drawings  */}
      <main className="max-w-7xl h-full mx-auto px-4 pt-10 pb-20 flex flex-wrap justify-center gap-10 relative">
        {allDrawing?.length ? (
          allDrawing.map((drawing) => (
            <Drawing_Component key={drawing.id} drawing={drawing} />
          ))
        ) : (
          <>
            <Drawing_Card_Skeleton />
            <Drawing_Card_Skeleton />
            <Drawing_Card_Skeleton />
            <Drawing_Card_Skeleton />
            <Drawing_Card_Skeleton />
            <Drawing_Card_Skeleton />
          </>
        )}
      </main>

      {/* footer component  */}
      <Footer />
    </div>
  );
}

export default All_Drawings;
