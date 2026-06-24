export const NAV_ITEMS = [
  { id: 'accueil', label: 'Accueil', href: '#accueil' },
  { id: 'entrainements', label: 'Entraînements', href: '#entrainements' },
  { id: 'tarifs', label: 'Tarifs', href: '#tarifs' },
  { id: 'planning', label: 'Planning', href: '#planning' },
  { id: 'club', label: 'Le Club', href: '#club' },
] as const;

export const DISCIPLINES = [
  { n: 'P1', icon: 'ti ti-barbell', title: 'Force', text: "Préparation physique générale. Du fer, du volume, de la constance pour bâtir une base solide.", points: ['Force max', 'Hypertrophie', 'Gainage'] },
  { n: 'P2', icon: 'ti ti-heart-rate-monitor', title: 'Endurance', text: "Capacité cardio et résistance. Tenir l'effort, récupérer vite, durer dans la série.", points: ['Cardio', 'Circuit', 'Souffle'] },
  { n: 'P3', icon: 'ti ti-ripple', title: 'Ride', text: "Coaching surf spécialisé. Lecture de l'océan, condition spécifique, performance à l'eau.", points: ['Lecture vague', 'Rame', 'Pop-up'] },
];

export const BENEFITS = [
  { icon: 'ti ti-users', title: 'Petits groupes', text: "6 à 10 personnes par créneau. Chaque geste est corrigé, personne n'est laissé de côté." },
  { icon: 'ti ti-target', title: 'Suivi 1:1', text: 'Un accompagnement individuel pour les objectifs précis et la remise en forme ciblée.' },
  { icon: 'ti ti-ripple', title: 'Surf spécialisé', text: "Une prépa pensée pour l'eau : mobilité, équilibre, explosivité et lecture de l'océan." },
  { icon: 'ti ti-chart-line', title: 'Progression mesurée', text: 'Des points réguliers et des repères chiffrés pour voir, noir sur blanc, où tu avances.' },
];

export const PILLARS = [
  { n: '01', title: 'Force', text: 'Préparation physique générale. Du fer, du volume, de la constance.' },
  { n: '02', title: 'Glisse', text: "Coaching surf spécialisé. Lecture de l'océan, condition, performance." },
  { n: '03', title: 'Proximité', text: "Petits groupes et 1:1. Un suivi exigeant, jamais industriel." },
];

export const FORMATS = [
  { icon: 'ti ti-barbell', title: 'Prépa collective', text: 'Séances de préparation physique en petit groupe, programmées par cycle.', tags: ['60 min', 'Tous niveaux'] },
  { icon: 'ti ti-ripple', title: 'Coaching surf', text: "Sessions à l'eau encadrées, théorie et pratique selon la marée et la houle.", tags: ['90 min', 'Mer'] },
  { icon: 'ti ti-users', title: 'Petit groupe', text: 'Un format intermédiaire, 4 à 6 personnes, pour un suivi resserré.', tags: ['60 min', '4–6 pers.'] },
  { icon: 'ti ti-target', title: 'Suivi 1:1', text: 'Coaching individuel, programmation sur-mesure et bilans réguliers.', tags: ['Sur-mesure', 'Individuel'] },
];

export const METHOD_STEPS = [
  { n: '01', title: 'Évaluation', text: 'Bilan de départ : mobilité, force, condition, objectifs.' },
  { n: '02', title: 'Programmation', text: 'Un plan clair par cycle, prépa et surf coordonnés.' },
  { n: '03', title: 'Exécution', text: "Des séances cadrées, du geste corrigé, de l'intensité juste." },
  { n: '04', title: 'Progression', text: 'On mesure, on ajuste, on remonte le curseur.' },
];

export interface Tier {
  name: string;
  price: string;
  unit: string;
  period: string;
  note: string;
  cta: string;
  featured: boolean;
  features: string[];
}

export const TIERS: Tier[] = [
  { name: "Séance à l'unité", price: '25', unit: '€', period: 'la séance', note: 'Pour tester ou pratiquer à la carte.', cta: 'Réserver', featured: false, features: ['1 séance prépa ou surf', 'Sans engagement', 'Matériel fourni', 'Réservation en ligne'] },
  { name: 'Carnet 10', price: '220', unit: '€', period: 'soit 22€ / séance', note: 'Le bon rythme pour progresser sur la durée.', cta: 'Choisir le carnet', featured: true, features: ['10 séances au choix', 'Valable 4 mois', 'Prépa physique + surf', 'Suivi de progression'] },
  { name: 'Carnet 20', price: '400', unit: '€', period: 'soit 20€ / séance', note: 'Pour les pratiquants réguliers.', cta: 'Choisir le carnet', featured: false, features: ['20 séances au choix', 'Valable 8 mois', 'Accès prioritaire', 'Bilan trimestriel'] },
  { name: 'Abonnement annuel', price: '1290', unit: '€', period: 'par an · illimité', note: "L'engagement complet, toute l'année.", cta: 'Rejoindre le club', featured: false, features: ['Séances illimitées', 'Prépa + surf + mobilité', 'Suivi 1:1 mensuel', 'Événements club inclus'] },
];

export const HOME_TIERS = [TIERS[0], TIERS[1], TIERS[3]];

export const FAQ = [
  { n: '01', q: 'Faut-il déjà savoir surfer ?', a: "Non. Les créneaux Ride sont adaptés au niveau — du premier pop-up à la performance. La prépa physique se fait sans pré-requis." },
  { n: '02', q: 'Comment réserver une séance ?', a: "Chaque créneau se réserve en ligne. Les places sont limitées par groupe, on conseille de réserver à l'avance." },
  { n: '03', q: 'Les carnets ont-ils une durée de validité ?', a: "Oui : 4 mois pour le carnet 10, 8 mois pour le carnet 20. De quoi pratiquer à ton rythme sans pression." },
  { n: '04', q: 'Le matériel est-il fourni ?', a: "Le matériel de prépa physique est fourni. Pour le surf, une combinaison et une planche peuvent être prêtées sur demande." },
];

export const GALLERY_URLS = [
  'https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=500&q=70',
  'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=500&q=70',
  'https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=500&q=70',
  'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=500&q=70',
  'https://images.unsplash.com/photo-1486218119243-13883505764c?auto=format&fit=crop&w=500&q=70',
  'https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=500&q=70',
];

export const STATS = [
  { value: '6–10', label: 'Par groupe' },
  { value: '5', label: 'Créneaux / jour' },
  { value: '43.7°', label: 'Nord · Landes' },
  { value: '2', label: 'Disciplines' },
];

export const COACH = {
  name: 'Nom du coach',
  role: 'Fondateur · prépa physique & coaching surf',
  img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=900&q=72',
  quote: "Placeholder — une phrase signature du coach : sa devise, sa vision de l'entraînement et de l'océan.",
  bio1: "Placeholder — présentez ici le parcours du coach : son histoire avec l'océan, ses certifications et ce qui l'a amené à fonder le club.",
  bio2: "Placeholder — un second paragraphe sur sa pédagogie, sa philosophie de l'entraînement et la relation de proximité qu'il entretient avec chaque pratiquant.",
  specialties: ['Préparation physique', 'Coaching surf', 'Mobilité & récupération', 'Suivi individualisé'],
};

export const CONTACT = [
  { icon: 'ti ti-map-pin', label: 'Adresse', value: 'À compléter · Les Landes (40)' },
  { icon: 'ti ti-mail', label: 'Email', value: 'contact@clubferlandes.fr' },
  { icon: 'ti ti-phone', label: 'Téléphone', value: '+33 (0)5 00 00 00 00' },
  { icon: 'ti ti-clock', label: 'Horaires', value: 'Lun–Sam · 07h00 – 20h30' },
];

export const DAYS = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'];

export const LEGEND = [
  { label: 'Force', color: '#0F5C70' },
  { label: 'Endurance', color: '#2C3C44' },
  { label: 'Ride · surf', color: '#33A7B4' },
  { label: 'Mobilité', color: '#C6A877' },
];

export type CellType = 'Force' | 'Endurance' | 'Ride' | 'Mobilité';

export type Cell =
  | { filled: false }
  | { filled: true; label: string; type: CellType; coach: string };

export interface PlanningRow {
  time: string;
  cells: Cell[];
}

const c = (label: string, type: CellType, coach: string): Cell => ({ filled: true, label, type, coach });
const E: Cell = { filled: false };

export const PLANNING_ROWS: PlanningRow[] = [
  { time: '07:00', cells: [c('Force', 'Force', 'Prépa'), E, c('Force', 'Force', 'Prépa'), E, c('Force', 'Force', 'Prépa'), c('Ride', 'Ride', 'Surf')] },
  { time: '09:30', cells: [E, c('Endurance', 'Endurance', 'Cardio'), E, c('Endurance', 'Endurance', 'Cardio'), E, c('Force', 'Force', 'Prépa')] },
  { time: '12:15', cells: [c('Mobilité', 'Mobilité', 'Express'), E, c('Mobilité', 'Mobilité', 'Express'), E, c('Mobilité', 'Mobilité', 'Express'), E] },
  { time: '17:30', cells: [E, c('Ride', 'Ride', 'Surf'), E, c('Ride', 'Ride', 'Surf'), E, c('Ride', 'Ride', 'Surf')] },
  { time: '19:00', cells: [c('Endurance', 'Endurance', 'Circuit'), E, c('Force', 'Force', 'Prépa'), E, c('Endurance', 'Endurance', 'Circuit'), E] },
];

export const CELL_BG: Record<CellType, { bg: string; color: string }> = {
  Force:     { bg: '#0F5C70', color: '#F0F3F3' },
  Endurance: { bg: '#2C3C44', color: '#F0F3F3' },
  Ride:      { bg: '#33A7B4', color: '#0B1216' },
  Mobilité:  { bg: '#C6A877', color: '#0B1216' },
};
