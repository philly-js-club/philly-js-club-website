export interface EventData {
	date: string;
	displayDate?: string;
	duration: { hours: number };
	link: string;
	location?: string;
	topics: string[];
}
