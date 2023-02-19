import rejuvenescerBG from '../../../Assets/img/rejuvenescerBG.png'
import dogsBG from '../../../Assets/img/dogsBG.png'
import odontogenericBG from '../../../Assets/img/odontogenericBG.png'

const projects = [
    {
        id: '01',
        title: "Espaço Rejuvenscer",
        description: "Projeto desenvolvido em React, conta com a utilização do Tailwind. Ainda foi utilizado a técnica de Loading On Scroll.",
        image: rejuvenescerBG,
        url: "https://espacorejuvenescer.com/",
        github: "https://github.com/Nazareth98/rejuvenescer",
        orientation: "left"
    },
    {
        id: '02',
        title: "Dogs - Rede Social",
        description: "Esse é o projeto final do curso ReactJS Completo com Hooks desenvolvido pela Origamid.",
        image: dogsBG,
        url: "https://patricknazareth-dogs.netlify.app/",
        github: "https://github.com/Nazareth98/dogs-origamid-ReactJS",
        orientation: "right"
    },
    {
        id: '03',
        title: "Odonto Generic",
        description: "O intuito do projeto era evoluir as práticas utilizadas no primeiro projeto em destaque.",
        image: odontogenericBG,
        url: "https://patricknazareth-odonto.netlify.app/",
        github: "https://github.com/Nazareth98/odonto_protese",
        orientation: "left"
    }
]

export default projects