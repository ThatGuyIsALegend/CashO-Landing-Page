import { useState, useEffect } from "react";
import logo from "@/assets/img/icon.png"

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Add/remove body class to prevent scrolling when menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
        
        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, [isMobileMenuOpen]);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <>
            {/* Full screen overlay with blur when mobile menu is open */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 bg-black/30 backdrop-blur-lg z-40" onClick={toggleMobileMenu}></div>
            )}
            
            <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
                <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                        <img src={logo} alt="Logo" width={36} height={36} className="rounded-lg" />
                        <span className="text-2xl font-bold text-primary">CashO</span>
                    </div>
                    
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#features" className="text-gray-700 hover:text-primary transition-colors">Características</a>
                        <a href="#ai-assistant" className="text-gray-700 hover:text-primary transition-colors">Asistente IA</a>
                        <a href="#testimonials" className="text-gray-700 hover:text-primary transition-colors">Testimonios</a>
                        <a href="#download" className="text-gray-700 hover:text-primary transition-colors">Descargar</a>
                    </div>
                    
                    <div className="md:hidden relative z-50">
                        <button id="menu-btn" className="text-gray-700 focus:outline-none" onClick={toggleMobileMenu}>
                            {isMobileMenuOpen ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            
                <div id="mobile-menu" className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden bg-white/50 backdrop-blur-xl z-50 relative`}>
                    <div className="container mx-auto flex flex-col ">
                        <a href="#features" className="text-gray-800 font-medium py-3 px-4 bg-white/40 backdrop-blur-lg shadow-sm hover:bg-white/60 hover:text-primary transition-all">Características</a>
                        <a href="#ai-assistant" className="text-gray-800 font-medium py-3 px-4 bg-white/40 backdrop-blur-lg shadow-sm hover:bg-white/60 hover:text-primary transition-all">Asistente IA</a>
                        <a href="#testimonials" className="text-gray-800 font-medium py-3 px-4 bg-white/40 backdrop-blur-lg shadow-sm hover:bg-white/60 hover:text-primary transition-all">Testimonios</a>
                        <a href="#download" className="text-gray-800 font-medium py-3 px-4 bg-white/40 backdrop-blur-lg shadow-sm hover:bg-white/60 hover:text-primary transition-all">Descargar</a>
                    </div>
                </div>
            </nav>
        </>
    );
}
