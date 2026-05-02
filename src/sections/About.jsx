import{BrainCircuit, DatabaseSearch , Workflow } from "lucide-react";
const highlights=[
    {
        icon:BrainCircuit,
        title:"Machine Learning Engineer",
        description:"Builds and deploys machine learning models, handling everything from data preprocessing to production-ready systems.",

    
    },

    {
        icon: DatabaseSearch,
        title:"Data-Driven Problem Solver",
        description:"Uses data analysis and statistical thinking to extract insights and solve real-world problems effectively.",
    },

    {
        icon:Workflow,
        title:"End-to-End ML Developer",
        description:"Creates complete ML solutions, covering pipelines, model building, evaluation, and deployment.",
    },

];

export const About =()=>{

    return(
        <section id="about" className="py-32 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/*Left column */}

                    <div className="space-y-8">
                        <div className="animate-fade-in">
                            <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase"> 
                                About Me
                            </span>
                        </div>



                        <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in  animation-delay-100 text-secondary-foreground">
                            Building intelligent systems,
                            <span> one model at a time.</span>
                        </h2>
                    </div>
                </div>

            </div>

        </section>

    );

};





