import { createContext, useCallback, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const login = useCallback(async (email, senha) => {
    setLoading(true);
    try {
      const res = await fetch("/auth/login", {
        method: "POST",
        headers: { "Content-Type": "aplication/json" },
        body: JSON.stringify({ email, senha }),
      });
      if (!res.ok) throw new Error("Credenciais inválidas");
      const data = await res.json();
      setUser(data.user);
      localStorage.setItem("token", data.token);
    } finally {
      setLoading(false);
    }
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    localStorage.removeItem("token");
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
