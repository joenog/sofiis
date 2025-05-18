import { FloatingMenu } from "../../components/floatingMenu";

export function Learn() {


  return (
    <>
     <main
        style={{ animation: "changeColor .8s" }}
        className="flex flex-col items-center w-full !px-4"
      >
        <h2 className="!ml-2 w-full max-w-[900px]">Learn</h2>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 !mb-20 flex-wrap max-w-[900px]">
            <div className="w-full m-10">
              <iframe className="rounded-xl" width="360" height="205" src="https://www.youtube.com/embed/Vq9fR5fJt2g?si=H7aKS2YGdm6n79t5" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
            </div>

            <div className="w-full m-10 rounded-xl">
             <iframe className="rounded-xl" width="360" height="205" src="https://www.youtube.com/embed/kN1Ef1CJBLw?si=HhT1kMW3QuINxDPb" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
            </div>

            <div className="w-full m-10 rounded-xl">
             <iframe className="rounded-xl" width="360" height="205" src="https://www.youtube.com/embed/gRso4qxL0QY?si=a-I5ojlCgLSHzZ1M" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
            </div>

            <div className="w-full m-10 rounded-xl">
             <iframe className="rounded-xl" width="360" height="205" src="https://www.youtube.com/embed/We0ybdXRI4o?si=mzovmRtcZEYW8Z6b" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
            </div>

        </section>

      </main>
    <FloatingMenu />
    </>
  )
}
