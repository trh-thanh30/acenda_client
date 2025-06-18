export interface FormEmailSignUpProps {
  setStep: (step: number) => void;
  setUserId?: (id: string) => void;
  whatCall?: string;
  userEmail?: string;
}
export interface IUSER {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  role: string;
  gender: string;
}
export interface IAUTH {
  accessToken: string | null;
  user: IUSER | null;
}
