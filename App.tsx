import React, { useState } from 'react';
import Layout from './components/Layout';
import ColorPickerTool from './components/ColorPickerTool';
import SeoArticle from './components/SeoArticle';
import InfoModal from './components/InfoModal';

const App: React.FC = () => {
  const [modalState, setModalState] = useState({
    isOpen: false,
    title: '',
    content: null as React.ReactNode
  });

  const handleNavClick = (page: string) => {
    let content;
    switch(page) {
        case 'About':
            content = (
                <div>
                    <p className="mb-4">Welcome to the Interactive Color Picker & Converter, a project meticulously crafted by <strong>HSINI MOHAMED</strong>.</p>
                    <p className="mb-4">Our mission is to provide developers, designers, and digital artists with a precise, fast, and distraction-free tool for color manipulation. Whether you are building a complex design system or just need a quick HEX code, we are here to help.</p>
                    <p>This tool is part of the <strong>Doodax.com</strong> ecosystem.</p>
                </div>
            );
            break;
        case 'Contact':
            content = (
                <div>
                    <p className="mb-4">We value your feedback and inquiries.</p>
                    <p className="mb-4"><strong>Email:</strong> <a href="mailto:hsini.web@gmail.com" className="text-emerald-400 underline">hsini.web@gmail.com</a></p>
                    <p><strong>Website:</strong> <a href="https://doodax.com" target="_blank" className="text-emerald-400 underline">doodax.com</a></p>
                    <p className="mt-4 text-sm text-gray-400">For GitHub related queries, please visit <a href="https://github.com/hsinidev" className="text-emerald-400">@hsinidev</a>.</p>
                </div>
            );
            break;
        case 'Guide':
            content = (
                <div>
                    <h3 className="text-xl font-bold mb-2 text-white">How to use:</h3>
                    <ul className="list-disc pl-5 space-y-2">
                        <li><strong>Visual Picker:</strong> Click the colored square to open your system's color palette.</li>
                        <li><strong>Manual Input:</strong> Type any valid HEX code (e.g., #FF5500) into the text field.</li>
                        <li><strong>Copy:</strong> Click the "Copy" button next to any value to save it to your clipboard.</li>
                        <li><strong>History:</strong> Click any color circle at the bottom to reload a previously used color.</li>
                    </ul>
                </div>
            );
            break;
        case 'Privacy Policy':
            content = (
                <div className="text-sm space-y-4">
                    <p><strong>Last Updated: May 2024</strong></p>
                    <p>At Interactive Color Picker (provided by Doodax), we prioritize your privacy.</p>
                    <h4 className="text-white font-bold mt-2">1. Data Collection</h4>
                    <p>We do not collect personal identifiable information (PII) such as names or addresses. We may use standard analytics tools (like Google Analytics) to understand site traffic.</p>
                    <h4 className="text-white font-bold mt-2">2. Cookies</h4>
                    <p>We use cookies solely for enhancing user experience and site functionality. By using this tool, you consent to the use of cookies.</p>
                    <h4 className="text-white font-bold mt-2">3. Third-Party Links</h4>
                    <p>This site may contain links to external sites (e.g., GitHub). We are not responsible for the privacy practices of these external sites.</p>
                </div>
            );
            break;
        case 'Terms of Service':
            content = (
                <div className="text-sm space-y-4">
                    <p>By accessing this website, you agree to be bound by these Terms and Conditions of Use.</p>
                    <h4 className="text-white font-bold mt-2">1. License</h4>
                    <p>Permission is granted to temporarily use this software for personal, non-commercial transitory viewing only.</p>
                    <h4 className="text-white font-bold mt-2">2. Disclaimer</h4>
                    <p>The materials on this website are provided "as is". HSINI MOHAMED makes no warranties, expressed or implied.</p>
                    <h4 className="text-white font-bold mt-2">3. Limitations</h4>
                    <p>In no event shall the author be liable for any damages arising out of the use or inability to use the materials on this site.</p>
                </div>
            );
            break;
        case 'DMCA':
            content = (
                <div className="text-sm space-y-4">
                    <p>We respect the intellectual property rights of others. It is our policy to respond to any claim that Content posted on the Service infringes on the copyright or other intellectual property rights of any person or entity.</p>
                    <p>If you are a copyright owner, or authorized on behalf of one, and you believe that the copyrighted work has been copied in a way that constitutes copyright infringement, please submit your claim via email to <a href="mailto:hsini.web@gmail.com" className="text-emerald-400">hsini.web@gmail.com</a>.</p>
                </div>
            );
            break;
        default:
            content = <p>Information currently unavailable.</p>;
    }

    setModalState({
        isOpen: true,
        title: page,
        content: content
    });
  };

  return (
    <Layout onNavClick={handleNavClick}>
      <div className="flex flex-col items-center w-full animate-in fade-in zoom-in duration-500">
        <ColorPickerTool />
        <SeoArticle />
      </div>
      
      <InfoModal 
        isOpen={modalState.isOpen}
        onClose={() => setModalState(prev => ({ ...prev, isOpen: false }))}
        title={modalState.title}
        content={modalState.content}
      />
    </Layout>
  );
};

export default App;