import{Button} from "@/components/Button";
import {ArrowRight , Download ,ChevronDown } from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode, SiKaggle } from "react-icons/si";


const skills=[
    "Python",
    "SQL",
    "Numpy",
    "Pandas",
    "Scikit-learn",
    "Matplotlib",
    "Seaborn",
    "Streamlit",
    "Regression",
    "Classification",
    "Clustering",
    "Model Evaluation",
    "Model Optimization",
    "PyTorch",
    "Data Handling",
    "Feature Engineering",
    "Ensemble Learning",
    "NLP",
    "Git",
    "GitHub",
    "Docker",
    "FastAPI"


];

export const Hero = () =>{
    return(
        <section className="relative min-h-screen flex items-center overflow-hidden">
            {/* Bg*/}
            <div className="absolute inset-0">
                <img src="/best1.jpg" alt="Hero image" className="w-full h-full object-cover opacity-40"/>
                <div className="absolute inset-0 bg-gradient-to-be from-background/20 via-background/100 to-background"/>
            </div>

            {/*Content */}
            <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/*Left column- Text content */}
                    <div className="space-y-8">
                        <div className="animate-fade-in">
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                                <span className="w-2 h-2 bg-primary rounded-full animate-pulse"/>
                                    Computer Science Engineer • Specialization in Artificial Intelligence and and Machine Learning 
                            </span> 
                        </div>


                        
                        {/*headline */}
                        <div className="space-y-4">
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100 ">
                                Turning <span className="text-primary  glow-text">Data</span>
                                <br />
                                into 
                                <br />
                                <span className="font-serif italic font-normal text-white ">
                                Intelligent Solutions.
                                </span>

                            </h1>
                                    <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">

                                        Hi, I’m Ishita Jain, a Computer Science Engineer focused on AI and Machine Learning.
                                        I build intelligent web applications by combining data, models,
                                        and modern development practices to solve meaningful problems.



                                    </p>
                        </div>

                        {/*CTAs */}
                        <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">

                            <Button size="lg">
                                Contact Me <ArrowRight className="w-5 h-5"/>
                            </Button>
                            <AnimatedBorderButton>
                                <Download className="w-5 h-5"/>
                                Download CV
                            </AnimatedBorderButton>
                        </div>


                        {/*Social links*/}
                        <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
                            <span className="text-sm text-muted-foreground">Follow me: </span>
                            {[
                                { icon: FaGithub, href: "https://github.com/IshitaJain-code" },
                                { icon: FaLinkedin, href: "https://www.linkedin.com/in/ishita-jain-5a178a3b0" },
                                { icon: SiLeetcode, href: "https://leetcode.com/u/ishita_jain1902/" },
                                { icon: SiKaggle, href: "https://www.kaggle.com/ishitajain019" }
                            ].map((social,idx)=>(
                                <a key={idx} href={social.href} className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300">
                                    {<social.icon className="w-5 h-5"/>}
                                </a>
                            ))}
                        </div>
                    </div>


                    {/*Right column - profile image  */}

                    <div className="relative animate-fade-in animation-delay-300 ">
                        {/*profile image */}
                        <div className="relative max-w-md mx-auto ">
                            <div 
                                className="absolute inset-0 rounded-3xl bg-gradient-to-br
                                from-primary/30 via-transparent to-primary/10 blur-2xl animate-pluse"
                            />

                            <div className="relative glass rounded-3xl p-2 glow-border">
                                <img src="/profile-photo.jpg" 
                                    alt="Ishita jain" 
                                    className="w-full aspect-[4/5] object-cover rounded-2xl"
                                />

                                {/*floating badge */}
                                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float ">
                                    <div className="flex items-center gap-3">
                                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse " />
                                        <span className="text-sm font-medium">Available for work</span>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>





                </div>
                {/*skill section */}
                <div className="mt-20 animate-fade-in animation-delay-600">
                    <p className="text-md text-muted-foreground mb-6 text-center">Technologies I work with</p>
                    <div className="relative overflow-hidden">
                        <div className="flex animate-marquee">
                            {[...skills,...skills].map((skill,idx)=>(
                                <div key={idx}className="flex-shrink-0 px-8 py-4">
                                    <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">{skill}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in"> 
                <a 
                    href="#about"
                    className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary"
                >
                    <span className="text-xs uppercase tracking-wider">Scroll</span>
                    <ChevronDown className="w-6 h-6 animate-bounce" />


                </a>
            </div>
        </section>
    );
};