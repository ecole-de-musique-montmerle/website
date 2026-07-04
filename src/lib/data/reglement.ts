export type Article = {
	numero: number;
	titre: string;
	contenu: string;
};

export const articlesReglement: Article[] = [
	{
		numero: 1,
		titre: 'Inscription',
		contenu:
			"L'inscription est à renouveler chaque année auprès des membres du bureau. Tout élève doit remplir une fiche d'inscription. Tout changement de situation doit être signalé au bureau."
	},
	{
		numero: 2,
		titre: 'Ouverture des cours collectifs',
		contenu:
			'Si le nombre de participants inscrits à un cours collectif est insuffisant, le bureau se réserve le droit de le supprimer.'
	},
	{
		numero: 3,
		titre: "Acompte à l'inscription",
		contenu:
			"Il est demandé un tarif de 10 % du montant total de l'inscription le jour de l'inscription. Ce montant couvre les frais engagés par l'association durant le mois de septembre qui est un mois d'essai pour l'élève. En cas de désistement, ces frais ne seront pas remboursés par l'association."
	},
	{
		numero: 4,
		titre: 'Remboursement',
		contenu:
			"L'inscription enregistrée est définitive. Le remboursement ne sera accepté qu'en cas de force majeure : déménagement (justificatif à fournir), maladie nécessitant une absence de plus de 1 mois (certificat médical à l'appui), mutation professionnelle (justificatif à fournir)."
	},
	{
		numero: 5,
		titre: 'Modalités de paiement',
		contenu:
			"Afin de simplifier la gestion de la trésorerie de l'association, le règlement est réclamé en totalité lors de l'inscription, que celui-ci soit mensuel ou trimestriel. Les chèques libellés à l'ordre de l'École de Musique 3 Rivières seront retirés selon les échéances suivantes : le 5 du mois pour un règlement mensuel ; le 5 octobre, le 5 janvier et le 5 avril pour un règlement trimestriel. Le virement bancaire est accepté pour un paiement en une fois, ou bien mensualisé de manière automatique sur 10 mois. Le virement en une fois, mensuel ou trimestriel peut se faire via le lien Hello Asso. Le non-paiement de la cotisation entraînera l'exclusion de l'élève (en cas de difficultés financières passagères, contacter le trésorier)."
	},
	{
		numero: 6,
		titre: 'Absences de l’élève',
		contenu:
			"Aucun élève ne peut être dispensé du paiement partiel ou total des cotisations sous prétexte qu'il n'a pas assisté au cours de son propre fait."
	},
	{
		numero: 7,
		titre: 'Saison musicale',
		contenu:
			'La saison musicale est ouverte du lundi 14 septembre 2026 au 25 juin 2027. Aucun cours ne sera assuré durant les vacances scolaires et les jours fériés sauf cas exceptionnel.'
	},
	{
		numero: 8,
		titre: 'Absence de l’élève',
		contenu:
			"En cas d'absence de l'élève, les parents doivent avertir les enseignants au minimum 24 heures à l'avance. L'enseignant n'est pas tenu de remplacer le cours."
	},
	{
		numero: 9,
		titre: 'Absence de l’enseignant',
		contenu:
			"En cas d'absence de l'enseignant, celui-ci doit en informer son ou ses élèves et doit obligatoirement rattraper le cours."
	},
	{
		numero: 10,
		titre: 'Respect des locaux et du matériel',
		contenu:
			'Il est interdit de dégrader les locaux et le matériel mis à disposition.'
	},
	{
		numero: 11,
		titre: 'Fournitures',
		contenu:
			'Les fournitures nécessaires à la formation musicale sont à la charge des participants.'
	},
	{
		numero: 12,
		titre: 'Responsabilité pendant les cours',
		contenu:
			"Les élèves sont sous la responsabilité de l'Association uniquement pendant les cours."
	},
	{
		numero: 13,
		titre: 'Accompagnement des enfants',
		contenu:
			"Les parents sont priés de s'assurer que le cours a bien eu lieu et d'accompagner leur(s) enfant(s) jusqu'à la salle de cours. Ils sont tenus de venir récupérer les élèves dès la fin de la séance ou d'informer par écrit le professeur si l'enfant peut partir seul."
	},
	{
		numero: 14,
		titre: 'Présence des parents aux cours',
		contenu:
			"Pour des raisons pédagogiques, les parents ne sont pas admis à assister aux cours."
	},
	{
		numero: 15,
		titre: 'Passage en formation musicale supérieure',
		contenu:
			"Le passage des élèves en formation musicale supérieure est décidé par les enseignants au cours du contrôle continu effectué par les professeurs. Dans le cadre de notre statut de formation de la culture musicale nous imposons la pratique du solfège chez les enfants durant les 3 premières années d'instrument."
	},
	{
		numero: 16,
		titre: 'Photos et vidéos',
		contenu:
			"Les photos ou vidéos, prises à l'occasion de différents événements ponctuant la vie de notre association, peuvent être diffusées dans les différents supports publicitaires (presse, articles locaux, site internet, réseaux sociaux, etc.). Votre accord écrit est nécessaire."
	}
];
