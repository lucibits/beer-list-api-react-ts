// Define class beer

export interface Beer {
    id: number;
    name: string;
    description: string;
    volume: Volume;
    image_url: string;
}

export interface Volume {
    value: number;
    unit: string
}