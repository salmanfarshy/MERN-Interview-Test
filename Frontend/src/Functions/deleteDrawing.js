import apiRequest from "./apiRequest";
import { useToast } from "../hooks/use-toast.js";

const deleteDrawing = async ({ id, setDeleteLoading, navigate }) => {
  const { toast } = useToast();
  setDeleteLoading(true);
  
  await apiRequest.post("/delete-drawing", {
    id,
  });
  
  setDeleteLoading(false);
  navigate("/");
   toast({
      className: "bg-gray-50 text-green-700 fixed top-5 right-5 w-80",
      variant: "success",
      title: "Success",
      description: "Drawing has been deleted.",
      duration: 2000,
    });
};

export default deleteDrawing;
