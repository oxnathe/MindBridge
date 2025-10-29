import Onboarding from "./onboarding";
import { useEffect } from "react";
import { router } from "expo-router";

const Index = ()=> {

  // useEffect(()=>{

  //   setTimeout(()=>{
  //     router.navigate('./login')
  //   }, 3000)
  // })
  return <Onboarding/>
}


export default Index;