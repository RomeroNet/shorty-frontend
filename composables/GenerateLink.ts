export const GenerateLink = async (request: GenerateLinkRequest): Promise<string> => {
    const data = await ApiCreateLink(request);
    return data.origin;
}

export interface GenerateLinkRequest {
    origin: string;
    destination: string;
}
