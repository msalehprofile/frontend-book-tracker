export type Books = {
    id: number;
    title: string;
    author: string;
    genre: string;
    imageURL: string;
}

export type WantToReadBooks = {
    id: number;
    title: string;
    author: string;
    genre: string;
    imageURL: string;
    dateAdded: string;
}

export type CurrentlyReading = {
    id: number;
    title: string;
    author: string;
    genre: string;
    imageURL: string;
    dateAdded: string;
    dateStarted: string;
}

export type ReadBooks = {
    id: number;
    title: string;
    author: string;
    genre: string;
    imageURL: string;
    dateAdded: string;
    dateStarted: string;
    dateFinished: string;
    rating: number;
    review?: string;
}