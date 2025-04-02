import { FloatingMenu } from "../../components/floatingMenu";
import profileImg from "../profile/img/profile.svg"

export function Profile() {
  return(
    <>
    <main>

      <h1 className="!m-6"> </h1>
      <div className="flex flex-col h-96 justify-center items-center">
        <img className="h-50 " src={profileImg} alt="" />
        <h2 >soon...</h2>
      </div>
      <FloatingMenu />
    </main>
    </>
  )
}