import React, { useState } from 'react';

const SeoArticle: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="w-full max-w-4xl mt-16 text-gray-300 bg-gray-900/60 backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-2xl">
      <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-300">
        The Ultimate Guide to Digital Color: Mastering HEX, RGB, and HSL
      </h2>
      
      {/* Collapsible Container */}
      <div className={`relative transition-all duration-1000 ease-in-out overflow-hidden ${!isExpanded ? 'max-h-[120px]' : 'max-h-[20000px]'}`}>
        
        {/* Gradient Mask for when collapsed */}
        {!isExpanded && (
          <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-gray-900 via-gray-900/90 to-transparent z-10 pointer-events-none"></div>
        )}

        <div className="prose prose-lg prose-invert max-w-none prose-emerald prose-headings:text-emerald-50">
          <p className="lead text-xl text-gray-200">
            Welcome to the most comprehensive resource on digital color manipulation. Whether you are a seasoned frontend engineer, a graphic designer, or a content creator, understanding the mathematical and visual relationships between HEX, RGB, and HSL is critical for modern web development. This guide covers everything from basic definitions to advanced CSS implementation strategies.
          </p>

          <div className="bg-white/5 p-6 rounded-lg my-8 border-l-4 border-emerald-500">
            <h3 className="mt-0 text-white">Table of Contents</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
              <li><a href="#intro" className="no-underline hover:text-emerald-400">1. Introduction to Color Spaces</a></li>
              <li><a href="#rgb-deep-dive" className="no-underline hover:text-emerald-400">2. Deep Dive into RGB</a></li>
              <li><a href="#hex-explained" className="no-underline hover:text-emerald-400">3. Decoding Hexadecimal</a></li>
              <li><a href="#hsl-advantage" className="no-underline hover:text-emerald-400">4. The Power of HSL</a></li>
              <li><a href="#conversions" className="no-underline hover:text-emerald-400">5. Mathematics of Conversion</a></li>
              <li><a href="#accessibility" className="no-underline hover:text-emerald-400">6. Color Accessibility & Contrast</a></li>
              <li><a href="#faq" className="no-underline hover:text-emerald-400">7. Frequently Asked Questions</a></li>
            </ul>
          </div>

          <h3 id="intro">1. Introduction to Color Spaces</h3>
          <p>
            In the physical world, we mix pigments to create color (subtractive mixing). In the digital world, we mix light. This fundamental difference underpins every color model used in computing. Monitors emit light, and by combining varying intensities of Red, Green, and Blue light, they can reproduce over 16 million unique colors.
          </p>
          <p>
            However, the way we *describe* these colors to a computer varies. A "Color Space" or "Color Model" is simply a mathematical abstraction to represent color as tuples of numbers. The three most prevalent on the web are RGB (hardware-oriented), HEX (code-oriented), and HSL (human-oriented).
          </p>

          <h3 id="rgb-deep-dive">2. Deep Dive into RGB (Red, Green, Blue)</h3>
          <p>
            RGB is the grandfather of digital color. It is an <strong>additive</strong> color model. This means you start with black (screen off, 0 light) and add light to create color.
          </p>
          <ul>
            <li><strong>R</strong>: Red intensity (0-255)</li>
            <li><strong>G</strong>: Green intensity (0-255)</li>
            <li><strong>B</strong>: Blue intensity (0-255)</li>
          </ul>
          <p>
            Why 255? In computing, a single byte consists of 8 bits. $2^8$ equals 256 values (0 to 255). Therefore, a standard RGB color uses 24 bits of data (8 bits x 3 channels), allowing for $256 \times 256 \times 256 = 16,777,216$ possible colors.
          </p>
          <p>
            <strong>Example:</strong>
            <br />
            <code>rgb(0, 0, 0)</code> = Black
            <br />
            <code>rgb(255, 255, 255)</code> = White
            <br />
            <code>rgb(255, 0, 255)</code> = Magenta (Full Red + Full Blue)
          </p>

          <h3 id="hex-explained">3. Decoding Hexadecimal (HEX)</h3>
          <p>
            The Hexadecimal format is widely misunderstood as a separate system, but it is technically just a different <em>notation</em> for RGB. It uses base-16 arithmetic instead of base-10.
          </p>
          <p>
            In base-16, we use digits 0-9 and letters A-F, where A=10, B=11... F=15. A HEX code usually looks like <code>#RRGGBB</code>.
          </p>
          <ul>
            <li>The first two digits represent Red.</li>
            <li>The middle two represent Green.</li>
            <li>The last two represent Blue.</li>
          </ul>
          <p>
            Because it is compact and doesn't require commas or parentheses, HEX became the standard for HTML and CSS in the early web. It is copy-paste friendly and precise.
          </p>

          <h3 id="hsl-advantage">4. The Power of HSL (Hue, Saturation, Lightness)</h3>
          <p>
            While machines love RGB/HEX, humans struggle to visualize "200 red, 100 green, 50 blue". Enter HSL. It is a cylindrical-coordinate representation of points in an RGB color model.
          </p>
          <h4>Hue (H)</h4>
          <p>
            Measured in degrees (0 to 360) on the color wheel.
            <br />
            0° = Red, 120° = Green, 240° = Blue. This makes picking a base color intuitive.
          </p>
          <h4>Saturation (S)</h4>
          <p>
            Measured in percentage (0% to 100%).
            <br />
            0% is grayscale (no color), 100% is full color intensity.
          </p>
          <h4>Lightness (L)</h4>
          <p>
            Measured in percentage (0% to 100%).
            <br />
            0% is black, 100% is white, 50% is "normal".
          </p>
          <p>
            <strong>Why use HSL?</strong> If you need to create a hover effect that is slightly darker than a button, in RGB/HEX you have to do complex math on three channels. In HSL, you simply reduce the Lightness value by 10%. It is the superior choice for programmatic design systems.
          </p>

          <h3 id="conversions">5. Mathematics of Conversion</h3>
          <p>
            Our tool automates this, but understanding the math is fascinating. To convert RGB to Grayscale (Luminance), for example, you cannot just average the values because human eyes are more sensitive to Green light than Blue.
          </p>
          <p>
            The formula for relative luminance is approximately: <br />
            <code>Y = 0.2126R + 0.7152G + 0.0722B</code>
          </p>
          <p>
            This explains why a pure Green <code>#00FF00</code> looks much brighter than a pure Blue <code>#0000FF</code> despite both having a mathematical value of "255" in their respective channels.
          </p>

          <h3 id="accessibility">6. Color Accessibility & Contrast</h3>
          <p>
            When designing for the web (using tools like Doodax), contrast is key. The Web Content Accessibility Guidelines (WCAG) recommend a contrast ratio of at least 4.5:1 for normal text.
          </p>
          <p>
            Using HSL helps here. If your contrast is too low, you can keep the Hue (the brand identity) and Saturation the same, and simply adjust Lightness until the text becomes readable.
          </p>

          <h3 id="faq">7. Frequently Asked Questions (FAQ)</h3>
          
          <div className="space-y-4">
            <details className="group bg-white/5 p-4 rounded-lg open:bg-white/10">
              <summary className="font-bold cursor-pointer list-none flex justify-between items-center">
                <span>Which color format is best for CSS?</span>
                <span className="transition group-open:rotate-180">▼</span>
              </summary>
              <p className="mt-2 text-gray-300">
                For static colors, HEX is standard. For dynamic colors (hover states, theming), HSL is superior because you can mathematically adjust lightness and saturation easily. Modern CSS also supports <code>oklch()</code> for even better perceptual uniformity.
              </p>
            </details>

            <details className="group bg-white/5 p-4 rounded-lg open:bg-white/10">
              <summary className="font-bold cursor-pointer list-none flex justify-between items-center">
                <span>Does converting colors lose quality?</span>
                <span className="transition group-open:rotate-180">▼</span>
              </summary>
              <p className="mt-2 text-gray-300">
                Generally, no. Converting between HEX, RGB, and HSL is lossless for 24-bit color depths. However, converting to CMYK (for print) will result in color shifts as screens can display colors that ink cannot print.
              </p>
            </details>

            <details className="group bg-white/5 p-4 rounded-lg open:bg-white/10">
              <summary className="font-bold cursor-pointer list-none flex justify-between items-center">
                <span>What is the alpha channel?</span>
                <span className="transition group-open:rotate-180">▼</span>
              </summary>
              <p className="mt-2 text-gray-300">
                The alpha channel represents opacity. In CSS, it's denoted as <code>rgba()</code> or <code>hsla()</code>. An alpha of 0 is fully transparent, while 1 is fully opaque. HEX can also support alpha using an 8-digit code (e.g., <code>#FF000080</code> for 50% red), though browser support for 8-digit HEX is newer than RGBA.
              </p>
            </details>

             <details className="group bg-white/5 p-4 rounded-lg open:bg-white/10">
              <summary className="font-bold cursor-pointer list-none flex justify-between items-center">
                <span>Why do colors look different on different screens?</span>
                <span className="transition group-open:rotate-180">▼</span>
              </summary>
              <p className="mt-2 text-gray-300">
                This is due to color calibration and panel technology (IPS, OLED, TN). Different screens have different color gamuts (sRGB, DCI-P3, AdobeRGB). While the RGB values sent to the screen are identical, the physical ability of the pixels to reproduce that wavelength of light varies between devices.
              </p>
            </details>
          </div>

          <hr className="border-white/10 my-8" />
          
          <p className="text-sm text-gray-500 text-center">
            Content curated by HSINI MOHAMED. <br/>
            For more tools, visit <a href="https://doodax.com" className="text-emerald-400">Doodax.com</a>.
          </p>
        </div>
      </div>

      <div className="flex justify-center mt-6 relative z-20">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="group relative inline-flex items-center justify-center px-8 py-3 font-bold text-white transition-all duration-200 bg-emerald-600 font-pj rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-600 hover:bg-emerald-500"
        >
          {isExpanded ? 'Show Less' : 'Read Full Guide'}
          <svg 
            className={`w-5 h-5 ml-2 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} 
            fill="none" stroke="currentColor" viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
          <div className="absolute -inset-3 rounded-full bg-emerald-400 opacity-20 group-hover:opacity-40 blur transition-opacity duration-200"></div>
        </button>
      </div>
    </div>
  );
};

export default SeoArticle;