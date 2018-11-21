export class ContactInterface {
    id: number;
    name: string;
    email: string;
    phone: string;
    tags: string[];
    isDeleted = false;
}
