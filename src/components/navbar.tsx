import logo from "@/assets/img/icon.png"

const components: { title: string; href: string; description: string }[] = [
    { title: "Home", href: "/", description: "Home" },
    { title: "About", href: "/about", description: "About" },
    { title: "Contact", href: "/contact", description: "Contact" },
];

export default function Navbar() {
    return (
        <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                <div className="flex items-center space-x-2">
                    <img src={logo} alt="Logo" width={36} height={36} />
                    <span className="text-2xl font-bold text-primary">CashO</span>
                </div>
                
                <div className="hidden md:flex items-center space-x-8">
                    <a href="#features" className="text-gray-700 hover:text-primary transition-colors">Características</a>
                    <a href="#ai-assistant" className="text-gray-700 hover:text-primary transition-colors">Asistente IA</a>
                    <a href="#testimonials" className="text-gray-700 hover:text-primary transition-colors">Testimonios</a>
                    <a href="#download" className="text-gray-700 hover:text-primary transition-colors">Descargar</a>
                </div>
                
                <div className="md:hidden">
                    <button id="menu-btn" className="text-gray-700 focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </div>
        
            <div id="mobile-menu" className="hidden md:hidden bg-white border-t">
                <div className="container mx-auto px-4 py-2 flex flex-col space-y-3">
                    <a href="#features" className="text-gray-700 py-2 hover:text-primary transition-colors">Características</a>
                    <a href="#ai-assistant" className="text-gray-700 py-2 hover:text-primary transition-colors">Asistente IA</a>
                    <a href="#testimonials" className="text-gray-700 py-2 hover:text-primary transition-colors">Testimonios</a>
                    <a href="#download" className="text-gray-700 py-2 hover:text-primary transition-colors">Descargar</a>
                </div>
            </div>
        </nav>
    );
}
