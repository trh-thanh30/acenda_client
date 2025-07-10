import api from "@/lib/axios";
import toast from "react-hot-toast";

export const wishlistApi = {
  toggleWishlist: async (tourId?: string, hotelId?: string) => {
    try {
      const res = await api.post("/wishlist", { tourId, hotelId });
      console.log(res);
      if (res.data.status === 201) {
        toast(res.data.message, {
          icon: "❤️",
          position: "top-right",
          style: {
            fontSize: "14px",
          },
        });
      } else if (res.data.status === 204) {
        toast(res.data.message, {
          icon: "💔",
          position: "top-right",
          style: {
            fontSize: "14px",
          },
        });
      }
      return res;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  },
  getAllWishlist: async (orderBy?: string) => {
    const res = await api.get(
      `/wishlist${orderBy ? `?orderBy=${orderBy}` : ""}`
    );
    return res;
  },
  removeAllWishlist: () => api.post("/wishlist/remove-all"),
};
