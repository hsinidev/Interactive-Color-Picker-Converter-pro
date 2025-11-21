import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { hexToRgb, rgbToHex, rgbToHsl, formatRgbString, formatHslString } from '../lib/ColorConverter';

type CopyState = 'idle' | 'copied';

const CopyButton: React.FC<{ textToCopy: string }> = ({ textToCopy }) => {
    const [copyState, setCopyState] = useState<CopyState>('idle');

    const handleCopy = () => {
        if (!textToCopy || textToCopy === 'Invalid') return;
        navigator.clipboard.writeText(textToCopy).then(() => {
            setCopyState('copied');
            setTimeout(() => setCopyState('idle'), 2000);
        });
    };

    return (
        <button
            onClick={handleCopy}
            className={`w-20 text-sm px-3 py-1 rounded-md transition-all duration-200 ${
                copyState === 'copied' 
                ? 'bg-green-600 text-white' 
                : 'bg-gray-600 hover:bg-gray-500 text-gray-200'
            }`}
        >
            {copyState === 'copied' ? 'Copied!' : 'Copy'}
        </button>
    );
};

const ColorPickerTool: React.FC = () => {
    const [selectedColor, setSelectedColor] = useState<string>('#4A90E2');
    const [colorHistory, setColorHistory] = useState<string[]>(['#4A90E2', '#D0021B', '#F5A623', '#8B572A', '#7ED321']);

    const handleColorChange = (newColor: string) => {
        if (/^#([0-9A-F]{3}){1,2}$/i.test(newColor)) {
            setSelectedColor(newColor.toUpperCase());
        }
    };
    
    useEffect(() => {
        if (!colorHistory.includes(selectedColor)) {
            const newHistory = [selectedColor, ...colorHistory].slice(0, 5);
            setColorHistory(newHistory);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedColor]);

    const rgbValue = useMemo(() => hexToRgb(selectedColor), [selectedColor]);
    const hslValue = useMemo(() => (rgbValue ? rgbToHsl(rgbValue.r, rgbValue.g, rgbValue.b) : null), [rgbValue]);

    const rgbString = useMemo(() => formatRgbString(rgbValue), [rgbValue]);
    const hslString = useMemo(() => formatHslString(hslValue), [hslValue]);
    
    const textColor = useMemo(() => {
        if (!rgbValue) return 'text-white';
        const luminance = (0.299 * rgbValue.r + 0.587 * rgbValue.g + 0.114 * rgbValue.b) / 255;
        return luminance > 0.5 ? 'text-black' : 'text-white';
    }, [rgbValue]);

    return (
        <div className="w-full max-w-lg bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl p-8 md:p-10 text-white border border-white/20">
            <h1 className="text-3xl font-bold text-center mb-2">Interactive Color Tool</h1>
            <p className="text-center text-gray-400 mb-8">Pick a color to instantly get its HEX, RGB, and HSL codes.</p>


            <div className="relative w-full h-48 md:h-56 rounded-lg mb-6 shadow-inner" style={{ backgroundColor: selectedColor }}>
                <div className={`absolute inset-0 flex items-center justify-center ${textColor} text-2xl font-mono`}>
                    {selectedColor}
                </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-center mb-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-4 border-white/30 cursor-pointer">
                    <input
                        type="color"
                        value={selectedColor}
                        onChange={(e) => handleColorChange(e.target.value)}
                        className="absolute inset-[-4px] w-[calc(100%+8px)] h-[calc(100%+8px)] cursor-pointer"
                    />
                </div>
                <div className="relative flex-grow w-full">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold">#</span>
                    <input
                        type="text"
                        value={selectedColor.substring(1)}
                        onChange={(e) => handleColorChange(`#${e.target.value}`)}
                        maxLength={6}
                        className="w-full bg-gray-900/50 border-2 border-white/20 rounded-lg py-3 pl-7 pr-4 text-xl font-mono focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/50 transition"
                    />
                </div>
            </div>

            <div className="space-y-3">
                <div className="flex justify-between items-center bg-gray-900/50 rounded-lg p-3">
                    <span className="font-semibold w-16">HEX</span>
                    <span className="font-mono text-lg flex-grow text-center">{selectedColor}</span>
                    <CopyButton textToCopy={selectedColor} />
                </div>
                <div className="flex justify-between items-center bg-gray-900/50 rounded-lg p-3">
                    <span className="font-semibold w-16">RGB</span>
                    <span className="font-mono text-lg flex-grow text-center">{rgbString}</span>
                    <CopyButton textToCopy={rgbString} />
                </div>
                <div className="flex justify-between items-center bg-gray-900/50 rounded-lg p-3">
                    <span className="font-semibold w-16">HSL</span>
                    <span className="font-mono text-lg flex-grow text-center">{hslString}</span>
                    <CopyButton textToCopy={hslString} />
                </div>
            </div>

            <div className="mt-8">
                <h3 className="text-lg font-semibold mb-3 text-center">Color History</h3>
                <div className="flex justify-center gap-3">
                    {colorHistory.map(color => (
                        <div key={color} className="w-10 h-10 rounded-full cursor-pointer border-2 border-white/30 hover:border-white transition-all transform hover:scale-110"
                            style={{ backgroundColor: color }}
                            onClick={() => setSelectedColor(color)}
                            title={color}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ColorPickerTool;
