import { Outlet, Link } from "react-router-dom";
import './Home.css'

const Home = () => {
    return (

        <section>
                    <div className='home'>
            <div className='welcome-text'>
                <h1>PUB RIO</h1>
                <p>
                    Um espaço aconchegante, com um chopp geladinho e uns petiscos para você beliscar!
                </p>

                <li>
                    <Link to="/contact">Venha Conhecer</Link>
                </li>
            </div>
        </div>



        <div className="features">
        <h1 class="heading">AS MAIS PEDIDAS</h1>
        <p>As bebidas mais pedidas em nosso pub on-line. Entregamos em sua casa!</p>

        <div class="box-container">
            <div class="box">
            <img src="https://th.bing.com/th/id/R.0367a3bd1778e96fc65fccdc757675ee?rik=WSe35xG0PxUGyQ&pid=ImgRaw&r=0"></img>
                <h3>Stella Artois</h3>
                <p>R$ 9,00</p>
                <a href="">Compre agora!</a>
            </div>
            <div class="box">
                <img src="https://cdn.awsli.com.br/600x1000/1369/1369432/produto/54522242/5caca1a66e.jpg"></img>
                <h3>Heineken</h3>
                <p>R$ 8,00</p>
                <a href="">Compre agora!</a>
            </div>
            <div class="box">
            <img src="https://liquorworld.com.np/wp-content/uploads/2021/03/Budweiser-650ML.jpg"></img>
                <h3>Budweiser</h3>
                <p>R$ 10,00</p>
                <a href="">Compre agora!</a>
            </div>
        </div>
        </div>

        </section>

    )

  };
  
  export default Home;