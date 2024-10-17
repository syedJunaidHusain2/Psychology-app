"use client"

import React, { useEffect, useState } from 'react'
import UserContext from './UserContext'


const UserContextProvider = ({ children }) => {


  const [isOpen, setIsOpen] = useState(false);
  const handleCommentToggle = () => {
    setIsOpen(!isOpen)
  }
console.log("context", isOpen);


  return (
    <UserContext.Provider value={{ isOpen, setIsOpen, handleCommentToggle }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;
