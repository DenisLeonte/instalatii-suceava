/**
 * Real completed work.
 *
 * The descriptions here are still thin — "Montaj și racordare completă" proves
 * nothing to a visitor comparing three plumbers. The agreed case-study format
 * (problem → solution → materials → duration → constraint → result, with an
 * approximate location) needs first-hand detail from Cătălin and cannot be
 * written without him. Titles and categories are accurate as they stand.
 *
 * Deliberately absent: the former "Sistem de devigraj" entry. It was a
 * misspelling of *dedurizare* (water softener) and was the only item with no
 * photograph, so it rendered a "Fotografie în curând" placeholder. It returns
 * when there is a real picture of it.
 */
import type { ImageMetadata } from 'astro';

import cada from '../assets/cada_1.png';
import dus from '../assets/dus_1.png';
import sanitar from '../assets/sanitar_1.jpg';
import calorifer from '../assets/calorifer_1.png';
import centrala from '../assets/centrala_1.png';
import centralaElectrica from '../assets/centrala_2.png';
import pardoseala from '../assets/pardoseala.png';
import ac1 from '../assets/aer_conditionat_1.png';
import ac2 from '../assets/aer_conditionat_2.png';
import ventilatie from '../assets/ventilatie_1.png';

export type Category = 'sanitare' | 'termice' | 'climatizare';

export interface Project {
  id: string;
  category: Category;
  title: string;
  desc: string;
  image: ImageMetadata;
  /** Shown on the homepage proof section. */
  featured?: boolean;
}

export const categoryLabels: Record<Category, string> = {
  sanitare: 'Sanitare',
  termice: 'Termice',
  climatizare: 'Climatizare',
};

export const projects: Project[] = [
  {
    id: 'cada',
    category: 'sanitare',
    title: 'Cadă de baie',
    desc: 'Montaj și racordare completă',
    image: cada,
    featured: true,
  },
  {
    id: 'dus',
    category: 'sanitare',
    title: 'Cabină de duș',
    desc: 'Instalație sanitară modernă',
    image: dus,
  },
  {
    id: 'distributie-sanitara',
    category: 'sanitare',
    title: 'Instalație sanitară',
    desc: 'Trasee de apă rece și caldă',
    image: sanitar,
  },
  {
    id: 'calorifer',
    category: 'termice',
    title: 'Calorifer panou',
    desc: 'Montaj radiatoare din oțel',
    image: calorifer,
  },
  {
    id: 'centrala',
    category: 'termice',
    title: 'Centrală termică',
    desc: 'Montaj și racordare hidraulică',
    image: centrala,
    featured: true,
  },
  {
    id: 'pardoseala',
    category: 'termice',
    title: 'Încălzire în pardoseală',
    desc: 'Sistem complet montat în șapă',
    image: pardoseala,
    featured: true,
  },
  {
    id: 'centrala-electrica',
    category: 'termice',
    title: 'Centrală termică electrică',
    desc: 'Montaj și punere în funcțiune',
    image: centralaElectrica,
  },
  {
    id: 'ac-split',
    category: 'climatizare',
    title: 'Aer condiționat split',
    desc: 'Montaj unitate interioară',
    image: ac1,
  },
  {
    id: 'ac-rezidential',
    category: 'climatizare',
    title: 'Sistem AC rezidențial',
    desc: 'Instalație completă de apartament',
    image: ac2,
  },
  {
    id: 'ventilatie',
    category: 'climatizare',
    title: 'Sistem de ventilație',
    desc: 'Ventilație cu recuperare de căldură',
    image: ventilatie,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
