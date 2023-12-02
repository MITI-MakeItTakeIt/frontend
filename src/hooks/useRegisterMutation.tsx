import { useMutation } from "@tanstack/react-query";
import { userSignupPost } from "../api/users";
import { RegisterField } from "../interface/auth";

export const useRegisterMutation = (data: RegisterField) => {
  return useMutation({
    mutationFn: () => userSignupPost(data),
  });
};
