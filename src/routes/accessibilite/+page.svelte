<script lang="ts">
	import PageHero from '$lib/components/PageHero.svelte';
	import { ETABLISSEMENT } from '$lib/data/etablissement';
</script>

<svelte:head>
	<title>Déclaration d'accessibilité | École de Musique 3 Rivières</title>
	<meta
		name="description"
		content="Déclaration d'accessibilité du site de l'École de Musique 3 Rivières conformément à l'article 47 de la loi n° 2005-102 du 11 février 2005."
	/>
	<meta name="robots" content="index, follow" />
</svelte:head>

<PageHero
	title="Déclaration d'accessibilité"
	lede="Engagement de l'école pour rendre son site accessible à toutes et tous, état de conformité, et voies de retour."
/>

<section
	class="page-section page-section--light"
	aria-label="Contenu de la déclaration d'accessibilité"
>
	<div class="container">
		<article class="prose">
			<p class="prose__updated">Mise à jour : 3 mai 2026</p>

			<section class="prose__section" aria-labelledby="engagement">
				<h2 id="engagement">Engagement</h2>
				<p>
					L'École de Musique 3 Rivières s'engage à rendre son site internet accessible à toutes et
					tous, conformément à l'article 47 de la loi n° 2005-102 du 11 février 2005 pour l'égalité
					des droits et des chances, la participation et la citoyenneté des personnes handicapées,
					et au Référentiel Général d'Amélioration de l'Accessibilité (RGAA) version 4.1.
				</p>
				<p>
					Cette accessibilité est pensée dès la conception du site&nbsp;: contrastes vérifiés en
					OKLCH, navigation au clavier, lien d'évitement, hiérarchie sémantique des titres,
					descriptions textuelles des images, et support de la préférence système <code
						>prefers-reduced-motion</code
					>.
				</p>
			</section>

			<section class="prose__section" aria-labelledby="conformite">
				<h2 id="conformite">État de conformité</h2>
				<p>
					Une évaluation formelle du niveau de conformité au RGAA n'a pas encore été menée par un
					organisme agréé. Le site sera audité prochainement et cette déclaration sera actualisée
					avec le résultat (conformité totale, partielle ou non-conformité), la liste des contenus
					non accessibles et les dérogations éventuelles pour charge disproportionnée.
				</p>
			</section>

			<section class="prose__section" aria-labelledby="contenu">
				<h2 id="contenu">Contenus non accessibles</h2>
				<p>
					Aucun contenu n'a été identifié à ce stade comme structurellement inaccessible. Cette
					section sera mise à jour après l'audit RGAA.
				</p>
			</section>

			<section class="prose__section" aria-labelledby="etablissement">
				<h2 id="etablissement">Établissement de la déclaration</h2>
				<p>
					Cette déclaration a été établie le 3 mai 2026 par l'éditeur du site. Elle a été rédigée à
					partir de l'auto-évaluation des choix techniques et éditoriaux retenus pour la conception
					du site.
				</p>
			</section>

			<section class="prose__section" aria-labelledby="retour">
				<h2 id="retour">Retour d'information et contact</h2>
				<p>
					Si vous constatez un défaut d'accessibilité empêchant l'accès à un contenu ou une
					fonctionnalité du site, n'hésitez pas à nous écrire pour être orienté vers une alternative
					accessible ou obtenir le contenu sous une autre forme.
				</p>
				<dl>
					<dt>Courriel</dt>
					<dd>
						<a href="mailto:{ETABLISSEMENT.email}">
							{ETABLISSEMENT.email}
						</a>
					</dd>

					<dt>Téléphone</dt>
					<dd>
						{#each ETABLISSEMENT.telephones as phone, index (phone.intl)}
							<a href="tel:{phone.intl}">{phone.raw}</a>
							{#if index < ETABLISSEMENT.telephones.length - 1}
								/
							{/if}
						{/each}
					</dd>

					<dt>Adresse</dt>
					<dd>{ETABLISSEMENT.adresse.full}</dd>
				</dl>
			</section>

			<section class="prose__section" aria-labelledby="recours">
				<h2 id="recours">Voies de recours</h2>
				<p>
					Cette procédure est à utiliser dans le cas suivant&nbsp;: vous avez signalé au responsable
					du site internet un défaut d'accessibilité qui vous empêche d'accéder à un contenu ou à un
					service, et vous n'avez pas obtenu de réponse satisfaisante.
				</p>
				<p>Vous pouvez&nbsp;:</p>
				<ul>
					<li>
						écrire un message au Défenseur des droits&nbsp;:
						<a
							href="https://formulaire.defenseurdesdroits.fr"
							target="_blank"
							rel="noopener noreferrer"
						>
							formulaire.defenseurdesdroits.fr
						</a>,
					</li>
					<li>
						contacter le délégué du Défenseur des droits dans votre région&nbsp;:
						<a
							href="https://www.defenseurdesdroits.fr/saisir/delegues"
							target="_blank"
							rel="noopener noreferrer"
						>
							defenseurdesdroits.fr/saisir/delegues
						</a>,
					</li>
					<li>
						envoyer un courrier postal&nbsp;: Défenseur des droits, Libre réponse 71120, 75342 Paris
						CEDEX 07 (gratuit, sans timbre).
					</li>
				</ul>
			</section>
		</article>
	</div>
</section>
