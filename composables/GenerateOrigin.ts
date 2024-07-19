export const GenerateOrigin = (): string => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_";
    let result = "";
    for (let i = 0; i < 5; i++) {
        const position = Math.floor(Math.random() * chars.length);
        result += chars.charAt(position);
    }
    return result;
}