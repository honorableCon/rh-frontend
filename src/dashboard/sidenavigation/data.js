import EventsIcon from './icons/events';
import GuidesIcon from './icons/guides';
import MessagesIcon from './icons/messages';
import PicturesIcon from './icons/pictures';
import DocumentsIcon from './icons/documents';
import StatisticsIcon from './icons/statistics';

const data = [
  {
    section: 'Documents',
    icon: <DocumentsIcon />,
    content: [
    ],
  },
  {
    section: 'Statistiques',
    icon: <StatisticsIcon />,
    content: [
      {
        title: 'Effectif',
        link: '/effectifs',
      },
    ],
  },
  {
    section: 'Personnels',
    icon: <DocumentsIcon />,
    content: [
      {
        title: 'Lister le personnel',
        link: '/personnels/listes',
      },
      {
        title: 'Ajouter un employé',
        link: '/personnels/ajouter',
      },
      {
        title: 'Changer de statut',
        link: '/personnels/changement',
      },
      {
        title: 'Enregistrer un départ',
        link: '/personnels/depart',
      },
    ],
  },
  {
    section: 'Messages',
    icon: <MessagesIcon />,
    content: [
      {
        title: 'Unbox',
        link: '/messages/unbox',
      },
      {
        title: 'Unread',
        link: '/messages/unread',
      },
      {
        title: 'Archived',
        link: '/messages/archived',
      },
    ],
  },
  {
    section: 'Pictures',
    icon: <PicturesIcon />,
    content: [
      {
        title: 'Vacations',
        link: '/pictures/vacations',
      },
      {
        title: 'Anniversary',
        link: '/pictures/anniversary',
      },
      {
        title: 'University',
        link: '/pictures/university',
      },
    ],
  },
  {
    section: 'Events',
    icon: <EventsIcon />,
    content: [
      {
        title: 'Weddings',
        link: '/events/weddings',
      },
      {
        title: 'Networking',
        link: '/events/networking',
      },
    ],
  },
  {
    section: 'Guides',
    icon: <GuidesIcon />,
    content: [
      {
        title: 'Documentation',
        link: '/guides/documentation',
      },
    ],
  },
];

export default data;
