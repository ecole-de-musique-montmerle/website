export type Echeance = {
	title: string;
	body: string;
};

export const paiementEcheances: Echeance[] = [
	{ title: 'En une fois', body: "Au moment de l'inscription." },
	{ title: 'En trois fois', body: "Sur l'année scolaire, sans frais." },
	{ title: 'En neuf fois', body: 'Mensuellement, de septembre à mai.' }
];

export const moyensDePaiement: string[] = [
	'Chèque',
	'Espèces',
	'Chèques vacances',
	'Virement mensuel',
	'Bons CAF'
];

export type Reduction = {
	title: string;
	body: string;
};

export const reductions: Reduction[] = [
	{
		title: '5 % à partir du 2e élève',
		body: "Réduction appliquée sur le montant total à partir d'un second élève inscrit dans la famille."
	},
	{
		title: '8 % à partir du 3e élève',
		body: 'Réduction renforcée pour les familles nombreuses.'
	},
	{
		title: '5 % pour le 2e instrument',
		body: "Pour un même élève qui pratique deux instruments à l'école."
	},
	{
		title: 'Subvention mairie 50 €',
		body: "Pour les enfants résidant à Montmerle-sur-Saône, via le ticket sport et culture fourni par l'école."
	}
];
