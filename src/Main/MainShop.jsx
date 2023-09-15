import './Main.css';
import ShopItem from './ShopItem';

//imagenes Items
import aguitaFreedomImg from '../Assets/aguitaFreedom.jpg';
import stickersFreedomImg from '../Assets/stickersFreedom.jpeg'

export const MainShop = () => {
  return (
    <main>

    <div className='item-container'>
      <ShopItem {...water}/>
      <ShopItem {...stickers}/>
    </div>
    </main>
  )
}

export default MainShop

//Objetos con datos Items shop

const water = {
  title : "Aguita Rockera",
  image : aguitaFreedomImg,
  stock : 30,
  description : "Hidratate y senti todo el rock!!!"
}

const stickers = {
  title : "Sticker facheros facheritos",
  image : stickersFreedomImg,
  stock : 100,
  description : "Perfectos para mostrar tu amor por la música intensa y vibrante. ¡Pégales en tu guitarra, tu portátil o donde quieras y deja que la buena vibra rockera te acompañe! 🤘🎸"
}