import apiRequest from "./apiRequest";

const deleteDrawing = async ({ id, setDeleteLoading, navigate }) => {
  setDeleteLoading(true);
  await apiRequest.post("/delete-drawing", {
    id,
  });
  setDeleteLoading(false);
  navigate("/");
};

export default deleteDrawing;
