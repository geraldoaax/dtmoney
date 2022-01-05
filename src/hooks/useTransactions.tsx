import { createContext, useEffect, useState, ReactNode, useContext } from 'react'
import { api } from '../services/api';

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
  createTransaction: (transaction: TransactionInput) => Promise<void>;
}


const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData //Força uma Tipagem no typescript
  );

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api.get("transactions").then((response) => setTransactions(response.data.transactions));
  }, []); //array de dependencias .. se deixar vazio ele executa apenas uma vez

 async function createTransaction(transactionInput: TransactionInput){
     const response = await api.post('/transactions', {
       ...transactionInput,
       createdAt: new Date(), //certo e fazer no backend
     }
     )
     const { transaction } = response.data;

     setTransactions([ //conceito de imutabilidade
       ...transactions, //copia o que esta dentro
       transaction //adiciona o novo 
     ])
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  );
}

export function useTransactions(){
  const context = useContext(TransactionsContext);

  return context;
}