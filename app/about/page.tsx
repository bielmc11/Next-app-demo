import  type {Metadata} from "next" 
export const metadata : Metadata = {
    title: "Seo page",
    description: "Seo page",
  };


export default function AboutPage () {
    return(
        <div className="w-screen h-screen">
            <span>About page</span>
        </div>
    )
}