import React from "react";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useSingleUserData = () => {
  const { user, loading: authLoading } = useAuth();
  const axiosSecure = useAxiosSecure();

  const {
    data: userData = {},
    refetch,
    isLoading: userLoading,
  } = useQuery({
    queryKey: ["user-data", user?.email],
    enabled: !authLoading && !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure(`user/${user?.email}`);
      console.log(res?.data);

      return res.data;
    },
  });

  return { userData, role: userData?.role, refetch, isLoading: userLoading };
};

export default useSingleUserData;
