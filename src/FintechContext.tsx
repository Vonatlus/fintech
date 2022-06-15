import React, { useState } from "react"

interface contextValue {
  balance: string,
  setBalance: React.Dispatch<React.SetStateAction<string>>,
}

type FintechProviderProps = {
  children: React.ReactNode
}

export const FintechContext = React.createContext({
  balance: '0',
  setBalance: (bal: string) => {},
})

export const FintechProvider = ({ children }: FintechProviderProps) => {
  const [balance, setBalance] = useState<string>('0');

  const contextValue: contextValue = {
    balance,
    setBalance,
  }

  return (
    <FintechContext.Provider value={contextValue}>
      {children}
    </ FintechContext.Provider>
  )
}