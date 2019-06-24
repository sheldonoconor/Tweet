export interface ITweet {
    text: string;
    entities: any;
    created_at: string;
    favorite_count: number;
}

export interface ITweetMetaData {
    count: number;
    completed_in: number;
}
