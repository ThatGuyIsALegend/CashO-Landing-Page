import "../stylesheets/features.css"

export default function Features() {
    return (
        <section id="features" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Todo lo que necesitas para <span className="text-primary">gestionar tu dinero</span></h2>
                <p className="text-gray-600 max-w-2xl mx-auto">CashO combina la facilidad de uso con herramientas potentes para ayudarte a tomar el control de tus finanzas personales.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Feature 1 */}
                <div className="feature-card bg-white p-6 rounded-2xl shadow-lg hover:-translate-y-2 transition-transform duration-300">
                    <div className="w-14 h-14 gradient-bg rounded-xl flex items-center justify-center mb-5">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                        </svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Seguimiento de gastos</h3>
                    <p className="text-gray-600 mb-4">Registra y categoriza automáticamente tus gastos e ingresos para saber exactamente a dónde va tu dinero.</p>
                    <div className="bg-gray-50 rounded-xl p-4">
                        <div className="flex justify-between mb-2">
                            <span className="text-gray-600">Comida</span>
                            <span className="font-medium">$320</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div className="bg-primary h-2.5 rounded-full w-65%"></div>
                        </div>
                    </div>
                </div>
                
                {/* Feature 2 */}
                <div className="feature-card bg-white p-6 rounded-2xl shadow-lg hover:-translate-y-2 transition-transform duration-300">
                    <div className="w-14 h-14 gradient-bg rounded-xl flex items-center justify-center mb-5">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                        </svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Informes detallados</h3>
                    <p className="text-gray-600 mb-4">Visualiza tus hábitos financieros con gráficos intuitivos y reportes personalizados para tomar mejores decisiones.</p>
                    <div className="bg-gray-50 rounded-xl p-4 flex justify-between">
                        <div className="w-1/4 flex flex-col items-center">
                            <div className="h-16 w-4 bg-primary rounded-t-lg"></div>
                            <span className="text-xs mt-1">Lun</span>
                        </div>
                        <div className="w-1/4 flex flex-col items-center">
                            <div className="h-24 w-4 bg-primary rounded-t-lg"></div>
                            <span className="text-xs mt-1">Mar</span>
                        </div>
                        <div className="w-1/4 flex flex-col items-center">
                            <div className="h-12 w-4 bg-primary rounded-t-lg"></div>
                            <span className="text-xs mt-1">Mié</span>
                        </div>
                        <div className="w-1/4 flex flex-col items-center">
                            <div className="h-20 w-4 bg-primary rounded-t-lg"></div>
                            <span className="text-xs mt-1">Jue</span>
                        </div>
                    </div>
                </div>
                
                {/* Feature 3 */}
                <div className="feature-card bg-white p-6 rounded-2xl shadow-lg hover:-translate-y-2 transition-transform duration-300">
                    <div className="w-14 h-14 gradient-bg rounded-xl flex items-center justify-center mb-5">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Recordatorios inteligentes</h3>
                    <p className="text-gray-600 mb-4">Nunca olvides un pago con alertas personalizadas y recordatorios para facturas recurrentes y metas de ahorro.</p>
                    <div className="bg-gray-50 rounded-xl p-4">
                        <div className="flex items-center mb-2">
                            <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                            <span className="text-sm">Pago de Netflix - Mañana</span>
                        </div>
                        <div className="flex items-center">
                            <div className="w-2 h-2 rounded-full bg-yellow-500 mr-2"></div>
                            <span className="text-sm">Meta de ahorro - 3 días</span>
                        </div>
                    </div>
                </div>
                
                {/* Feature 4 */}
                <div className="feature-card bg-white p-6 rounded-2xl shadow-lg hover:-translate-y-2 transition-transform duration-300">
                    <div className="w-14 h-14 gradient-bg rounded-xl flex items-center justify-center mb-5">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                        </svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Metas financieras</h3>
                    <p className="text-gray-600 mb-4">Establece objetivos de ahorro y sigue tu progreso con visualizaciones motivadoras que te mantienen enfocado.</p>
                    <div className="bg-gray-50 rounded-xl p-4">
                        <p className="text-sm font-medium mb-1">Vacaciones: $1,200 / $2,000</p>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                            <div className="bg-primary h-2.5 rounded-full w-60%"></div>
                        </div>
                        <p className="text-xs text-gray-500">¡Ya has ahorrado el 60%!</p>
                    </div>
                </div>
                
                {/* Feature 5 */}
                <div className="feature-card bg-white p-6 rounded-2xl shadow-lg hover:-translate-y-2 transition-transform duration-300">
                    <div className="w-14 h-14 gradient-bg rounded-xl flex items-center justify-center mb-5">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                        </svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Seguridad avanzada</h3>
                    <p className="text-gray-600 mb-4">Tus datos financieros están protegidos con encriptación de nivel bancario y autenticación biométrica.</p>
                    <div className="bg-gray-50 rounded-xl p-4 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                        </svg>
                        <span className="text-sm font-medium">Encriptación de 256 bits</span>
                    </div>
                </div>
                
                {/* Feature 6 */}
                <div className="feature-card bg-white p-6 rounded-2xl shadow-lg hover:-translate-y-2 transition-transform duration-300">
                    <div className="w-14 h-14 gradient-bg rounded-xl flex items-center justify-center mb-5">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Sincronización multiplataforma</h3>
                    <p className="text-gray-600 mb-4">Accede a tus datos financieros desde cualquier dispositivo con sincronización en la nube en tiempo real.</p>
                    <div className="bg-gray-50 rounded-xl p-4 flex justify-around">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}