import TopPage from "../layout/TopPage";
import IconsGrid from "../layout/IconsGrid";
import styles from "./About.module.css";

function About() {
  return (
    <section className={styles.about_container}>
      <TopPage/>
      <div className={styles.about_content}>
        <div className={styles.bio}>
          <h3>
            Bio <span>:)</span>
          </h3>
          <div className={styles.bio_content}>
            <p>
              Sou <span className={styles.bio_destaque}>Tácio Würdig</span>, natural de Pelotas, RS, 
              e estudante de Análise e Desenvolvimento de Sistemas. 
              Tenho experiência em desenvolvimento com Java, Spring Boot e <span className={styles.bio_destaque}>React</span>, 
              e minha formação é enriquecida por mais de uma década de atuação na área musical, 
              onde me graduei em Música e Produção Musical. Durante esse período, trabalhei na
              gravação , produção de diversos artistas e <span className={styles.bio_destaque}>gestão de projetos</span> no âmbito artistico e administrativo.
             
              Minha trajetória une duas
              paixões: <span className={styles.bio_destaque}>tecnologia</span> e música. Essa combinação me permite aliar <span className={styles.bio_destaque}>criatividade</span> e lógica para resolver problemas de forma inovadora,
              seja no desenvolvimento de projetos tecnológicos ou na produção
              artística. Estou sempre em busca de oportunidades que desafiem
              minhas habilidades técnicas e criativas, contribuindo para a criação
              de <span className={styles.bio_destaque}>soluções</span> que fazem a diferença.
            </p>
          </div>
        </div>
        <div className={styles.academic}>
          <h3>
            <i class="fa-solid fa-graduation-cap"></i>Formação
          </h3>
          <div className={styles.course_container}>
              <div>
                <h5>2024 - Cursando</h5>
                <h4>Técnologo em </h4>
                <h4>Análise e Desenvolvimento de Sistemas</h4>
                <p>Centro Universitário UniSenac - Pelotas/RS</p>
              </div>
              <div>
                <h5>2017 - 2023</h5>
                <h4>Bacharelado em Música - Música Popular</h4>
                <p>Universidade Federal de Pelotas - Pelotas/RS</p>
              </div>
              <div>
                <p>2010 - 2013</p>
                <h4>Tecnólogo em Produção Fonográfica</h4>
                <p>Universidade Católica de Pelotas - Pelotas/RS</p>
              </div>
          </div>
        </div>
        <div className={styles.technologies}>
          <h3>
            <i class="fa-solid fa-code"></i>Tecnologias
          </h3>
          <IconsGrid />
        </div>
      </div>
    </section>
  );
}

export default About;
