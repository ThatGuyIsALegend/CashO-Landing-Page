export default function Assistant() {
    return (
        <section id="ai-assistant" className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Tu <span className="text-primary">asistente financiero</span> personal con IA</h2>
                        <p className="text-gray-600 mb-8">CashO incorpora un asistente de inteligencia artificial que analiza tus hábitos financieros y te ofrece consejos personalizados para mejorar tu salud financiera.</p>
                        
                        <div className="space-y-6">
                            <div className="flex items-start">
                                <div className="flex-shrink-0 w-10 h-10 rounded-full gradient-bg flex items-center justify-center mr-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold mb-1">Análisis de patrones</h3>
                                    <p className="text-gray-600">Detecta patrones de gasto y te alerta sobre gastos inusuales o recurrentes que podrías optimizar.</p>
                                </div>
                            </div>
                            
                            <div className="flex items-start">
                                <div className="flex-shrink-0 w-10 h-10 rounded-full gradient-bg flex items-center justify-center mr-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold mb-1">Recomendaciones personalizadas</h3>
                                    <p className="text-gray-600">Recibe consejos adaptados a tus hábitos y objetivos financieros para maximizar tus ahorros.</p>
                                </div>
                            </div>
                            
                            <div className="flex items-start">
                                <div className="flex-shrink-0 w-10 h-10 rounded-full gradient-bg flex items-center justify-center mr-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold mb-1">Planificación inteligente</h3>
                                    <p className="text-gray-600">Crea presupuestos inteligentes que se adaptan a tus necesidades y te ayudan a alcanzar tus metas.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="md:w-1/2 flex justify-center">
                        <div className="bg-gray-50 rounded-3xl p-6 w-full max-w-md shadow-lg">
                            <div className="flex items-center mb-6">
                                <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center mr-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold">Asistente CashO</h3>
                            </div>
                            
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <div className="bg-primary/10 rounded-2xl p-3 max-w-[80%]">
                                        <p className="text-gray-800">Hola Ana, he notado que has gastado un 30% más en restaurantes este mes comparado con tu promedio habitual.</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start justify-end">
                                    <div className="bg-gray-200 rounded-2xl p-3 max-w-[80%]">
                                        <p className="text-gray-800">Es cierto, he salido más de lo habitual. ¿Cómo puedo compensarlo?</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start">
                                    <div className="bg-primary/10 rounded-2xl p-3 max-w-[80%]">
                                        <p className="text-gray-800">Podrías reducir un 15% en entretenimiento este mes para mantener tu meta de ahorro. También he encontrado una suscripción de $9.99 que no has usado en 3 meses. ¿Quieres que te ayude a cancelarla?</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="mt-6 relative">
                                <input type="text" placeholder="Pregunta a tu asistente..." className="w-full py-3 px-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary" />
                                <button className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 gradient-bg rounded-full flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}