import { atom } from "recoil";
import IProperties from "../interfaces/properties";

export const propertiesState = atom<IProperties[]>({
  key: 'propertiesState',
  default: [
    {
      id: 1,
      type: 'Office building',
      address: '123 Anywhere St.',
      price: '$789,000',
      image: 'https://media4.manhattan-institute.org/sites/default/files/how-parasites-poison-nyc-suburbs-property-tax-system.jpg'
    },
    {
      id: 2,
      type: 'Residential',
      address: '123 Anywhere St.',
      price: '$890,000',
      image: 'https://images.estately.net/171_ONE3503008_0_1694195412_636x435.jpg'

    },
    {
      id: 3,
      type: 'Residential',
      address: '123 Anywhere St.',
      price: '$910,000',
      image: 'https://lirp.cdn-website.com/0f21fa4a/dms3rep/multi/opt/Screen+Shot+2022-04-12+at+9.56.00+AM-640w.png'
    },
    {
      id: 4,
      type: 'Office building',
      address: '123 Anywhere St.',
      price: '$1009,000',
      image: 'https://img-v2.gtsstatic.net/reno/imagereader.aspx?imageurl=https%3A%2F%2Fsir.azureedge.net%2F1253i215%2F8e3yaw2f9s8j4g2b6sam4p1a06i215&option=N&h=472&permitphotoenlargement=false'
    },
  ]
})