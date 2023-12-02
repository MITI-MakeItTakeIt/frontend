import { useMutation } from "@tanstack/react-query";

import { userLoginPost } from "../api/users";
import { LoginField } from "../interface/auth";

export const useLoginMutation = (data: LoginField) => {
  return useMutation({
    mutationFn: () => userLoginPost(data),
    onSuccess: () => {
      console.log("success");
    },
    onError: () => console.log("error"),
  });
};
