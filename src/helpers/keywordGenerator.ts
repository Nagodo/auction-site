import { removeKeywords } from "@/data/keywords";

export function TextToKeywords(texts: string[]) {

    const keywords = new Set<string>();

    for (const text of texts) {
        const words = text.split(" ");
        for (const word of words) {
            if (removeKeywords.includes(word.toLowerCase())) {
                continue;
            }
            keywords.add(word.toLowerCase());
        }
    }

    return Array.from(keywords);
}
