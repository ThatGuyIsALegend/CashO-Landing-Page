export default function Stats() {
    return (
        <section className="py-12 bg-white">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                    <div className="p-6">
                        <p className="text-4xl font-bold text-primary mb-2">100K+</p>
                        <p className="text-gray-600">Usuarios activos</p>
                    </div>
                    <div className="p-6">
                        <p className="text-4xl font-bold text-primary mb-2">4.8</p>
                        <p className="text-gray-600">Calificación en Play Store</p>
                    </div>
                    <div className="p-6">
                        <p className="text-4xl font-bold text-primary mb-2">85%</p>
                        <p className="text-gray-600">Mejoran sus finanzas</p>
                    </div>
                    <div className="p-6">
                        <p className="text-4xl font-bold text-primary mb-2">24/7</p>
                        <p className="text-gray-600">Asistente IA disponible</p>
                    </div>
                </div>
            </div>
        </section>
    )
}