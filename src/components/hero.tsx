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
                                <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.9236 8.23227C15.1356 6.67287 10.6638 4.16885 3.71114 0.282536C3.21635 -0.0265614 2.63717 -0.0533339 2.1263 0.207401C1.86233 0.328527 1.62916 0.515775 1.44815 0.751729C1.26714 0.987683 1.14383 1.26584 1.08799 1.56256V22.4308C1.14209 22.7286 1.26423 23.0078 1.44473 23.2446C1.62523 23.4815 1.85846 23.6693 2.12209 23.7903C2.41105 23.9247 2.73266 23.9909 3.05687 23.9814C3.3995 23.9876 3.73946 23.9153 4.05249 23.7701C10.8867 19.9221 15.1435 17.4387 17.9236 15.8705C18.1508 15.7507 18.3485 15.5791 18.5024 15.3693C18.6563 15.1595 18.7626 14.9171 18.8137 14.6603C18.8647 14.4035 18.8592 14.1383 18.7975 13.8839C18.7358 13.6296 18.6193 13.3919 18.4564 13.1886C18.1464 12.7594 17.9214 12.4353 17.9214 12.4353C17.9214 12.4353 18.1464 12.1155 18.4564 11.6863C18.6191 11.4827 18.7356 11.2449 18.7972 10.9905C18.8588 10.7361 18.8644 10.4709 18.8134 10.2141C18.7624 9.95731 18.6563 9.71481 18.5026 9.50483C18.349 9.29486 18.1515 9.12298 17.9247 9.00271L17.9236 8.23227Z"></path>
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
                            <div className="screenshot bg-white rounded-3xl overflow-hidden border-8 border-white w-64 h-[500px]">
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
                            <div className="screenshot absolute -right-10 top-20 bg-white rounded-3xl overflow-hidden border-8 border-white w-48 h-[400px] -rotate-6">
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