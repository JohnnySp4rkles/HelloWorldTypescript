export interface IDataService {
    message: string;
    getMessage(): string;
}

export class DataService implements IDataService {
    message = "Welcome to the show";
    getMessage() { return this.message; }
}