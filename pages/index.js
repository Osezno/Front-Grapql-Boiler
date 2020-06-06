import Head from 'next/head'
import Layout from '../components/Layout'
import{  gql , useQuery} from "@apollo/client"

const OBTENER_CLIENTES_USUARIO = gql`
 query obtenerClientesVendedor{
   obtenerClientesVendedor{
     nombre
     apellido
     empresa
     email
   }
 }
`;


export default function Home() {
  const {data, loading, error} = useQuery(OBTENER_CLIENTES_USUARIO)
  return (
    <div>
      <Layout>
           <h2>HELLO WORLD</h2>
      </Layout>
    </div>
  )
}
