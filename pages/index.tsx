interface HomeProps{
  count: number;
}

export default function Home( props: HomeProps) {
  return (
    <h1>Contagem: {props.count}</h1>
  )
}

export const getServerSideProps = async ()=>{
  const response = await fetch('http://localhost:3333/bolão/quantidade')
  const data = await response.json()

  return{
    props:{
      count: data.count,
    }
  }
}
