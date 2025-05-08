import { siGoogleplay } from "simple-icons/icons";

export default function Download() {
    return (
        <section id="download" className="py-16 gradient-bg">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 mb-10 md:mb-0">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Descarga CashO y transforma tus finanzas hoy</h2>
                        <p className="text-white/90 mb-8 text-lg">Únete a miles de usuarios que ya han mejorado su salud financiera con nuestra aplicación inteligente.</p>
                        
                        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                            <a href="#" className="app-btn flex items-center justify-center bg-white text-primary font-semibold py-4 px-6 rounded-xl shadow-lg">
                                <svg className="w-6 h-6 mr-2" role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d={siGoogleplay.path} />
                                </svg>
                                Descargar en Google Play
                            </a>
                            <button className="app-btn flex items-center justify-center bg-transparent border-2 border-white text-white font-semibold py-4 px-6 rounded-xl">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                </svg>
                                Programar recordatorio
                            </button>
                        </div>
                        
                        <div className="mt-8 flex items-center">
                            <div className="flex -space-x-2">
                                <div className="w-8 h-8 rounded-full bg-white/20 border-2 border-white"></div>
                                <div className="w-8 h-8 rounded-full bg-white/20 border-2 border-white"></div>
                                <div className="w-8 h-8 rounded-full bg-white/20 border-2 border-white"></div>
                            </div>
                            <p className="ml-3 text-white/90">+100,000 descargas</p>
                        </div>
                    </div>
                    
                    <div className="md:w-1/2 flex justify-center">
                        <div className="relative">
                            {/* Imagen principal del teléfono */}
                            <div className="screenshot bg-white rounded-3xl overflow-hidden border-8 border-white w-64 h-[500px] shadow-xl">
                                <div className="bg-primary/10 w-full h-full flex items-center justify-center text-primary">
                                    <div className="text-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                        </svg>
                                        <p>Captura de pantalla</p>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Elementos decorativos */}
                            <div className="absolute -top-6 -left-6 w-12 h-12 rounded-full bg-yellow-400"></div>
                            <div className="absolute -bottom-6 -right-6 w-16 h-16 rounded-full bg-pink-400"></div>
                            <div className="absolute top-1/4 -right-4 w-8 h-8 rounded-full bg-green-400"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}