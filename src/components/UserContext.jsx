import { createContext } from "react";
//será criando um contexto para poder repassar funções e objetos
//para outras paginas sem precisar usar props
//o createContext não está dentro do app devido ao problema de ciclos de componentes

export const UserContext = createContext();