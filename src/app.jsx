import './app'
import { Exemplo } from "./exemplo";
export default function App() {
  const listaalunos = [
    {nome: "Bravin", idade: 16, cidade: "Batayporã"},
    {nome: "kati", idade: 16, cidade: "Batayporã"},
    {nome: "mafer", idade: 16, cidade: "Batayporã"}];
    return (
      <div>
        <h1>Hello Word!</h1>
        <Exemplo lista= {listaalunos}/>
      </div>
  
    );
  }