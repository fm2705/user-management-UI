import Head from 'next/head'
import AddUser from '../components/AddUser'
import Navbar from '../components/Navbar'
import UserList from '../components/UserList'

export default function Home() {
  return (
    <div>
      <Head>
        <title>User management App</title>      
      </Head>
      <Navbar />

      <main>
        <AddUser/>
      </main>

    </div>
  )
}
