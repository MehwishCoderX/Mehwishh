
import AboutImg from '../assets/About Me.png'
export default function About() {
    return (
      <section className="relative flex items-center justify-center  text-white min-h-screen px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
         
          <div className="relative w-1/2">
          
            <div className="absolute -z-10 left-0 top-0 w-full h-full bg-purple-600 mask-brush"></div>
  
            <img 
              src={AboutImg}
              alt="About Me" 
              className="relative z-10 w-full max-w-sm mx-auto rounded-lg"
            />
          </div>
  
          {/* Text Content */}
          <div className="md:w-1/2 p-6">
            <h3 className=" text-sm text-black uppercase">About</h3>
            <h2 className="text-4xl font-bold text-black mb-4">About Me</h2>
            <p className="text-black mb-4 leading-loose">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius
              faucibus massa sollicitudin amet augue. Nibh metus a semper purus mauris
              duis. Lorem eu neque, tristique quis duis. Nibh scelerisque ac adipiscing
              velit non nulla in amet pellentesque.
              Sit turpis pretium eget maecenas. Vestibulum dolor mattis consectetur eget
              commodo vitae. Amet pellentesque sit pulvinar lorem mi a, euismod risus.
            </p>
            
          </div>
        </div>
      </section>
    );
  }
  