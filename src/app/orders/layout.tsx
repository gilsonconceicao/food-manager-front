export const metadata = {
    title: 'Lista de pedidos',
    description: 'Nessa página você vai poder acompanhar os pedidos',
}

export default function OrdersLayout({ children }: {
    children: React.ReactNode
}) {
    return <section>{children}</section>
}