export type Echeance = {
	title: string;
	body: string;
};

export const paiementEcheances: Echeance[] = [
	{ title: 'En une fois', body: "Au moment de l'inscription." },
	{ title: 'En trois fois', body: "Sur l'année scolaire, sans frais." },
	{ title: 'En dix fois', body: 'Mensuellement, de septembre à juin.' }
];

export const moyensDePaiement: string[] = [
	'Chèque',
	'Espèces',
	'Chèques vacances',
	'Bons CAF',
	"Aide des comités d'entreprise"
];

export type Reduction = {
	title: string;
	body: string;
};

export const reductions: Reduction[] = [
	{
		title: '3 % avec coupon mairie',
		body: "Pour les enfants résidant à Montmerle-sur-Saône, avec le coupon mairie fourni par l'école."
	},
	{
		title: '5 % à partir du 3e élève',
		body: "Réduction sur le montant total à partir du troisième élève inscrit dans la famille."
	}
];

export type TarifItem = {
	nom: string;
	condition?: string;
	duree: string;
	tarif1: string;
	tarif2: string;
};

export const tarifsCoursCollectifs: TarifItem[] = [
	{
		nom: 'Éveil musical',
		condition: 'À partir de 4 ans (mini 5 enfants)',
		duree: '1 heure',
		tarif1: '290 €',
		tarif2: '300 €'
	},
	{
		nom: 'Solfège',
		condition: 'Mini 6 élèves',
		duree: '45 min',
		tarif1: '160 €',
		tarif2: '165 €'
	},
	{
		nom: 'Chorale enfants',
		condition: 'Mini 6 élèves',
		duree: '1 heure',
		tarif1: '210 €',
		tarif2: '215 €'
	},
	{
		nom: 'Chorale ados',
		condition: 'Mini 6 élèves',
		duree: '1 heure',
		tarif1: '210 €',
		tarif2: '215 €'
	},
	{
		nom: 'Chorale adultes',
		condition: 'Mini 6 élèves',
		duree: '1 heure',
		tarif1: '210 €',
		tarif2: '215 €'
	},
	{
		nom: 'Percussions de rue',
		condition: 'Ados / adulte',
		duree: '1h30',
		tarif1: '180 €',
		tarif2: '185 €'
	},
	{
		nom: 'Groupe jazz',
		condition: 'Ados / adulte (mini 6 personnes)',
		duree: '1h30 tous les 15 jours',
		tarif1: '180 €',
		tarif2: '185 €'
	},
	{
		nom: 'Groupe musique actuelle',
		condition: 'Ados / adulte (mini 6 personnes)',
		duree: '1h30 tous les 15 jours',
		tarif1: '180 €',
		tarif2: '185 €'
	}
];

export const tarifsCoursIndividuels: TarifItem[] = [
	{
		nom: 'Instrument seul',
		duree: '30 min',
		tarif1: '630 €',
		tarif2: '645 €'
	},
	{
		nom: 'Duo instrument',
		duree: '45 min en duo',
		tarif1: '475 € par élève',
		tarif2: '485 € par élève'
	},
	{
		nom: 'Instrument petit groupe',
		condition: '4 élèves, pour les 5-6 ans',
		duree: '30 min',
		tarif1: '200 € par élève',
		tarif2: '205 € par élève'
	},
	{
		nom: 'Instrument + solfège',
		duree: "30 min d'instrument + 45 min de solfège",
		tarif1: '785 €',
		tarif2: '800 €'
	},
	{
		nom: 'Cours de chant individuel',
		condition: 'Mini 3 élèves, maxi 6 élèves',
		duree: '1 heure',
		tarif1: '420 € par élève',
		tarif2: '430 € par élève'
	}
];

export const tarifsConditions = [
	'Les groupes jazz et musique actuelle sont accessibles aux musiciens ayant plus de 3 ans de pratique instrumentale.',
	"L'âge de 6 ans est requis pour commencer la pratique d'un instrument."
];
