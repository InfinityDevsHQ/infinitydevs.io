import { create } from "zustand";

type FormDataState = {
  name: string;
  email: string;
  message: string;
};

type SetFormDataState = {
  formData: FormDataState;
  setFormData: (data: Partial<FormDataState>) => void;
};

const useContactUs = create<SetFormDataState>((set) => ({
  formData: {
    name: "",
    email: "",
    message: "",
  },
  setFormData: (data) =>
    set((state) => ({
      formData: { ...state.formData, ...data },
    })),
}));

export default useContactUs;
