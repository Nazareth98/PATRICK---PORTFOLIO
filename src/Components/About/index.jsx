import '../../Styles/Components/about.scss'
import React from 'react'
import SectionHeader from '../Components/SectionHeader/index'
import imgAbout from '../../Assets/img/imgAbout.png'

const About = () => {
    return (
        <article id='about' className='container about-container'>
            <SectionHeader id='01.' title='Sobre Mim' />
            <div className='about-box'>
                <section>
                    <p
                        data-aos="fade-up"
                        data-aos-duration="1000"
                    >Olá, seja bem-vindo(a)! Meu nome é Patrick e sou apaixonado pelos desafios que a programação me proporciona. Meu interesse pelo desenvolvimento web começou em 2019, quando precisei estilizar minha loja em uma plataforma de venda online - entender que sobrescrever codigos CSS não era a melhor prática.</p>
                    <p
                        data-aos="fade-up"
                        data-aos-duration="1300"
                    >Atualmente estou cursando Análise e Desenvolvimento de Sistemas no intuito de fortalecer minhas bases e acelerar minha entrada no mercado de trabalho.</p>
                    <p
                        data-aos="fade-up"
                        data-aos-duration="1600"
                    >Aqui estão algumas tecnologias com as quais tenho trabalhado recentemente:</p>
                    <ul
                        data-aos="fade-up"
                        data-aos-duration="1800"
                    >
                        <li>JavaScript (ES6+)</li>
                        <li>React</li>
                        <li>Sass</li>
                        <li>Node.js</li>
                        <li>Git</li>
                    </ul>
                </section>
                <section>
                    <div
                        data-aos="fade-left"
                        data-aos-duration="1200"
                        className='img-container'>
                        <div className='img-overlay'></div>
                        <img src={imgAbout} alt="" />
                    </div>
                </section>
            </div>
        </article>
    )
}

export default About