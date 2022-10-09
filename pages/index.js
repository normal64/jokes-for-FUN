import Head from 'next/head'
import {useState} from "react"
import Layout from "../components/Layout";
import styles from '../styles/Home.module.css'
import SegmentA from "../components/SegmentA"
import SegmentB from "../components/SegmentB"
export default function Home(props) {
  const [sharedState, setSharedState] = useState(``)
  const [rerender, setRerender] = useState(false)
  //console.log(`homwprops`, props);
 // console.log(`sharedState`, sharedState);

  return (
    <Layout>
      <SegmentA setSharedState={setSharedState} setRerender={setRerender} rerender={rerender}/>
      <SegmentB sharedState={sharedState} joke={props.joke} rerender={rerender}/>
    </Layout>
  )
}
export async function getStaticProps(){
    
  const res = await fetch(`https://v2.jokeapi.dev/joke/Any`)
  const data = await res.json()
  
  return { 
      props: { joke:data} ,
  }
}

