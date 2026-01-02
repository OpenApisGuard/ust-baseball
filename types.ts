
export interface Program {
  id: string;
  title: string;
  description: string;
  image: string;
  cta: string;
}

export interface Coach {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}
