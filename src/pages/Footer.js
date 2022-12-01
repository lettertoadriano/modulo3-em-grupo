import './Footer.css'

const Contact = () => {
    return (

        <footer className='footer'>
        <div className='container-footer'>
            <div className='row-footer'>
                <div className='footer-col'>
                    <h4>Informações</h4>
                    <ul>
                        <li><a href="#"></a>Sobre</li>
                        <li><a href="#"></a>Bebidas</li>
                        <li><a href="#"></a>Petiscos</li>
                        <li><a href="#"></a>Contatos</li>
                    </ul>
                </div>
                <div className='footer-col'>
                    <h4>Mais Pedidos</h4>
                    <ul>
                        <li><a></a>Heineken</li>
                        <li><a></a>Stella Artois</li>
                        <li><a></a>Vodka</li>
                        <li><a></a>Whisky</li>
                    </ul>
                </div>
                <div className='footer-col'>
                    <h4>Outros</h4>
                    <ul>
                        <li><a></a>Política de Privacidade</li>
                        <li><a></a>Política de Reembolso</li>
                        <li><a></a>Política de Cookies</li>
                        <li><a></a>Termos e Condições</li>
                    </ul>
                </div>
                <div className='footer-col'>
                    <h4>Newsletter e Cupons</h4>
                    <input type="email" placeholder='Digite seu email...' className='email'></input>
                    <button className='botaofinal'>Registrar email</button>
                </div>
            </div>
        </div>
    </footer>

    )
  };
  
  export default Contact;