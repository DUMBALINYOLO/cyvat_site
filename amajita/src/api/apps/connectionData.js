import imgApi from '../images/photos';
import avatarApi from '../images/avatars';
import one from '../images/one.png';
import anz from './images/anz.jpg';
import gift from './images/gift.jpg';
import isra from './images/isra.jpg';
import lin from './images/lin.jpg';
import min from './images/min.jpg';
import pyil from './images/pyil.jpg';


const connectionData = [
  {
    cover: one,
    avatar: avatarApi[6],
    name: 'MECK SIBANDA',
    title: 'DIRECTOR',
    connection: 203,
    verified: false
  },

  {
    cover: isra,
    avatar: avatarApi[2],
    name: 'ISRAEL NKOMO',
    title: 'SENIOR FIELD OFFICER',
    connection: 10,
    verified: true
  },
  {
    cover: lin,
    avatar: avatarApi[7],
    name: 'LEON DUBE',
    title: 'FIELD OFFICER',
    connection: 18,
    verified: false
  },
  {
    cover: min,
    avatar: avatarApi[10],
    name: 'MINENHLE MUTEMANI',
    title: 'FINANCE & ADMINSTRATION',
    connection: 6,
    verified: true
  },
  {
    cover: anz,
    avatar: avatarApi[5],
    name: 'ANELE AUXILIA MASINA',
    title: 'FIELD OFFICER',
    connection: 18,
    verified: false
  },
  {
    cover: gift,
    avatar: avatarApi[1],
    name: 'GIFT NJAYA',
    title: 'FIELD OFFICER',
    connection: 100,
    verified: true
  },
  {
    cover: pyil,
    avatar: avatarApi[9],
    name: 'PRESENT DUBE',
    title: 'FIELD OFFICER',
    connection: 20,
    verified: true
  },
  
];

export default connectionData;
