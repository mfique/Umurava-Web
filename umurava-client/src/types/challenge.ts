export interface Challenge {
    id: string;
    title: string;
    description: string;
    status: "open" | "ongoing" | "completed";
    moneyPrize: number;
    deadline: string;
    duration: number;
}
