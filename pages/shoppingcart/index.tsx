import { NextPage, GetStaticProps } from 'next'

interface Props { }

const Index: NextPage<Props> = ({ }) => {
    console.log(`HELLO WORLD`);
    return (
        <>
            <h1>SHOPPING CART BRANCH TEST</h1>
        </>
    )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
    return {
        props: {},
    }
}

export default Index