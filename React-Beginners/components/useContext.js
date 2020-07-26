import React from 'react'

const UseContextApi = React.createContext()

const UserProvider = UseContextApi.Provider

const UserConsumer = UseContextApi.Consumer

export {UserProvider, UserConsumer}
