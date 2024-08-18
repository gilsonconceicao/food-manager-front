import Link from 'next/link'
import React from 'react'

export default function Page() {
   return (
      <div>
         <h1>Página inicial</h1>
         <ul>
            <li>
               <Link href='/foods'>Lista de comidas</Link>
            </li>
            <li>
               <Link href='/order'>Lista de pedidos</Link>
            </li>
         </ul>
      </div>
   )
}