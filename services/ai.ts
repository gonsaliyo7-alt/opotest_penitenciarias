
import { GoogleGenerativeAI } from "@google/generative-ai";
import type { Question } from "../types";

export class AIService {
    private genAI: GoogleGenerativeAI | null = null;
    private model: any = null;
    private apiKey: string | null = null;

    constructor() {
        const storedKey = localStorage.getItem('gemini_api_key');
        if (storedKey) {
            this.initialize(storedKey);
        }
    }

    initialize(apiKey: string) {
        this.apiKey = apiKey;
        this.genAI = new GoogleGenerativeAI(apiKey);
        this.model = null;
        localStorage.setItem('gemini_api_key', apiKey);
    }

    hasKey(): boolean {
        return !!this.apiKey;
    }

    clearKey() {
        this.apiKey = null;
        this.genAI = null;
        this.model = null;
        localStorage.removeItem('gemini_api_key');
    }

    async generateQuestion(topic?: string): Promise<Question> {
        if (!this.genAI) {
            throw new Error("API Key no configurada");
        }

        // Initialize model if not already done
        if (!this.model) {
            // Using Gemini 2.5 Flash Lite
            this.model = this.genAI.getGenerativeModel({ model: "gemini-2.5-flash-lite" });
        }

        const prompt = `Eres un experto en oposiciones de España. Crea una pregunta de examen tipo test sobre el temario de Ayudante de Instituciones Penitenciarias.

FORMATO REQUERIDO (responde SOLO con este JSON):
{
  "questionText": "¿Pregunta sobre legislación penitenciaria, derecho penal o función pública?",
  "options": ["Primera opción", "Segunda opción", "Tercera opción", "Cuarta opción"],
  "correctAnswer": 0,
  "explanation": "Explicación clara de por qué es correcta, citando artículos si procede"
}

IMPORTANTE: Responde ÚNICAMENTE con el JSON, sin texto antes ni después.`;

        try {
            const result = await this.model.generateContent(prompt);
            const response = await result.response;

            console.log("📥 Respuesta completa de la API:", response);

            const text = response.text();
            console.log("📄 Texto extraído:", text);

            // Clean JSON
            let cleanText = text.trim();
            cleanText = cleanText.replace(/```json\n?/g, '');
            cleanText = cleanText.replace(/```\n?/g, '');
            cleanText = cleanText.replace(/^[^{]*({[\s\S]*})[^}]*$/, '$1');

            console.log("🧹 Texto limpio:", cleanText);

            const questionData = JSON.parse(cleanText);

            // Validate
            if (!questionData.questionText || !Array.isArray(questionData.options) || typeof questionData.correctAnswer !== 'number') {
                throw new Error("Estructura inválida");
            }

            if (questionData.options.length !== 4) {
                throw new Error("Debe tener 4 opciones");
            }

            return questionData as Question;
        } catch (error: any) {
            console.error("Error:", error);

            if (error.message?.includes('API key')) {
                throw new Error("API Key inválida. Verifica que sea correcta.");
            } else if (error.message?.includes('quota')) {
                throw new Error("Límite excedido. Espera unos minutos.");
            } else if (error instanceof SyntaxError) {
                throw new Error("Error al procesar respuesta. Intenta de nuevo.");
            } else {
                throw new Error(error.message || "Error desconocido");
            }
        }
    }
}

export const aiService = new AIService();
