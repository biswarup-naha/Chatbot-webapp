declare module "@biswarup598/date-parser" {
  const dateParser: any; // or define actual types if you know them
}

type Message = {
  id?: number;
  type: string;
  text: string;
  time: string;
  isLoading: boolean;
};

interface IAuthContext {
  user: User | undefined;
  isAuthenticated: boolean;
  login: (email: string, password: string) => void;
  register?: () => void;
  logout?: () => void;
}

type User = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  chats?: [];
};
