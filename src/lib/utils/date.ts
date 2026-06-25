const MONTHS = [
	'janvier',
	'février',
	'mars',
	'avril',
	'mai',
	'juin',
	'juillet',
	'août',
	'septembre',
	'octobre',
	'novembre',
	'décembre'
];

/** Formate une date ISO (YYYY-MM-DD) en français long, ex. « 30 juin 2025 ». */
export function formatDate(iso: string): string {
	const [year, month, day] = iso.split('-').map((n) => parseInt(n, 10));
	if (!year || !month || !day) return iso;
	return `${day} ${MONTHS[month - 1] ?? ''} ${year}`.trim();
}
