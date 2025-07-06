"use client"
import api from "@/lib/axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function useApiTour() {
  const [isLoading, setIsLoading] = useState(false);
  const [tours, setTours] = useState([]);
  const [query, setQuery] = useState({
    page: 1,
    limit: 10,
    search: "",
  });
  const { page, limit, search } = query;
  useEffect(() => {
    try {
      setIsLoading(true);
      const fetchTours = async () => {
        const res = await api.get(
          `/tour?limit=${limit}&page=${page}&search=${search}`
        );
        if (res.status === 200) {
          setIsLoading(false);
          setTours(res.data.data);
        }
      };
      fetchTours();
    } catch (error) {
      setIsLoading(false);
      toast.error(error instanceof Error ? error.message : String(error));
    }
  }, [page, limit, search]);
  return { isLoading, setIsLoading, tours, setTours, query, setQuery };
}
