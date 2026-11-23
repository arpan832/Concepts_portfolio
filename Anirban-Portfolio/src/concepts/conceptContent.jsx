import anirbanIntroduction from '../../anirbancharacter.md?raw'
import anirbanPortraito from '../assets/anirbanreal-portrait.jpeg'
import collabs from '../assets/collabs.jpeg'
import btsVideo from '../assets/media/reels/bts.mp4'
import showreel from '../assets/media/reels/showreel.mp4'
const aboutCopy = anirbanIntroduction.trim()

export const mediaSources = {
  // Add the reel video path here, for example: '/media/reels/showreel.mp4'.
  portrait: anirbanPortraito,
  reel: showreel,
  bts: btsVideo,
  collaboration: collabs,
}

export const conceptContent = {
  noir: { title: 'Cinematic Noir — Anirban.Creats', hero: { kicker: 'Cinematic Noir / Photographer', title: <>Make Every <br /><em>Frame</em> Cinematic.</>, copy: 'A dark, gallery-first portfolio direction shaped around mood, negative space and the pause before a photograph reveals itself.' }, about: { kicker: '02 / About me', title: <>Looking for<br /><em>the feeling.</em></>, copy: aboutCopy }, why: { kicker: '03 / Why choose me', title: <>Stories with<br /><em>something left.</em></>, copy: 'A flexible space for the proof of the practice — movement, process and the people the work has met along the way.' }, contact: 'Let’s make room for feeling.' },
  atelier: { title: 'Editorial Atelier — Anirban.Creats', hero: { kicker: 'The Atelier / Photographer', title: <>A slower<br /><em>way</em> of looking.</>, copy: 'An editorial direction where photographs sit alongside fragments, observations and the texture of the person behind them.' }, about: { kicker: '02 / About me', title: <>A practice of<br /><em>attention.</em></>, copy: aboutCopy }, why: { kicker: '03 / Why choose me', title: <>The work<br /><em>in context.</em></>, copy: 'An editorial index for the moving parts of the practice: reels, behind-the-scenes moments and collaborations that give the images their wider story.' }, contact: 'Let’s make something lasting.' },
  motion: { title: 'Experimental Motion — Anirban.Creats', hero: { kicker: 'Experimental Motion / Photographer', title: <>See<br /><span>what</span><br />moves.</>, copy: 'A high-energy digital direction for images that want to interrupt, overlap and keep the eye moving.' }, about: { kicker: '02 / About me', title: <>Make the<br /><span>frame react.</span></>, copy: aboutCopy }, why: { kicker: '03 / Why choose me', title: <>Proof of<br /><span>the energy.</span></>, copy: 'A live-feeling index for reels, BTS and collaborations — the material that shows how an image begins, moves and becomes part of a bigger idea.' }, contact: 'Bring the raw material.' },
}

export const mediaItems = [
  { type: 'reel', label: 'Reels', detail: 'Motion / selected edits', icon: '▶', src: mediaSources.reel, mediaType: 'video', rotate: true },
  { type: 'bts', label: 'Behind the scenes', detail: 'Process / in the room', icon: '◉', src: mediaSources.bts, mediaType: 'video', rotate: false },
  { type: 'collaboration', label: 'Collaborations', detail: 'People / shared work', icon: '↗', src: mediaSources.collaboration, mediaType: 'image' },
]

