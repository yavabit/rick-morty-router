import { createContext, ReactNode, useCallback, useContext, useMemo, useState } from "react";

type UserState = {
	username: string
} | null

type AuthContextType = {
    user: UserState;
    signin: (newUser:  { username: string; remember: boolean }, callback: () => void) => void;
    signout: (callback: () => void) => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === null) {
        throw new Error('AuthContext is null');
    }
    return context;
};

export const AuthProvider = ({ children }: {children: ReactNode}) => {

	const [user, setUser] = useState<UserState>(() => {
		const storedUser = localStorage.getItem('user');
        return storedUser ? { username: storedUser  } : null;
	})

	const signin = useCallback((newUser: {username: string, remember: boolean}, callback: () => void) => {
		setUser(newUser)
		if(newUser.remember === true) {
			localStorage.setItem('user', newUser.username)
		}
		callback()
	}, []);

	const signout = useCallback((callback: () => void) => {
		setUser(null)
		localStorage.removeItem('user')
		callback()
	}, []);

	const value = useMemo(() => ({
        user: user,
        signin,
        signout
    }), [user, signin, signout]);

	return (
		<AuthContext.Provider value={value}>
			{children}
		</AuthContext.Provider>
	)
};
