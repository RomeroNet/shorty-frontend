export const GenerateLink = async (request: GenerateLinkRequest): Promise<string> => {
    const config = useRuntimeConfig();
    const createLinkUrl = `${config.public.apiBase}/url`;

    return await $fetch(createLinkUrl, {
        method: 'POST',
        body: request
    });
}

export interface GenerateLinkRequest {
    origin: string;
    destination: string;
}
