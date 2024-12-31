import styles from './Contact.module.css'
import TopPage from '../layout/TopPage'
import Flag from 'react-world-flags'


function Contact(){
    return (
     <section className={styles.contact_container}>
        <TopPage/>
        <div className={styles.contact_content}>
            <div className={styles.contact_text}>
                <h3><i class="fa-solid fa-inbox"></i>Vamos Conversar?</h3>
                <p>Tem uma grande ideia ou uma marca para desenvolver e precisa de ajuda?  Entre em contato, eu adoraria saber mais sobre o seu projeto e oferecer meu suporte.</p>
                <div>
                    <h3><i class="fa-solid fa-envelope"></i>E-mail</h3>
                    <p>wurdigtm@outlook.com</p>
                </div>
                <div>
                    <h3><i class="fa-brands fa-whatsapp"></i>Telefone</h3>
                    <p><Flag code='BR' className={styles.flag}/> +55 53 999771729</p>
                </div>
            </div>
            <div className={styles.form_container}>
                <h4><i class="fa-regular fa-comments"></i>Entre em contato</h4>
                {/* Formulário de E-mail */}
                <form className={styles.form_content}>
                    <div>
                        <label>Nome</label>
                        <input type="text" placeholder='Nome' />
                    </div>
                    <div>
                        <label>Email</label>
                        <input type="text" placeholder='E-mail' />
                    </div>
                    <textarea placeholder='Digite sua mensagem'></textarea>
                    <div className={styles.btn_case}>
                        <button type='submit' className={styles.btnSubmit}>Enviar</button>
                        <button type='reset' className={styles.btnReset}>Limpar</button>
                    </div>
                </form>
            </div>
        </div>
     </section> 
    )
}

export default Contact