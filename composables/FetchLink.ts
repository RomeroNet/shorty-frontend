export const FetchLink = async (origin: string): Link => {
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
}

export interface Link {
    uuid: string,
    origin: string,
    destination: string,
    visit_count: number,
    created_at: string,
    updated_at: string,
}