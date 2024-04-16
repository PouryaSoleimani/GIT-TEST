import { NextPage, GetStaticProps } from 'next'

interface Props { }

const Products: NextPage<Props> = ({ }) => {
    return (
        <>
        <h2>products page</h2>
        </>
)
}

export const getStaticProps: GetStaticProps = async (ctx) => {
    return {
        props: {},
    }
}

export default Products