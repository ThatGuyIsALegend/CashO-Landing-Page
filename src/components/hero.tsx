import { siGoogleplay } from "simple-icons/icons";

export default function Hero() {
    return (
        <section className="pt-24 pb-16 md:pt-32 md:pb-24 gradient-bg bg-primary">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                            Controla tus finanzas con <span className="text-light">inteligencia</span>
                        </h1>
                        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-lg mx-auto md:mx-0">
                            CashO es más que un gestor de gastos. Con nuestro asistente IA, toma decisiones financieras inteligentes y alcanza tus metas.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                            <a href="#download" className="app-btn flex items-center justify-center bg-white text-primary font-semibold py-3 px-6 rounded-xl shadow-lg">
                                <svg className="w-6 h-6 mr-2" role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d={siGoogleplay.path} />
                                </svg>
                                Descargar en Google Play
                            </a>
                            <button className="app-btn flex items-center justify-center bg-transparent border-2 border-white text-white font-semibold py-3 px-6 rounded-xl">
                                Ver demo
                            </button>
                        </div>
                    </div>
                    <div className="md:w-1/2 relative">
                        <div className="relative z-10 flex justify-center">
                            {/* Aquí irá la captura de pantalla principal */}
                            <div className="screenshot bg-white rounded-3xl overflow-hidden border-8 border-white w-64 h-[500px] transition-transform duration-300 hover:-translate-y-3">
                                <div className="bg-primary/10 w-full h-full flex items-center justify-center text-primary">
                                    <div className="text-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                        </svg>
                                        <p>Captura de pantalla principal</p>
                                    </div>
                                </div>
                            </div>
                            {/* Segunda captura de pantalla (más pequeña y en segundo plano) */}
                            <div className="screenshot absolute -right-10 top-20 bg-white rounded-3xl overflow-hidden border-8 border-white w-48 h-[400px] -rotate-6 transition-transform duration-300 hover:-translate-y-3 hover:-rotate-0">
                                <div className="bg-primary/10 w-full h-full flex items-center justify-center text-primary">
                                    <div className="text-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                        </svg>
                                        <p className="text-sm">Captura secundaria</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Decoración de fondo */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-white/20 rounded-full blur-3xl -z-10"></div>
                    </div>
                </div>
            </div>
        </section> 
    )
}