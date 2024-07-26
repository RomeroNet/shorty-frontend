export const FetchLink = (origin: string): Link => {
    return ApiFetchLink(origin);
}

export interface Link {
    uuid: string,
    origin: string,
    destination: string,
    visit_count: number,
    created_at: string,
    updated_at: string,
}