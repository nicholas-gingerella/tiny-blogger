export interface BlogPost {
    id: number;
    title: string;
    description: string;
    content: string;
    tags: Array<string>;
    date_created: string;
    date_modified: string;
    published: boolean;

}