import { createContext, useEffect, useState, ReactNode } from 'react'
import { api } from './services/api';

interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

// interface TransactionInput {
//   title: string;
//   amount: number;
//   type: string;
//   category: string;
//   createdAt: string;
// }

type TransactionInput =Omit<Transaction, 'id' | 'createdAt'>; //Herda todos os campos do Transaction - id e createdAt
//pode usar o pick no lugar de Omit 

interface TransactionsProviderProps {
  children: ReactNode;
}

interface TransactionsContextData {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => void;
}


export const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData //Força uma Tipagem no typescript
  );

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api.get("transactions").then((response) => setTransactions(response.data.transactions));
  }, []); //array de dependencias .. se deixar vazio ele executa apenas uma vez

  function createTransaction(transaction: TransactionInput){
     api.post('/transactions', transaction)
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  );
}
