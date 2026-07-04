export const ETABLISSEMENT = {
	nom: 'École de Musique 3 Rivières',
	nomLegal: 'École de Musique 3 Rivières (AFDCM)',
	forme: 'Association déclarée loi 1901',
	activite: 'Enseignement culturel (code APE 8552Z)',
	creation: '24 septembre 1997',
	siren: '414 444 018',
	siret: '414 444 018 00025',
	adresse: {
		rue: '29 rue des mûriers',
		codePostal: '01990',
		ville: 'Montmerle-sur-Saône',
		full: '29 rue des mûriers, 01990 Montmerle-sur-Saône'
	},
	email: 'accueil@em-montmerle.com',
	telephones: [
		{ raw: '06 73 71 46 99', intl: '+33673714699' },
		{ raw: '07 88 12 33 94', intl: '+33788123394' }
	],
	direction: {
		nom: 'Guillemette Bourmeyster',
		role: 'présidente',
		full: 'Guillemette Bourmeyster, présidente'
	},
	horaires: 'Du lundi au samedi, sur rendez-vous.',
	site: 'https://www.ecoledemusique3rivieres.com/'
} as const;
