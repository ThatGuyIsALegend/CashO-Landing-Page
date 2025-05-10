import FAQItem from './FAQItem';

export default function FAQ() {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Preguntas <span className="text-primary">frecuentes</span></h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">Todo lo que necesitas saber sobre CashO y cómo puede ayudarte a mejorar tus finanzas.</p>
                </div>
            
                <div className="max-w-3xl mx-auto space-y-4">
                    <FAQItem
                        question="¿Cómo funciona el asistente IA?"
                        answer="Nuestro asistente IA utiliza algoritmos avanzados para analizar tus datos financieros y ofrecerte recomendaciones personalizadas. Aprende de tus hábitos y te ayuda a tomar decisiones más inteligentes para alcanzar tus metas financieras."
                    />
<FAQItem
                        question="¿Es seguro CashO?"
                        answer="Sí, la seguridad es nuestra máxima prioridad. Utilizamos encriptación de extremo a extremo y seguimos las mejores prácticas de la industria para proteger tu información financiera."
                    />
                    <FAQItem
                        question="¿CashO tiene algún costo?"
                        answer="CashO ofrece un plan gratuito con funcionalidades esenciales. También contamos con planes premium con características avanzadas para aquellos que buscan un mayor control y personalización de sus finanzas."
                    />
                    <FAQItem
                        question="¿Cómo empiezo a usar CashO?"
                        answer="Es muy fácil. Simplemente descarga la aplicación desde tu tienda de aplicaciones (iOS o Android), crea una cuenta y sigue los pasos para conectar tus cuentas bancarias. ¡Estarás listo para mejorar tus finanzas en minutos!"
                    />
                </div>
            </div>
        </section>
    )
}