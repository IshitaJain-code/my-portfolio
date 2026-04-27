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
                <div className="grid lg:grid-col-2 gap-12 items-center">
                    {/*Left column- Text content */}
                    <div className="space-y-8">
                        <div className="animate-fade-in">
                            <span className="inline-flex itens-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                                <span className="w-2 h-2 bg-primary rounded-full animate-pulse"/>
                                    Computer Science Engineer • Specialization in Artificial Intelligence and and Machine Learning 
                                

                            </span> 
                        </div>


                        
                        {/*headline */}
                        <div>
                            <h1>
                                Turning <span className="text-primary  glow-text">Data</span>
                                <br />
                                into 
                                <br />
                                <span className="font-serif italic font-normal text-white ">
                                Intelligent Solutions.
                                </span>

                                <h1>
                                    <p className="text-lg text-muted-foreground max-w-lg">

                                        Hi, I’m Ishita Jain, a Computer Science Engineer focused on AI and Machine Learning.
                                        I build intelligent web applications by combining data, models,
                                        and modern development practices to solve meaningful problems.



                                    </p>
                                </h1>

                            </h1>
                        </div>

                    </div>
                    {/*Right column - profile image  */}
                </div>
            </div>



        </section>
    )

        
};