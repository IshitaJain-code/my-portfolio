import {Navbar} from "@/layout/Navbar";
import {Hero} from "@/sections/Hero";
import {About} from "@/sections/About";
import {Projects} from "@/sections/Projects";
import {Resume} from "@/sections/Resume";
import {Contact} from "@/sections/Contact";

function App() {

  return(
    <div className="min-h-screen overflow-x-hidden">

      <Navbar/>

      
      
      
      <main>
        <Hero/>
        <About/>
        <Projects/>
        <Resume/>
        <Contact/>
        
       


        

      </main>


    </div>
  );

  
}  


export default App;
