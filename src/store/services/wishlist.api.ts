import api from "@/lib/axios";

export const wishlistApi = {
  toggleWishlist: (tourId: string) => api.post("/wishlist", { tourId }),
  getAllWishlist: () => api.get("/wishlist"),
  removeAllWishlist: () => api.post("/wishlist/remove-all"),
};
