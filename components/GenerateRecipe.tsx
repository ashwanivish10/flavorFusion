
import React, { useState, useRef, useCallback } from "react";
import { GoogleGenAI, Type } from "@google/genai";
import { motion, AnimatePresence } from "framer-motion";
import { SendIcon, LoaderIcon, ArrowLeft, UtensilsCrossed, Paperclip, X, Sparkles } from "lucide-react";
import { cn } from "../lib/utils";

// --- Helper Hooks & Components ---

function useAutoResizeTextarea({ minHeight, maxHeight }: { minHeight: number; maxHeight?: number; }) {
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const adjustHeight = useCallback((reset?: boolean) => {
        const textarea = textareaRef.current;
        if (!textarea) return;
        if (reset) {
            textarea.style.height = `${minHeight}px`;
            return;
        }
        textarea.style.height = `${minHeight}px`;
        const newHeight = Math.max(minHeight, Math.min(textarea.scrollHeight, maxHeight ?? Number.POSITIVE_INFINITY));
        textarea.style.height = `${newHeight}px`;
    }, [minHeight, maxHeight]);
    return { textareaRef, adjustHeight };
}

function TypingDots() {
    return (
        <div className="flex items-center ml-1">
            {[1, 2, 3].map((dot) => (
                <motion.div
                    key={dot}
                    className="w-1.5 h-1.5 bg-primary rounded-full mx-0.5"
                    initial={{ opacity: 0.3 }}
                    animate={{ opacity: [0.3, 0.9, 0.3], scale: [0.85, 1.1, 0.85] }}
                    transition={{ duration: 1.2, repeat: Infinity, delay: dot * 0.15, ease: "easeInOut" }}
                />
            ))}
        </div>
    );
}

// --- Types ---

interface Recipe {
  recipeName: string;
  ingredients: string[];
  instructions: string[];
  nutrition: {
    calories: string;
    protein: string;
    carbs: string;
    fat: string;
  };
}

// --- Main Component ---

const GenerateRecipe: React.FC<{ onBack: () => void }> = ({ onBack }) => {
    const [userInput, setUserInput] = useState("");
    const [image, setImage] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [recipe, setRecipe] = useState<Recipe | null>(null);
    const [error, setError] = useState<string | null>(null);

    const { textareaRef, adjustHeight } = useAutoResizeTextarea({ minHeight: 60, maxHeight: 200 });
    const fileInputRef = useRef<HTMLInputElement>(null);

    const recipeSchema = {
        type: Type.OBJECT,
        properties: {
            recipeName: { type: Type.STRING, description: "A creative and appealing name for the recipe." },
            ingredients: {
                type: Type.ARRAY,
                items: { type: Type.STRING },
                description: "A list of all ingredients required, including quantities."
            },
            instructions: {
                type: Type.ARRAY,
                items: { type: Type.STRING },
                description: "Step-by-step instructions for preparing the dish."
            },
            nutrition: {
                type: Type.OBJECT,
                properties: {
                    calories: { type: Type.STRING },
                    protein: { type: Type.STRING },
                    carbs: { type: Type.STRING },
                    fat: { type: Type.STRING },
                },
                required: ['calories', 'protein', 'carbs', 'fat'],
                description: "Estimated nutritional information per serving."
            }
        },
        required: ['recipeName', 'ingredients', 'instructions', 'nutrition']
    };

    const handleImageUploadClick = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file && file.type.startsWith("image/")) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const removeImage = () => {
        setImage(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };

    const handleGenerateRecipe = async () => {
        if (!userInput.trim() && !image) return;

        setIsLoading(true);
        setError(null);
        setRecipe(null);
        
        // Initialize fresh instance with the global API Key
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

        const textPrompt = `Generate a high-quality, professional recipe using these ingredients: ${userInput}. If an image is provided, identify all visible pantry items and produce. Provide a creative name, ingredient list, instructions, and nutritional estimates. Respond strictly in JSON.`;

        const parts: any[] = [{ text: textPrompt }];
        
        if (image) {
            const [header, base64Data] = image.split(',');
            const mimeType = header.match(/:(.*?);/)?.[1];
            if (mimeType && base64Data) {
                 parts.push({
                    inlineData: {
                        mimeType,
                        data: base64Data
                    }
                });
            }
        }

        try {
            const response = await ai.models.generateContent({
                model: 'gemini-3-flash-preview',
                contents: { parts: parts },
                config: {
                    responseMimeType: "application/json",
                    responseSchema: recipeSchema,
                },
            });
            const recipeData = JSON.parse(response.text) as Recipe;
            setRecipe(recipeData);
        } catch (e) {
            console.error(e);
            setError("The AI chef is currently unavailable or the ingredients provided were unclear. Please try again with more details.");
        } finally {
            setIsLoading(false);
        }
    };
    
    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleGenerateRecipe();
        }
    };
    
    const resetState = () => {
        setUserInput("");
        setRecipe(null);
        setError(null);
        setImage(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
        adjustHeight(true);
    };

    return (
        <div className="min-h-screen flex flex-col w-full items-center justify-center bg-[#fcfcfc] text-dark p-4 sm:p-6 relative overflow-hidden font-sans">
            <div className="absolute inset-0 w-full h-full overflow-hidden -z-10">
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full filter blur-[100px] animate-pulse" />
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-secondary/5 rounded-full filter blur-[100px] animate-pulse delay-1000" />
            </div>
            
            <button onClick={onBack} className="absolute top-8 left-8 flex items-center gap-2 text-sm font-semibold text-gray-400 hover:text-dark transition-colors z-20 group">
              <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
              Exit to Dashboard
            </button>

            <div className="w-full max-w-2xl mx-auto relative z-10 flex flex-col items-center justify-center flex-grow">
                 <AnimatePresence mode="wait">
                    {!recipe && !isLoading && !error && (
                        <motion.div
                            key="input-view"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -30 }}
                            className="w-full"
                        >
                            <div className="text-center space-y-4 mb-10">
                                <motion.div 
                                    initial={{ scale: 0.9 }}
                                    animate={{ scale: 1 }}
                                    className="inline-flex p-3 rounded-2xl bg-primary/10 text-primary mb-2"
                                >
                                    <Sparkles size={28} />
                                </motion.div>
                                <h1 className="text-5xl font-extrabold tracking-tight text-dark">
                                    Pantry AI
                                </h1>
                                <p className="text-lg text-gray-500 font-medium">
                                    Analyze ingredients instantly with Gemini Flash.
                                </p>
                            </div>
                            
                            <div className="bg-white rounded-[2rem] border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.05)] overflow-hidden">
                                <div className="p-6">
                                    <textarea
                                        ref={textareaRef}
                                        value={userInput}
                                        onChange={(e) => { setUserInput(e.target.value); adjustHeight(); }}
                                        onKeyDown={handleKeyDown}
                                        placeholder="What's in your kitchen today?"
                                        className="w-full px-2 py-2 resize-none bg-transparent border-none text-dark text-lg focus:outline-none placeholder:text-gray-300 min-h-[80px] leading-relaxed"
                                    />
                                </div>
                                
                                <AnimatePresence>
                                    {image && (
                                        <motion.div
                                            className="px-6 pb-4"
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.9 }}
                                        >
                                            <div className="relative group w-32 h-32">
                                                <img src={image} alt="Ingredients" className="w-full h-full object-cover rounded-2xl border-2 border-primary/20" />
                                                <button
                                                    onClick={removeImage}
                                                    className="absolute -top-3 -right-3 bg-white shadow-lg text-red-500 rounded-full p-2 hover:bg-red-50 transition-colors z-10 border border-gray-100"
                                                >
                                                    <X className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                <div className="px-6 py-4 bg-gray-50/50 flex items-center justify-between border-t border-gray-100">
                                    <div className="flex items-center gap-2">
                                        <input
                                            type="file"
                                            ref={fileInputRef}
                                            onChange={handleFileChange}
                                            className="hidden"
                                            accept="image/*"
                                        />
                                        <button
                                            type="button"
                                            onClick={handleImageUploadClick}
                                            className="p-3 text-gray-400 hover:text-primary hover:bg-white rounded-xl transition-all border border-transparent hover:border-gray-200"
                                            title="Add ingredient photo"
                                        >
                                            <Paperclip className="w-6 h-6" />
                                        </button>
                                    </div>
                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        onClick={handleGenerateRecipe}
                                        disabled={isLoading || (!userInput.trim() && !image)}
                                        className={cn(
                                            "px-8 py-3 rounded-xl text-md font-bold transition-all flex items-center gap-2", 
                                            (userInput.trim() || image) 
                                                ? "bg-primary text-white shadow-xl shadow-primary/30" 
                                                : "bg-gray-200 text-gray-400 cursor-not-allowed"
                                        )}
                                    >
                                        <SendIcon className="w-5 h-5" />
                                        <span>Cook Now</span>
                                    </motion.button>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {isLoading && (
                        <motion.div
                            key="loading-view"
                            className="text-center"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                        >
                           <div className="relative inline-block mb-6">
                               <LoaderIcon className="w-16 h-16 animate-spin text-primary opacity-20" />
                               <div className="absolute inset-0 flex items-center justify-center">
                                   <Sparkles className="text-primary animate-pulse" size={32} />
                               </div>
                           </div>
                           <h2 className="text-2xl font-bold text-dark mb-2">Analyzing pantry...</h2>
                           <p className="text-gray-500 flex items-center justify-center font-medium">Generating recipe <TypingDots /></p>
                        </motion.div>
                    )}

                    {error && !isLoading && (
                        <motion.div
                            key="error-view"
                            className="text-center bg-white border border-red-100 rounded-3xl p-12 max-w-lg shadow-2xl shadow-red-500/5"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <div className="w-20 h-20 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                                <UtensilsCrossed size={40} />
                            </div>
                            <h3 className="text-2xl font-bold text-red-950 mb-3">Chef error</h3>
                            <p className="text-red-700/70 mb-8 text-lg">{error}</p>
                            <button onClick={resetState} className="bg-primary text-white font-bold px-10 py-4 rounded-2xl shadow-xl hover:bg-primary-hover transition-all w-full">
                                Back to Pantry
                            </button>
                        </motion.div>
                    )}
                    
                    {recipe && !isLoading && (
                        <motion.div
                            key="recipe-view"
                            className="w-full max-w-3xl bg-white border border-gray-100 rounded-[2.5rem] p-8 md:p-12 max-h-[85vh] overflow-y-auto shadow-[0_30px_100px_rgba(0,0,0,0.08)]"
                            initial={{ opacity: 0, scale: 0.95, y: 40 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        >
                            <div className="flex justify-between items-start mb-8">
                                <div>
                                    <span className="text-primary font-bold uppercase tracking-widest text-xs mb-2 block">AI Signature Dish</span>
                                    <h2 className="text-4xl md:text-5xl font-black text-dark leading-tight">{recipe.recipeName}</h2>
                                </div>
                                <button onClick={resetState} className="p-3 text-gray-400 hover:text-dark hover:bg-gray-50 rounded-full transition-colors">
                                    <X size={24} />
                                </button>
                            </div>

                            <div className="grid md:grid-cols-12 gap-10 mt-10">
                                <div className="md:col-span-5">
                                    <h3 className="font-bold text-xl text-dark mb-5 flex items-center gap-2">
                                        <span className="w-2 h-8 bg-primary rounded-full block"></span>
                                        Ingredients
                                    </h3>
                                    <ul className="space-y-3 text-gray-600">
                                        {recipe.ingredients.map((item, i) => (
                                            <li key={i} className="flex gap-3 text-lg">
                                                <span className="text-primary font-bold">•</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="md:col-span-7">
                                     <h3 className="font-bold text-xl text-dark mb-5 flex items-center gap-2">
                                        <span className="w-2 h-8 bg-secondary rounded-full block"></span>
                                        Instructions
                                     </h3>
                                     <ol className="space-y-6">
                                        {recipe.instructions.map((step, i) => (
                                            <li key={i} className="flex gap-4">
                                                <span className="text-gray-300 font-black text-2xl italic leading-none">{i + 1}</span>
                                                <p className="text-gray-700 text-lg leading-relaxed">{step}</p>
                                            </li>
                                        ))}
                                     </ol>
                                </div>
                            </div>

                             <div className="mt-12 pt-8 border-t border-gray-100">
                                <div className="bg-gray-50 rounded-2xl p-6 grid grid-cols-2 md:grid-cols-4 gap-6">
                                    <div className="text-center">
                                        <p className="text-xs font-bold text-gray-400 uppercase mb-1">Calories</p>
                                        <p className="text-xl font-black text-dark">{recipe.nutrition.calories}</p>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-xs font-bold text-gray-400 uppercase mb-1">Protein</p>
                                        <p className="text-xl font-black text-dark">{recipe.nutrition.protein}</p>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-xs font-bold text-gray-400 uppercase mb-1">Carbs</p>
                                        <p className="text-xl font-black text-dark">{recipe.nutrition.carbs}</p>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-xs font-bold text-gray-400 uppercase mb-1">Fat</p>
                                        <p className="text-xl font-black text-dark">{recipe.nutrition.fat}</p>
                                    </div>
                                </div>
                             </div>

                             <div className="mt-10 flex gap-4">
                                <button onClick={resetState} className="flex-1 bg-primary text-white font-bold py-4 rounded-2xl shadow-xl hover:bg-primary-hover transition-all">
                                    New Recipe
                                </button>
                                <button className="px-6 py-4 rounded-2xl border border-gray-200 font-bold text-gray-600 hover:bg-gray-50 transition-all">
                                    Print Recipe
                                </button>
                             </div>
                        </motion.div>
                    )}
                 </AnimatePresence>
            </div>
        </div>
    );
};

export default GenerateRecipe;
