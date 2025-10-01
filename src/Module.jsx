import React, { useState } from 'react';
import './App.css';

// À compléter avec les données du HTML pour les points et modales
const points = [
  {
    point: 1,
    category: 'errors',
    title: 'Les animations: click(objet)>Animer',
    text: "Trop d'animations peuvent distraire et ralentir votre design. Limitez-vous à 2-3 animations par page pour un impact maximal.",
    textModal:
      "Les animations excessives peuvent surcharger visuellement votre design et distraire l'utilisateur du contenu principal.<br> Elles peuvent également ralentir le chargement de votre page et affecter les performances.<br><br> Limitez-vous à 2-3 animations stratégiquement placées pour mettre en valeur les éléments importants.<br><br> Rappelez-vous que chaque animation doit avoir un objectif précis et apporter une valeur ajoutée à l'expérience utilisateur.",

    demo: <div className="demo-element demo-fade "></div>,
  },
  {
    point: 2,
    category: 'features',
    title: 'Les transitions: click(entre les pages du carroussel)',
    text: 'Une animation trop rapide passe inaperçue, trop lente devient ennuyeuse. Visez 0.3-0.5s pour les transitions et 1-2s pour les animations.',
    textModal:
      "Le timing est crucial pour des transitions efficaces.<br> Une transition trop rapide peut passer inaperçue, tandis qu'une animation trop lente peut frustrer l'utilisateur et ralentir l'interaction.<br><br><b> Pour les transitions d'interface (site web), visez 0.3-0.5 secondes.</b><br><br><b> Pour les animations narratives ou qui attirent l'attention, 1-2 secondes est généralement idéal.</b><br><br> Testez toujours vos animations avec différents utilisateurs pour trouver le timing optimal.",

    demo: <div className="demo-element demo-slide"></div>,
  },
  {
    point: 3,
    category: 'errors',
    title: "Attention aux conflits d'animation",
    text: "Évitez d'appliquer plusieurs animations contradictoires au même élément, ce qui peut créer des comportements imprévisibles.",
    demo: <div className="demo-element demo-bounce"></div>,
    textModal:
      "Appliquer plusieurs animations contradictoires au même élément peut créer des comportements imprévisibles et des effets visuels désagréables.<br><br> Par exemple, ne combinez pas une animation de rotation avec un changement de taille sur le même élément.<br><br> Si vous devez utiliser plusieurs animations, assurez-vous qu'elles sont complémentaires et qu'elles s'exécutent soit en séquence, soit en harmonie.<br><br> Testez toujours le résultat final pour vous assurer que les animations ne se perturbent pas mutuellement.",
  },
  {
    point: 4,
    category: 'features',
    title: "Utilisez l'IA MAGIC de Canva",
    text: "C'est un assistant conçu pour aider à utiliser Canva. Il explique les fonctionnalités, guide dans l'édition et répond aux questions pour rendre la création encore plus simple et agréable ! 😊.",
    textModal:
      "Point 4: Utilisez l'IA Magic Canva pour booster votre créativité.<br><br>Cet assistant est là pour accompagner les utilisateurs de Canva dans leurs créations.<br><br> Il peut Expliquer comment utiliser les fonctionnalités disponibles sur Canva.<br><br> Donner des conseils pour améliorer les designs, comme choisir les bonnes couleurs ou polices.Guider dans l'édition des designs pour les rendre plus percutants.Aider à naviguer dans l'interface Canva, que ce soit sur la page d'accueil ou dans l'éditeur.<br><br> Fournir des astuces pour organiser et personnaliser les projets.<br><br> Répondre aux questions sur les outils gratuits accessibles avec un abonnement Free.<br><br> Partager des idées pour créer des designs uniques et attrayants.<br><br> Inspirer et motiver à explorer toutes les possibilités créatives de Canva !",
    demo: (
      <img
        style={{
          borderRadius: '20px',
        }}
        src="https://canva-cias-sud-minervois.github.io/README.md/img/Image 20-6-25 à 14.26.jpg"
        alt="Logo"
        width="80%"
      />
    ),
  },
  {
    point: 5,
    category: 'errors',
    title: "Ne négligez pas l'accessibilité",
    text: 'Certains utilisateurs peuvent être sensibles aux mouvements. Offrez toujours une option pour réduire les animations ou les désactiver.',
    textModal:
      "Certains utilisateurs peuvent souffrir de troubles vestibulaires, de migraines ou d'autres conditions qui rendent les animations désagréables, voire douloureuses.<br><br> Respectez la préférence 'prefers-reduced-motion' du système d'exploitation et offrez toujours une option pour réduire ou désactiver complètement les animations.<br><br> Cela peut être aussi simple qu'un bouton dans les paramètres ou une détection automatique des préférences utilisateur.<br><br> L'accessibilité n'est pas une option, c'est une nécessité pour un design inclusif.",

    demo: (
      <div className="bg-gray-100 p-4 rounded-lg">
        <label className="inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            value=""
            className="sr-only peer"
            id="reduce-motion"
          />
          <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
          <span className="ml-3 text-sm font-medium text-gray-900">
            Réduire les animations
          </span>
        </label>
      </div>
    ),
  },
  {
    point: 6,
    category: 'features',
    title: 'Animations réactives (Pour sites web)',
    text: 'Utilisez les animations pour donner un retour visuel aux interactions utilisateur, comme les survols et les clics.',
    textModal:
      "Les animations réactives fournissent un retour visuel immédiat aux actions de l'utilisateur, améliorant ainsi l'expérience d'interaction.<br><br> Utilisez des animations subtiles pour confirmer les clics de bouton, les survols, les sélections ou les soumissions de formulaire.<br><br> Ces micro-interactions créent une sensation de réactivité et d'engagement.<br><br> Par exemple, un léger changement d'échelle ou de couleur au survol d'un bouton, ou une animation de chargement pendant le traitement d'une action, aide l'utilisateur à comprendre que son action a été reconnue.",

    demo: (
      <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 hover:scale-105">
        Survolez-moi
      </button>
    ),
  },
  {
    point: 7,
    category: 'errors',
    title: 'Évitez les animations qui bloquent',
    text: "Ne forcez pas l'utilisateur à attendre la fin d'une animation pour interagir avec votre contenu. Privilégiez les animations non bloquantes.",
    textModal:
      "Les animations qui empêchent l'utilisateur d'interagir avec votre contenu peuvent être extrêmement frustrantes.<br><br> Ne forcez jamais l'utilisateur à attendre la fin d'une animation avant de pouvoir continuer à naviguer ou à interagir.<br><br> Les animations d'introduction, les transitions de page ou les effets visuels ne devraient pas bloquer l'interaction.<br><br> Assurez-vous que les utilisateurs peuvent toujours cliquer, faire défiler ou naviguer pendant que les animations sont en cours.<br><br> Si une animation doit être bloquante (comme un chargement), assurez-vous qu'elle est aussi courte que possible.",

    demo: <div className="demo-element demo-pulse"></div>,
  },
  {
    point: 8,
    category: 'features',
    title: 'Animations séquentielles: click(Diaporama)>Modifier la durée',
    text: 'Créez un effet de cascade en décalant légèrement le début des animations pour plusieurs éléments similaires.',
    textModal:
      "Les animations séquentielles créent un effet de cascade en décalant légèrement le début des animations pour plusieurs éléments similaires.<br><br> Cette technique est particulièrement efficace pour les listes, les menus ou les grilles d'éléments.<br><br> Au lieu d'animer tous les éléments simultanément, introduisez un léger délai entre chaque élément (généralement 50-100ms).<br><br> Cela crée un mouvement fluide et dirigé qui guide naturellement l'œil de l'utilisateur et rend l'interface plus dynamique et organisée.",

    demo: (
      <div className="flex justify-center space-x-2">
        <img
          style={{
            borderRadius: '20px',
          }}
          src="https://canva-cias-sud-minervois.github.io/README.md/img/Capture d’écran 2025-06-19 à 23.34.41.png"
          alt="Logo"
          width="80%"
        />
        <div
          className="w-4 h-16 bg-purple-600 animate-bounce"
          style={{ animationDelay: '0s' }}
        ></div>
        <div
          className="w-4 h-16 bg-purple-500 animate-bounce"
          style={{ animationDelay: '0.2s' }}
        ></div>
        <div
          className="w-4 h-16 bg-purple-400 animate-bounce"
          style={{ animationDelay: '0.4s' }}
        ></div>
        <div
          className="w-4 h-16 bg-purple-300 animate-bounce"
          style={{ animationDelay: '0.6s' }}
        ></div>
        <div
          className="w-4 h-16 bg-purple-200 animate-bounce"
          style={{ animationDelay: '0.8s' }}
        ></div>
      </div>
    ),
  },
  {
    point: 9,
    category: 'errors',
    title: 'Attention aux performances',
    text: 'Les animations complexes peuvent ralentir votre diaporama en ligne ou site. Privilégiez la répétitions de mêmes animations.',
    textModal:
      "Les animations complexes ou mal optimisées peuvent considérablement ralentir votre projet en ligne, surtout sur les appareils mobiles ou moins puissants.<br><br> Évitez d'animer des propriétés comme 'width', 'height', 'margin' ou 'padding' qui déclenchent des recalculs coûteux de la mise en page.<br><br> Limitez également le nombre d'éléments animés simultanément et testez toujours vos animations sur différents appareils pour vous assurer qu'elles restent fluides.",

    demo: (
      <div className="bg-gray-100 p-4 rounded-lg">
        <div className="text-green-600 font-medium">✓ transform, opacity</div>
        <div className="text-red-600 font-medium">✗ width, height, margin</div>
      </div>
    ),
  },
  {
    point: 10,
    category: 'features',
    title: 'Animations avec un objectif',
    text: "Chaque animation doit avoir un but : guider l'attention, expliquer une relation, ou donner un retour. N'animez jamais sans raison.",
    textModal:
      "Chaque animation dans votre design doit avoir un objectif clair et apporter une valeur ajoutée à l'expérience utilisateur.<br><br> Les animations peuvent servir à guider l'attention vers des éléments importants, à expliquer des relations entre différents contenus, à fournir un retour sur les actions de l'utilisateur, ou à ajouter de la personnalité à votre marque.<br><br> Avant d'ajouter une animation, demandez-vous toujours : 'Quel est l'objectif de cette animation?' et 'Comment améliore-t-elle l'expérience utilisateur?' Si vous ne pouvez pas répondre clairement à ces questions, l'animation est probablement superflue.",

    demo: (
      <div className="relative h-20 bg-gray-100 rounded-lg overflow-hidden">
        <div
          className="absolute inset-0 flex items-center justify-center opacity-0 bg-purple-600 text-white font-bold text-lg animate-pulse"
          style={{
            animation: 'fadeIn 3s infinite alternate',
            color: ' #ff5757',
          }}
        >
          ATTENTION ICI
        </div>
      </div>
    ),
  },
];

export default function Module({ onTabChange, activeTab }) {
  const [modal, setModal] = useState(null);

  const filteredPoints = points.filter(
    (pt) => activeTab === 'all' || pt.category === activeTab
  );

  const handleTab = (tab) => {
    onTabChange(tab);
    setMobileOpen(false);
  };

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 100, // Adjust for menu height
          behavior: 'smooth',
        });
      }
    });
  });

  return (
    <div className="min-h-screen">
      <div id="erreurs"></div>
      <div id="fonctionnalites"></div>
      {/* Header */}
      <header className="text-white py-4 px-4 text-center">
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <p
            className="z-index: 8; text-xl md:text-2xl max-w-3xl mx-auto"
            style={{
              background: 'linear-gradient(135deg, #00c4cc 0%, #232a65 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textAlign: 'center',
            }}
          >
            10 points essentiels pour maîtriser les animations comme un pro
            Canva
          </p>
        </div>
      </header>
      <br />
      <br />
      <br />
      {/* Tabs */}
      <div className="flex flex-wrap justify-center mb-12">
        <button
          className={`tab px-6 py-3 rounded-full font-medium mx-2 mb-2${
            activeTab === 'all' ? ' active' : ''
          }`}
          onClick={() => handleTab('all')}
        >
          Tous les points
        </button>
        <button
          className={`tab px-6 py-3 rounded-full font-medium mx-2 mb-2${
            activeTab === 'features' ? ' active' : ''
          }`}
          onClick={() => handleTab('features')}
        >
          Fonctionnalités
        </button>
        <button
          className={`tab px-6 py-3 rounded-full font-medium mx-2 mb-2${
            activeTab === 'errors' ? ' active' : ''
          }`}
          onClick={() => handleTab('errors')}
        >
          Erreurs courantes
        </button>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 transition-all">
        {filteredPoints.map((pt) => (
          <div
            key={pt.point}
            className="card bg-white rounded-xl p-6 shadow-lg"
            data-category={pt.category}
            data-point={pt.point}
            onClick={() => setModal(pt.point)}
            style={{ cursor: 'pointer' }}
          >
            <div className="flex items-start mb-4">
              <span className="point-number text-5xl font-bold mr-4">
                {pt.point}
              </span>
              <h3 className="text-xl font-semibold mt-2">{pt.title}</h3>
            </div>
            <p className="text-gray-700 mb-4">{pt.text}</p>
            <div className="animation-demo bg-gray-100">{pt.demo}</div>
          </div>
        ))}
      </div>

      {/* Ressources */}

      <div id="ressources" className="mt-20 bg-white rounded-xl p-8 shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-center">Ressources</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 border border-purple-200 rounded-lg hover:border-purple-500 transition-all">
            <h3 className="font-semibold mb-2">Themes gratuits</h3>
            <p className="text-gray-600 mb-3">
              Découvrez des templates prêts à l'emploi pour vos projets.
            </p>
            <a
              href="https://www.canva.com/templates/EAGRwIu73fE/"
              className="text-purple-600 hover:underline"
            >
              Diaporama 1 →
            </a>
            <br />
            <a
              href="https://www.canva.com/templates/EAGDUG-yLt0/"
              className="text-purple-600 hover:underline"
            >
              Diaporama 2 →
            </a>
            <br />
            <a
              href="https://www.canva.com/fr_fr/modeles/EAFbDBridiU-doc-bilan-trimestriel-de-la-strategie-marketing-geometrique-en-violet-pastel/"
              className="text-purple-600 hover:underline"
            >
              Doc 1 →
            </a>
            <br />
            <a
              href="https://www.canva.com/templates/EAF0Zhs8PKY-contractor-invoice-professional-doc-in-black-and-white-grey-bare-minimal-style/"
              className="text-purple-600 hover:underline"
            >
              Doc 2 →
            </a>
            <br />
            <a
              href="https://www.canva.com/templates/EAGVsjUP19Q-project-proposal-in-green-simple-and-minimal-style/"
              className="text-purple-600 hover:underline"
            >
              Doc 3 →
            </a>
            <br />
            <a
              href="https://www.canva.com/templates/EAEk4rbZ1UA-teal-friendly-professional-general-proposal/"
              className="text-purple-600 hover:underline"
            >
              Doc 4 →
            </a>
          </div>
          <div className="p-4 border border-purple-200 rounded-lg hover:border-purple-500 transition-all">
            <h3 className="font-semibold mb-2">Images</h3>
            <p className="text-gray-600 mb-3">
              Téléchargez des modèles de personnages prêts à personnaliser.
            </p>
            <a
              href="https://blush.design/collections/hands"
              className="text-purple-600 hover:underline"
            >
              Les mains →
            </a>
            <br />
            <a
              href="https://blush.design/collections/humaaans"
              className="text-purple-600 hover:underline"
            >
              Les humains →
            </a>
            <br />
            <a
              href="https://blush.design/collections/lifesavers"
              className="text-purple-600 hover:underline"
            >
              Personnages en dessin →
            </a>
            <br />
            <a
              href="https://blush.design/collections/open-peeps"
              className="text-purple-600 hover:underline"
            >
              Personnages en dessin 2 →
            </a>
          </div>
          <div
            className="p-4 border border-purple-200 rounded-lg hover:border-purple-500 transition-all"
            style={{ backgroundColor: '#f7eeff' }}
          >
            <h3 className="font-semibold mb-2">Mini-Guide IA Canva</h3>
            <p className="text-gray-600 mb-3">
              Découvrez les 3 fonctionnalités essentielles de l'IA Canva pour
              transformer votre créativité
            </p>
            <a
              href="./canva-ia.html"
              className="text-purple-600 hover:underline"
            >
              Voir fonctionnalites →
            </a>
          </div>
        </div>
      </div>

      {/* Formulaire de contact */}
      <div id="contact" className="formulaire">
        <form
          className="max-w-lg mx-auto"
          onSubmit={(e) => {
            e.preventDefault();
            alert(
              'Merci pour votre message! Notre équipe vous contactera bientôt.'
            );
            e.target.reset();
          }}
        >
          <div className="text-center">
            <button
              type="submit"
              className="canva-gradient text-white font-medium py-2 px-6 rounded-lg shadow hover:shadow-lg transition-all"
            >
              Envoyer
            </button>
          </div>
        </form>
      </div>

      {/* Conclusion */}
      <div className="formulaire">
        <h2 className="text-2xl font-bold mb-4">
          Prêt à créer des animations impressionnantes?
        </h2>
        <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
          Suivez ces 10 conseils pour créer des animations professionnelles qui
          améliorent l'expérience utilisateur sans jamais la perturber.
        </p>
        <button className="canva-gradient text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
          <a href="https://www.canva.com"> Commencer à animer</a>
        </button>
      </div>

      {/* Modal */}
      {modal && (
        <div
          className="modal-overlay active"
          onClick={(e) => {
            if (e.target.classList.contains('modal-overlay')) setModal(null);
          }}
        >
          <div className="modal-container">
            <div className="modal-image">
              {/* Ici, vous pouvez intégrer le SVG ou l'image du point sélectionné si besoin */}
              {points.find((pt) => pt.point === modal)?.demo}
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">
                {points.find((pt) => pt.point === modal)?.title}
              </h2>

              <p
                className="text-gray-700 mb-6"
                dangerouslySetInnerHTML={{
                  __html: points.find((pt) => pt.point === modal)?.textModal,
                }}
              ></p>

              <div className="flex justify-end">
                <button
                  className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-6 rounded-lg transition-all "
                  onClick={() => setModal(null)}
                >
                  Fermer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* StackBlitz embed */}
      <div id="elementOrId" style={{ margin: '40px auto', maxWidth: 90 }}></div>
    </div>
  );
}
