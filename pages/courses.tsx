import { NextPage, GetStaticProps } from 'next'

interface Props { }

const Courses: NextPage<Props> = ({ }) => {
    const age = 30
    return (
        <div className='text-3xl font-extrabold flex flex-col space-y-4 p-6'>
            <h1>{age}</h1>
            <h2>HELLO WORLD</h2>
            <h3>THE TEST FOR commit -am</h3>
            <p>TESTING ALIASES</p>
            <p>TESTING FOR MERGING NON-FAST-FORWARD BRANCHES</p>
            <p>TESTING THE GIT DIFF</p>
        </div>
    )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
    return { props: {}, }
}

export default Courses 