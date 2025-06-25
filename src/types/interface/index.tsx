export interface FormEmailSignUpProps {
  setStep: (step: number) => void;
  setUserId?: (id: string) => void;
  whatCall?: string;
  userEmail?: string;
}
export interface IUSER {
  id: string;
  gmail: string;
  first_name: string;
  last_name: string;
  email: string;
  role: string;
  gender: string;
  date_of_birth: string;
  avatar: string;
  phone_number: string | null;
  address: string | null;
  user_status: string;
  created_at: string;
  updated_at: string;
}

export interface IAUTH {
  accessToken: string | null;
  user: IUSER | null;
  isInitialized: boolean;
}
