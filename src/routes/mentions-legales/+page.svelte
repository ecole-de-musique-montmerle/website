<script lang="ts">
	import PageHero from '$lib/components/PageHero.svelte';
	import { ETABLISSEMENT } from '$lib/data/etablissement';
</script>

<svelte:head>
	<title>Mentions légales | École de Musique 3 Rivières</title>
	<meta
		name="description"
		content="Mentions légales du site de l'École de Musique 3 Rivières (AFDCM), association déclarée à Montmerle-sur-Saône."
	/>
	<meta name="robots" content="index, follow" />
</svelte:head>

<PageHero
	title="Mentions légales"
	lede="Identification de l'éditeur, hébergement et propriété intellectuelle, conformément à l'article 6 III de la loi pour la confiance dans l'économie numérique du 21 juin 2004."
/>

<section class="page-section page-section--light" aria-label="Contenu des mentions légales">
	<div class="container">
		<article class="prose">
			<p class="prose__updated">Mise à jour : 3 mai 2026</p>

			<section class="prose__section" aria-labelledby="editeur">
				<h2 id="editeur">Éditeur du site</h2>
				<p>
					Le site est édité par l'École de Musique 3 Rivières, association déclarée sous le nom
					AFDCM, conformément à la loi du 1er juillet 1901.
				</p>
				<dl>
					<dt>Nom</dt>
					<dd>{ETABLISSEMENT.nomLegal}</dd>

					<dt>Forme</dt>
					<dd>{ETABLISSEMENT.forme}</dd>

					<dt>Activité</dt>
					<dd>{ETABLISSEMENT.activite}</dd>

					<dt>Création</dt>
					<dd>{ETABLISSEMENT.creation}</dd>

					<dt>SIREN</dt>
					<dd>{ETABLISSEMENT.siren}</dd>

					<dt>SIRET</dt>
					<dd>{ETABLISSEMENT.siret}</dd>

					<dt>Siège</dt>
					<dd>{ETABLISSEMENT.adresse.full}</dd>

					<dt>Téléphone</dt>
					<dd>
						<a href="tel:{ETABLISSEMENT.telephone.intl}">{ETABLISSEMENT.telephone.raw}</a>
					</dd>

					<dt>Courriel</dt>
					<dd>
						<a href="mailto:{ETABLISSEMENT.email}">
							{ETABLISSEMENT.email}
						</a>
					</dd>

					<dt>Direction de publication</dt>
					<dd>{ETABLISSEMENT.direction.full}</dd>
				</dl>
			</section>

			<section class="prose__section" aria-labelledby="hebergement">
				<h2 id="hebergement">Hébergement</h2>
				<p>Le site est hébergé par GitHub, Inc. via le service GitHub Pages.</p>
				<dl>
					<dt>Raison sociale</dt>
					<dd>GitHub, Inc.</dd>

					<dt>Siège social</dt>
					<dd>88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, États-Unis</dd>

					<dt>Représentant UE</dt>
					<dd>GitHub B.V., Vijzelstraat 68-78, 1017 HL Amsterdam, Pays-Bas</dd>

					<dt>Site</dt>
					<dd>
						<a href="https://github.com" target="_blank" rel="noopener noreferrer"> github.com </a>
					</dd>

					<dt>Code source</dt>
					<dd>
						<a
							href="https://github.com/ecole-de-musique-montmerle/website"
							target="_blank"
							rel="noopener noreferrer"
						>
							github.com/ecole-de-musique-montmerle/website
						</a>
					</dd>
				</dl>
			</section>

			<section class="prose__section" aria-labelledby="propriete">
				<h2 id="propriete">Propriété intellectuelle</h2>
				<p>
					L'ensemble du contenu de ce site, notamment les textes éditoriaux, les photographies des
					élèves et de l'école, l'identité visuelle, les pictogrammes et le code source, est protégé
					par le droit d'auteur et le droit des bases de données.
				</p>
				<p>
					Toute reproduction, représentation, modification, publication ou adaptation de tout ou
					partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite
					sans autorisation écrite préalable de l'éditeur, sauf exception légale prévue par
					l'article L. 122-5 du code de la propriété intellectuelle.
				</p>
			</section>

			<section class="prose__section" aria-labelledby="liens">
				<h2 id="liens">Liens externes</h2>
				<p>
					Ce site peut renvoyer vers des ressources externes (réseaux sociaux, presse, partenaires
					institutionnels). L'éditeur n'exerce aucun contrôle sur le contenu de ces sites tiers et
					décline toute responsabilité quant à leur fonctionnement, leur contenu ou la disponibilité
					de leurs services.
				</p>
			</section>

			<section class="prose__section" aria-labelledby="contact">
				<h2 id="contact">Contact</h2>
				<p>
					Pour toute question relative à ces mentions légales ou au contenu du site, vous pouvez
					écrire à
					<a href="mailto:{ETABLISSEMENT.email}"> {ETABLISSEMENT.email} </a>
					ou téléphoner au
					<a href="tel:{ETABLISSEMENT.telephone.intl}">{ETABLISSEMENT.telephone.raw}</a>.
				</p>
			</section>
		</article>
	</div>
</section>
