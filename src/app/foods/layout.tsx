export const metadata = {
    title: 'Lista de alimentos',
    description: 'Nessa página você vai poder conferir os alimentos',
}

export default function FoodsLayout({ children }: {
    children: React.ReactNode
}) {
    return <section>{children}</section>
}