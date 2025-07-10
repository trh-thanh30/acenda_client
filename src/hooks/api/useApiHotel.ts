"use client";

import api from "@/lib/axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function useApiHotel() {
  const [hotels, setHotels] = useState<[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [query, setQuery] = useState({
    page: 1,
    limit: 10,
    search: "",
  });
  const { page, limit, search } = query;
  useEffect(() => {
    const fetchHotels = async () => {
      setIsLoading(true);
      try {
        const res = await api.get(
          `/hotel?limit=${limit}&page=${page}&search=${search}`
        );
        if (res.status === 200) {
          setIsLoading(false);
          setHotels(res.data.data);
        } else {
          setIsLoading(false);
          toast.error(res.data.message);
        }
      } catch (error) {
        setIsLoading(false);
        toast.error(error instanceof Error ? error.message : String(error));
      }
    };
    fetchHotels();
  }, [page, limit, search]);
  return { hotels, setHotels, isLoading, setIsLoading, query, setQuery };
}
