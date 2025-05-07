export default function FAQ() {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Preguntas <span className="text-primary">frecuentes</span></h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">Todo lo que necesitas saber sobre CashO y cómo puede ayudarte a mejorar tus finanzas.</p>
                </div>
            
                <div className="max-w-3xl mx-auto space-y-6">
                    { /* FAQ Item 1 */ }
                    <div className="bg-gray-50 rounded-xl p-6">
                        <button className="faq-btn flex justify-between items-center w-full text-left">
                            <span className="text-lg font-semibold">¿Cómo funciona el asistente IA?</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}