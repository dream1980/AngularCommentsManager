export class Comment {
    
    id: number;
    name: string;
    email: string;
    body: string;

    constructor(_id: number = 0, _name: string = "", _email: string = "", _body: string = "") {
        this.id = _id;
        this.name = _name;
        this.email = _email;
        this.body = _body;
    }
}