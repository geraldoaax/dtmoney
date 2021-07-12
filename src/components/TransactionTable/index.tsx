import { Container } from "./styles";

export function TransactionTable() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Desenvolvimento de WebSite</th>
            <th>12000</th>
            <th>Desenvolvimento</th>
            <th>20/02/2021</th>
          </tr>
          <tr>
            <th>Desenvolvimento de WebSite</th>
            <th>12000</th>
            <th>Desenvolvimento</th>
            <th>20/02/2021</th>
          </tr>
          <tr>
            <th>Desenvolvimento de WebSite</th>
            <th>12000</th>
            <th>Desenvolvimento</th>
            <th>20/02/2021</th>
          </tr>
          <tr>
            <th>Desenvolvimento de WebSite</th>
            <th>12000</th>
            <th>Desenvolvimento</th>
            <th>20/02/2021</th>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
