import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
  onNavClick: (page: string) => void;
}

const SmokyBackground: React.FC = () => (
  <div className="fixed inset-0 z-[-10] overflow-hidden bg-gray-950">
    {/* Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-slate-900 to-black opacity-90"></div>
    
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        {/* Smoky Green Blob 1 */}
        <div className="absolute -top-[10%] -left-[10%] w-[60vw] h-[60vw] bg-emerald-900/30 rounded-full mix-blend-screen filter blur-[100px] animate-drift"></div>
        
        {/* Smoky Teal Blob 2 */}
        <div className="absolute top-[20%] -right-[10%] w-[50vw] h-[50vw] bg-teal-900/20 rounded-full mix-blend-screen filter blur-[120px] animate-drift animation-delay-2000"></div>
        
        {/* Smoky Purple/Multi Accent */}
        <div className="absolute -bottom-[10%] left-[20%] w-[45vw] h-[45vw] bg-indigo-900/20 rounded-full mix-blend-screen filter blur-[100px] animate-drift animation-delay-4000"></div>
        
        {/* Central Glow */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-radial from-emerald-900/10 to-transparent opacity-50 pointer-events-none"></div>
    </div>

    <style>{`
      @keyframes drift {
        0% { transform: translate(0px, 0px) scale(1); }
        33% { transform: translate(30px, -50px) scale(1.1); }
        66% { transform: translate(-20px, 20px) scale(0.95); }
        100% { transform: translate(0px, 0px) scale(1); }
      }
      .animate-drift {
        animation: drift 20s infinite ease-in-out;
      }
      .animation-delay-2000 {
        animation-delay: 7s;
      }
      .animation-delay-4000 {
        animation-delay: 13s;
      }
      .bg-gradient-radial {
        background-image: radial-gradient(circle, var(--tw-gradient-stops));
      }
    `}</style>
  </div>
);

const Layout: React.FC<LayoutProps> = ({ children, onNavClick }) => {
  const navItems = ['About', 'Contact', 'Guide', 'Privacy Policy', 'Terms of Service', 'DMCA'];
  
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-between text-white px-4 sm:px-6 md:px-8 font-sans">
      <SmokyBackground />
      
      <header className="w-full max-w-7xl py-6 border-b border-white/5">
        <nav className="flex flex-wrap justify-center md:justify-end gap-x-8 gap-y-4">
          {navItems.map(item => (
            <button 
              key={item} 
              onClick={() => onNavClick(item)} 
              className="text-sm font-medium text-gray-400 hover:text-emerald-400 transition-colors duration-300 focus:outline-none"
            >
              {item}
            </button>
          ))}
        </nav>
      </header>

      <main className="flex-grow w-full max-w-7xl py-12 flex flex-col items-center relative z-10">
        {children}
      </main>

      <footer className="w-full max-w-7xl py-8 mt-12 border-t border-white/10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <div className="text-center md:text-left">
            &copy; {new Date().getFullYear()} Interactive Color Tool. All rights reserved.
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
             <a href="mailto:hsini.web@gmail.com" className="hover:text-emerald-400 transition-colors">hsini.web@gmail.com</a>
             <a href="https://doodax.com" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">doodax.com</a>
          </div>

          <div className="text-center md:text-right">
            Powered by <a href="https://github.com/hsinidev" target="_blank" rel="noopener noreferrer" className="font-bold text-emerald-400 hover:text-emerald-300 hover:underline transition-colors">HSINI MOHAMED</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;