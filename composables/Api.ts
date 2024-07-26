export const ApiCreateLink = async (request: CreateLinkRequest): Promise<CreateLinkResponse> => {
    const config = useRuntimeConfig();
    const createLinkUrl = `${config.public.apiBase}/url`;

    return await $fetch(createLinkUrl, {
        method: 'POST',
        body: request
    });
};

export const ApiFetchLink = async (origin: string): Link => {
    const config = useRuntimeConfig();
    const fetchUrlUrl = `${config.public.apiBase}/url?origin=${origin}`;

    const data = await $fetch(fetchUrlUrl);

    return {
        uuid: data.uuid,
        origin: data.origin,
        destination: data.destination,
        visit_count: data.visit_count,
        created_at: data.created_at,
        updated_at: data.updated_at,
    };
};
