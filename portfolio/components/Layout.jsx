import Head from 'next/head'
import React from 'react'

const Layout = ({children, title, description}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description}/>
      </Head>

      <main className='container mx-auto'>
        {children}
      </main>

      <footer>
        <p className='text-center text-gray-500 font-semibold text-lg py-6'>Jaiber Restrepo Villa, Todos los derechos reservados, 2023</p>
      </footer>
    </>
  )
}

export default Layout