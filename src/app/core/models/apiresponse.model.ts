export interface ApiResponse<T> {
    status: number;
    message: string;
    data: T;
    error?: string; // Optional error message for failed responses
}
