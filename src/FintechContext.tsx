import React, { useState } from "react"

interface contextValue {
  balance: string,
  setBalance: React.Dispatch<React.SetStateAction<string>>,
  isAdvertising: boolean,
  setIsAdvertising: React.Dispatch<React.SetStateAction<boolean>>,
  profileInfo: string,
  setProfileInfo: React.Dispatch<React.SetStateAction<string>>,
  accontsTitle: string,
  setAccontsTitle: React.Dispatch<React.SetStateAction<string>>,
}

type FintechProviderProps = {
  children: React.ReactNode
}

export const FintechContext = React.createContext({
  balance: '0',
  setBalance: (bal: string) => {},
  isAdvertising: true,
  setIsAdvertising: (is: boolean) => {},
  profileInfo: 'Profile',
  setProfileInfo: (info: string) => {},
  accontsTitle: 'Profile',
  setAccontsTitle: (title: string) => {},
})

export const FintechProvider = ({ children }: FintechProviderProps) => {
  const [balance, setBalance] = useState<string>('0');
  const [isAdvertising, setIsAdvertising] = useState<boolean>(true);
  const [profileInfo, setProfileInfo] = useState<string>('Profile');
  const [accontsTitle, setAccontsTitle] = useState<string>('Your accounts');

  const contextValue: contextValue = {
    balance,
    setBalance,
    isAdvertising,
    setIsAdvertising,
    profileInfo,
    setProfileInfo,
    accontsTitle,
    setAccontsTitle,
  }

  return (
    <FintechContext.Provider value={contextValue}>
      {children}
    </ FintechContext.Provider>
  )
}