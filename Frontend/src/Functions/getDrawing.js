import apiRequest from "./apiRequest";

const getDrawing = async ({ id, setTitle, setElements }) => {
  if (id !== "new") {
    const res = await apiRequest.post("/get-drawing", {
      id,
    });
    setTitle(res.data?.title);
    setElements([
      {
        lines: res.data?.elements?.lines,
      },
      {
        shapes: res.data?.elements?.shapes,
      },
      {
        texts: res.data?.elements?.texts,
      },
    ]);
  }
};

export default getDrawing;
