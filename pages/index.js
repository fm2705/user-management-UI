import { getSession } from 'next-auth/react';
import Head from 'next/head'
import AddUser from '../components/AddUser'
import Login from '../components/Login';
import Login2 from '../components/Login2';
import Navbar from '../components/Navbar'
import UserList from '../components/UserList'

//define server side rendering 
export default function Home({session}) {
  console.log({session});
  if (!session) return <Login2 />;
  return (
    <div>
      <Head>
        <title>User management App {session.user.name} </title>      
      </Head>
      <Navbar />

      <main>
        <AddUser/>
      </main>

    </div>
  )
}

//Server side rendering:
//Define asynchronous export function
//We want the session to be loaded directly from the server when the page is loading
export async function getServerSideProps(context) {
  //use getSession from next-auth/react
  const session = await getSession(context);
  console.log({session});
  //the session that we are returning as props, we will inject it in Home component
  return {
    props: { session },
  };
}
