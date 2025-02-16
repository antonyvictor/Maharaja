import './menu.css'
import icon from './images/icon.png';
import m1 from './images/m1.jpg';
import m2 from './images/m2.jpg';
import m3 from './images/m3.jpg';
import m4 from './images/m4.jpg';
import m5 from './images/m5.jpg';
import m6 from './images/m6.jpg';
import m7 from './images/m7.jpg';
import m8 from './images/m8.jpg';
import m9 from './images/m9.jpg';
import m10 from './images/m10.jpg';
function menu(){
    return(
        <>
        <div className='me1'>
        <h1 className='me2'>Our Menu</h1>
        <img className='icon' src ={icon}/>
        <div className='me3'>
        <img className='me4' src ={m1}/>
        <h3 className='me5'>ABU GATTA</h3>
        <p className='me6'>Abu Gatta is prepared by highly experienced professionals with fresh ingredients such as milk,
             milk solid, butter, Stabilizers and emulsifiers. Our rich and refreshing ice creams are with numerous eye catching textures.
              Abu gatta is deliciously creamy and one of a kind.</p>
              <button className="me7" type="button">Book Order</button>
              
        </div>
        <br/>
        <div className='me3'>
        <img className='me4' src ={m2}/>
        <h3 className='me5'>CUSTARD APPLE</h3>
        <p className='me6'>Ice cream is nice but fruit and ice cream is one level up. Sitaphal (Custard Apple) is a lovely, exotic fruit that is common in India. We love the grainy texture it brings to the ice cream. The real natural pulp makes it away in between. Sitaphal is a must try.</p>
              <button className="me7" type="button">Book Order</button>
              
        </div>
        <br/>
        <div className='me3'>
        <img className='me4' src ={m3}/>
        <h3 className='me5'>CHIKU</h3>
        <p className='me6'>Chiku being our favourite fruit and ice cream being our favorite dessert, this combination is surely going to satisfy our taste buds.</p>
              <button className="me7" type="button">Book Order</button>
              
        </div>
        <br/>
        <div className='me3'>
        <img className='me4' src ={m4}/>
        <h3 className='me5'>PAAN</h3>
        <p className='me6'>We like to have paan as a refreshment post dinner. Purely out of love, we have introduced paan flavored ice cream too. With similar ingredients included in the ice cream you will experience the exact taste of betel leaves too.</p>
              <button className="me7" type="button">Book Order</button>
              
        </div>
        <br/>
        <div className='me3'>
        <img className='me4' src ={m5}/>
        <h3 className='me5'>CHOCO CHIPS</h3>
        <p className='me6'>Chocolate, long considered the food of love, choco chip ice cream is a perfect combination of pure, sweet cream, fine cocoa and choco chips. Truly a decadent ice cream experience.</p>
              <button className="me7" type="button">Book Order</button>
              
        </div>
        <br/>
        <div className='me3'>
        <img className='me4' src ={m6}/>
        <h3 className='me5'>CHOCO VANILLA</h3>
        <p className='me6'>Vanilla being the top selling ice cream worldwide. We planned to bring together both chocolate and vanilla. A creamy delight of both vanilla and chocolate will refresh you thoroughly.</p>
              <button className="me7" type="button">Book Order</button>
              
        </div>
        <br/>
        <div className='me3'>
        <img className='me4' src ={m7}/>
        <h3 className='me5'>BUTTER SCOTCH</h3>
        <p className='me6'>For when you need just a swirl of classic butterscotch, we have got premium, rich and creamy butterscotch swirl just for you.</p>
              <button className="me7" type="button">Book Order</button>
              
              
        </div>
        <br/>
        <div className='me3'>
        <img className='me4' src ={m8}/>
        <h3 className='me5'>Gulkhand anjeer</h3>
        <p className='me6'>Rose petal jam or gulkhand is a sweet preservative that we believe originated from north India. it is very commonly used as a mouth freshener wrapped in paan. we stirred it into an ice cream and “ magic happend “ it turned into one of the most addictive ice creams.</p>
              <button className="me7" type="button">Book Order</button>
              
        </div>
        <br/>
        <div className='me3'>
        <img className='me4' src ={m9}/>
        <h3 className='me5'>CASSATA</h3>
        <p className='me6'>Cassata is an Italian version of ice cream in which different flavors of ice cream are arranged in layers.</p>
              <button className="me7" type="button">Book Order</button>
              
        </div>
        <br/>
        <div className='me3'>
        <img className='me4' src ={m10}/>
        <h3 className='me5'>HONEY NUT</h3>
        <p className='me6'>you will surely love this one. We have added honey coated almond pieces to the ice cream to make it even yummier.</p>
              <button className="me7" type="button">Book Order</button>
   
        </div>
        </div>
        
        
        </>
    )
}
export default menu;