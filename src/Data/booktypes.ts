export type Books = {
    id: number;
    title: string;
    author: string;
    genre: string;
    imageURL?: string | undefined;
    numberOfPages: number;
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
    numberOfPages: number;
    dateAdded: string;
    dateStarted: string;
}

export type ReadBooks = {
    id: number;
    title: string;
    author: string;
    genre: string;
    imageURL: string;
    numberOfPages: number;
    dateAdded: string;
    dateStarted: string;
    dateFinished: Date;
    rating: number;
    review: string;
}