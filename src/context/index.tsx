import React from 'react'
import { ReactNode } from 'react'
import { AuthProvider } from './auth-context'

export default function AppProviders({ children }: { children: ReactNode }) {
    return (
        <AuthProvider>
            {children}
        </AuthProvider>
    )
}

