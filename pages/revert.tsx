import { NextPage, GetStaticProps } from 'next'

interface Props {}

const Revert: NextPage<Props> = ({}) => {
  return (
      <>
      <h1>GIT REVERT PAGE</h1>
      </>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  return {
    props: {},
  }
}

export default Revert