import {React} from 'react';
import '../Header/header.css'
import {Carousel} from "react-bootstrap";
import c1 from '../../assets/img/carousel1.jpg'
import c2 from '../../assets/img/carousel2.jpg'
import c3 from '../../assets/img/carousel3.jpg'
import '../About/aboutCss.css'

const About = (props) => {

    return (
         <section id="aboutPage">
             <div className="header-content">
                     <Carousel id="carousel">
                         <Carousel.Item interval={1000}>
                             <img
                                 className="d-block w-100"
                                 src={c1}
                                 alt="First slide"
                             />
                             <Carousel.Caption>
                                 <h3>Travel in Macedonia</h3>
                                 <p>The country is old! The ancient kingdom of Macedon dates back to 808BC.</p>
                             </Carousel.Caption>
                         </Carousel.Item>
                         <Carousel.Item interval={500}>
                             <img
                                 className="d-block w-100"
                                 src={c2}
                                 alt="Second slide"
                             />
                             <Carousel.Caption>
                                 <h3>Travel in Macedonia</h3>
                                 <p>It has more mountains and mountain peaks than any other country in the world.</p>
                             </Carousel.Caption>
                         </Carousel.Item>
                         <Carousel.Item>
                             <img
                                 className="d-block w-100"
                                 src={c3}
                                 alt="Third slide"
                             />
                             <Carousel.Caption>
                                 <h3>Travel in Macedonia</h3>
                                 <p>Mother Theresa of Calcutta was born in Skopje.</p>
                             </Carousel.Caption>
                         </Carousel.Item>
                     </Carousel>
             </div>


             <div id="one" className="mt-5 mb-2">
                 <div className="container">
                     <div className="row mt-2">
                         <div className="col-12">
                             <p className="text-center">
                                 Macedonia (Macedonian: Македонија, Makedonija),
                                 officially Republic of Macedonia (Macedonian: Република Македонија, Republika Makedonija),
                                 is a landlocked country in the Balkans. It is bordered by Serbia and Kosovo to the north,
                                 Albania to the west, Bulgaria to the east, and Greece to the south.
                                 While easily accessible from all points abroad, and boasting all the amenities of the
                                 Western world, North Macedonia remains one of Europe’s last undiscovered countries:
                                 a natural paradise of mountains, lakes and rivers, where life moves to a different
                                 rhythm, amidst the sprawling grandeur of rich historical ruins and idyllic villages
                                 that have remained practically unchanged for centuries. The majority population is
                                 ethnic Macedonian and Orthodox but there is also a significant Albanian Muslim minority.
                                 Therefore, one can expect a wonderful mix of architectural and ethnic heritage.
                                 The country represents the Balkans in the truest sense, consisting of a fascinating mix
                                 of Greek, Albanian, Turkish, and Mediterranean influences.
                             </p>
                         </div>
                 </div>
             </div>
             </div>
             <div id="two">
                 <div className="container">
                     <div className="row justify-content-center align-items-center">
                         <div className="col-3 ">
                             <img src="https://cdn.britannica.com/08/6208-004-61460B40/Flag-North-Macedonia.jpg"
                                  className="rounded-circle"alt="flag"/>
                         </div>
                     </div>
                 </div>
             </div>

             <div className="two-three mt-5" id="section1">
                 <div className="container">
                     <h4 className="pb-3 pt-2  text-center">History</h4>
                     <hr className="h_line"/>
                     <div className="row align-items-center how-it-works d-flex">
                         <div
                             className="col-2 text-center bottom d-inline-flex justify-content-center align-items-center">
                             <div className="circle font-weight-bold">1</div>
                         </div>
                         <div className="col-6">
                             <h5>Early history</h5>
                             <p >Macedonia geographically roughly corresponds to the ancient kingdom of Paeonia,
                                 which was located immediately north of the ancient kingdom of Macedonia.
                                 Philip II of Macedon, and his son Alexander the Great, were the best macedonian emperors,
                                 they made Macedonia to be the most powerful in that period.</p>
                         </div>
                     </div>
                     <div className="row timeline">
                         <div className="col-2">
                             <div className="corner top-right"/>
                         </div>
                         <div className="col-8">
                             <hr/>
                         </div>
                         <div className="col-2">
                             <div className="corner left-bottom"/>
                         </div>
                     </div>
                     <div className="row align-items-center justify-content-end how-it-works d-flex">
                         <div className="col-6 text-right">
                             <h5>Medieval period</h5>
                             <p>Slavic tribes settled in the Balkan region including North Macedonia by the late 6th
                                 century AD. During the 580s, Byzantine
                                 literature attests to the Slavs raiding Byzantine territories in the region of Macedonia,
                                 later aided by Bulgars.</p>
                         </div>
                         <div
                             className="col-2 text-center full d-inline-flex justify-content-center align-items-center">
                             <div className="circle font-weight-bold">2</div>
                         </div>
                     </div>
                     <div className="row timeline">
                         <div className="col-2">
                             <div className="corner right-bottom"/>
                         </div>
                         <div className="col-8">
                             <hr/>
                         </div>
                         <div className="col-2">
                             <div className="corner top-left"/>
                         </div>
                     </div>
                     <div className="row align-items-center how-it-works d-flex">
                         <div className="col-2 text-center top d-inline-flex justify-content-center align-items-center">
                             <div className="circle font-weight-bold">3</div>
                         </div>
                         <div className="col-6">
                             <h5>Ottoman period</h5>
                             <p>The Kingdom of Prilep was one of the short-lived states that emerged from the collapse
                                 of the Serbian Empire in the 14th century, which was seized by the Ottomans at the end
                                 of the same century. Gradually, all of the central Balkans were conquered by the
                                 Ottoman Empire and remained under its domination for five centuries as part of the
                                 province or Eyalet of Rumelia.</p>
                         </div>
                     </div>
                     <div className="row timeline">
                         <div className="col-2">
                             <div className="corner top-right"/>
                         </div>
                         <div className="col-8">
                             <hr/>
                         </div>
                         <div className="col-2">
                             <div className="corner left-bottom"/>
                         </div>
                     </div>
                     <div className="row align-items-center justify-content-end how-it-works d-flex">
                         <div className="col-6 text-right">
                             <h5>Modern period </h5>
                             <p>Several movements whose goals were the establishment of an autonomous Macedonia,
                                 which would encompass the entire region of Macedonia, began to arise in the late 19th century
                                 the earliest of these was the Macedonian-Adrianople Revolutionary Committees,
                                 later becoming Secret Macedonian-Adrianople Revolutionary Organization. Macedonia
                                 officially celebrates 8 September 1991 as Independence day</p>
                         </div>
                         <div
                             className="col-2 text-center full d-inline-flex justify-content-center align-items-center">
                             <div className="circle font-weight-bold">4</div>
                         </div>
                     </div>
                 </div>
             </div>



             <div className="mt-5 mb-2" id="section2">
                 <div className="container">
                     <div className="row">
                         <div className="col-lg-12 text-center">
                             <h4 className="text-center">Characteristics</h4>
                             <hr className="h_line"/>
                         </div>
                     </div>
                 </div>
             <div className="container dark">
                 <div className="row">
                     <div className="col-12">
                         <div className="card">
                             <div className="card-body row no-gutters">
                                 <div className="col-4">
                                     <img className="factCardImg"
                                          src="https://www.researchgate.net/profile/Pietro-Minissale/publication/323540528/figure/fig25/AS:614263504764953@1523463240759/Map-of-the-Republic-of-Macedonia-with-location-of-Pelagonia.png"
                                          alt="fact_img"/>
                                 </div>
                                 <div className="col-8">
                                     <h4 className="factCardTitle">Climate & Terrain</h4>
                                     {/*<p className="factCardSubtitle"></p>*/}
                                     <p className="factCardDescription">
                                         Four different seasons are found in the country
                                         The range of temperatures recorded throughout the year ranges from −20 °C
                                         (−4 °F) in winter, to 40 °C (104 °F) in summer.
                                         Macedonia has warm, dry summers and autumns, and relatively stable winters with
                                         fairly cold temperatures.  Macedonia is covered by mountainous territory marked
                                         by deep basins and valleys filled with fruity goodness. There are three large
                                         lakes, Ohrid lake, Prespa lake and Dojran lake, each divided by a frontier line,
                                         and the country bisected by the Vardar River. Macedonia is blessed with
                                         outstanding natural beauty. Do not miss a trip to one of the large lakes,
                                         Pelister Mountains, Shar Planina in the West, and the fascinating rolling hills
                                         and mountains of the East with its rice fields.The Aegean basin is the largest.
                                         It covers 87% of the territory of North Macedonia,
                                         which is 22,075 square kilometres (8,523 sq mi).
                                     </p>
                                 </div>
                             </div>
                         </div>
                     </div>
                     <div className="col-12">
                         <div className="card">
                             <div className="card-body row no-gutters">
                                 <div className="col-8">
                                     <h4 className="factCardTitle">Plant & animal life</h4>
                                     {/*<p className="factCardSubtitle"></p>*/}
                                     <p className="factCardDescription">
                                         The mountainous northwestern parts of North Macedonia support large areas of
                                         forest vegetation. On the lower slopes this is principally deciduous woodland,
                                         but conifers grow at elevations as high as 6,600 feet (2,000 metres). Some areas
                                         of forest have been cleared to provide rough summer pasture. The forests support
                                         a variety of wildlife.
                                         The dry and warm summers result in an abundance
                                         of insect life, with species of grasshoppers much in evidence,
                                         along with numerous small lizards. The fauna of Macedonian forests is abundant
                                         and includes bears, wild boars, wolves, foxes, squirrels, chamois and deer.
                                         The lynx is found, although very rarely, in the mountains of western North Macedonia,
                                         while deer can be found in the region of Demir Kapija. Forest birds include the blackcap,
                                         the grouse, the black grouse, the imperial eagle and the forest owl.
                                     </p>
                                 </div>
                                 <div className="col-4">
                                     <img className="factCardImg"
                                          src="https://experiencebalkan.mk/wp-content/uploads/2017/11/tour9-960x720.jpg"
                                          alt="fact_img"/>
                                 </div>
                             </div>
                         </div>
                     </div>

                     <div className="col-12">
                         <div className="card">
                             <div className="card-body row no-gutters">
                                 <div className="col-4">
                                     <img className="factCardImg"
                                          src="https://live.staticflickr.com/5260/5389461483_ed04506ed4_b.jpg"
                                          alt="fact_img"/>
                                 </div>
                                 <div className="col-8">
                                     <h4 className="factCardTitle">Food</h4>
                                     {/*<p className="factCardSubtitle"></p>*/}
                                     <p className="factCardDescription">
                                         Breakfast is eaten around nine a.m. by workers in offices,
                                         but earlier by factory workers, and in the field in the country.
                                         Dinner is the main meal and is eaten at around two p.m. Supper is eaten
                                         later after the afternoon siesta. Meals are prepared immediately before
                                         consumption, although they may include leftovers. Hot food often is allowed
                                         to cool to room temperature. Breakfast can consist of bread and cheese,
                                         sometimes with eggs. Other meals can begin with meze (appetizers) served with
                                         rakia (fruit brandy). Bean casserole (tavche-gravche) is the national dish,
                                         and bread is considered the most basic food. In restaurants, pizza is especially
                                         popular. Hotel restaurants are popular venues for banquets,
                                         and there are many private restaurants. There are no food taboos other
                                         than those associated with religion, but folk beliefs about food abound.
                                     </p>
                                 </div>
                             </div>
                         </div>
                     </div>
                     <div className="col-12">
                         <div className="card">
                             <div className="card-body row no-gutters">
                                 <div className="col-8">
                                     <h4 className="factCardTitle">Urbanism & Architecture</h4>
                                     {/*<p className="factCardSubtitle"></p>*/}
                                     <p className="factCardDescription">
                                         The traditional culture is rural, but today more than 60 percent
                                         of the population is urban, with a quarter of the national residents
                                         living in metropolitan Skopje. Traditional architectural influences are
                                         Mediterranean, Byzantine, and Ottoman. Modern high-rise apartment blocks have
                                         a balcony, which often is used for storage and clothes drying.
                                         A traditional Muslim household has separate rooms for male and female guests,
                                         whereas a Christian house has a single room. In older urban neighborhoods,
                                         individual single-story rooms open into a central courtyard. Wealthier
                                         traditional urban houses have one or more upper stories projecting over the
                                         street. Urban areas are characterized by a historical center with an open bazaar.
                                         Many public monuments commemorate those fallen in World War II or
                                         Ilinden. Since 1991, many villages have restored or built new churches or mosques.
                                     </p>
                                 </div>
                                 <div className="col-4">
                                     <img className="factCardImg"
                                          src="https://images.adsttc.com/media/images/5107/fd6d/b3fc/4b27/2000/0116/newsletter/stringio.jpg?1416474565"
                                          alt="fact_img"/>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
             </div>

             {/*FACTS*/}
             <div id="section3" className="mt-5 mb-2">
                 <div className="container">
                     <div className="row">
                         <div className="col-lg-12 text-center">
                             <h4 className="text-center">Interesting Facts</h4>
                             <hr className="h_line"/>
                         </div>
                     </div>
                 </div>
                 <div className="container">
                     <div className="row">
                         <div className="col-lg-4 col-md-4 text-center">
                             <div className="box">
                                 <h5>Sunny days</h5>
                                 <p className="text-muted">300 Sunny days in a year, average temperature of 24.1 °C | 75.4 °F</p>
                                 <div className="percent">
                                     <svg>
                                         <circle cx="70" cy="70" r="70"/>
                                         <circle cx="70" cy="70" r="70"/>
                                     </svg>
                                     <div className="num">
                                         <h2>82<span>%</span></h2>
                                     </div>
                                 </div>
                             </div>
                         </div>
                         <div className="col-lg-4 col-md-4 text-center">
                             <div className="box">
                                 <h5>Mountains</h5>
                                 <p className="text-muted">Approximately 80% of the country consists of hills and mountains.</p>
                                 <div className="percent1" >
                                     <svg>
                                         <circle cx="70" cy="70" r="70"/>
                                         <circle cx="70" cy="70" r="70"/>
                                     </svg>
                                     <div className="num">
                                         <h2>80<span>%</span></h2>
                                     </div>
                                 </div>
                             </div>
                         </div>
                         <div className="col-lg-4 col-md-4 text-center">
                             <div className="box">
                                 <h5>Macedonians</h5>
                                 <p className="text-muted">The Macedonians are the largest ethnic group in the country,
                                     64.2% of the total population</p>
                                 <div className="percent2">
                                     <svg>
                                         <circle cx="70" cy="70" r="70"/>
                                         <circle cx="70" cy="70" r="70"/>
                                     </svg>
                                     <div className="num">
                                         <h2>64.2<span>%</span></h2>
                                     </div>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>

                 <div className="container">
                     <div className="row mt-3">
                         <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6 ">
                             <blockquote className="quote-box">
                                 <p className="quotation-mark">
                                     “
                                 </p>
                                 <p className="quote-text">
                                     Ohrid Lake is the oldest and one of the deepest lakes in Europe.
                                     It is estimated to be around 4 million years old and has 200 endemic species.
                                 </p>
                                 <div className="blog-post-actions">
                                     <p className="blog-post-bottom pull-left">
                                         Something about Macedonia
                                     </p>
                                 </div>
                             </blockquote>
                         </div>
                         <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                             <blockquote className="quote-box-2">
                                 <p className="quotation-mark">
                                     “
                                 </p>
                                 <p className="quote-text">
                                     Kokino is one of the world’s oldest observatories,
                                     as recognised by NASA and dating back to the 19th century BC.
                                 </p>
                                 <div className="blog-post-actions">
                                     <p className="blog-post-bottom pull-left">
                                         Something about Macedonia
                                     </p>
                                 </div>
                             </blockquote>
                         </div>
                         <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6 ">
                             <blockquote className="quote-box">
                                 <p className="quotation-mark">
                                     “
                                 </p>
                                 <p className="quote-text">
                                     The country is old! The ancient kingdom of Macedon dates back to
                                     808BC and Skopje is said be around 7,000 years old.
                                 </p>
                                 <div className="blog-post-actions">
                                     <p className="blog-post-bottom pull-left">
                                         Something about Macedonia
                                     </p>
                                 </div>
                             </blockquote>
                         </div>
                         <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6 ">
                             <blockquote className="quote-box-2">
                                 <p className="quotation-mark">
                                     “
                                 </p>
                                 <p className="quote-text">
                                     It has more mountains and mountain peaks than any other country in the world.
                                     Macedonia has around 34 mountain peaks.
                                 </p>
                                 <div className="blog-post-actions">
                                     <p className="blog-post-bottom pull-left">
                                         Something about Macedonia
                                     </p>
                                 </div>
                             </blockquote>
                         </div>
                     </div>
                     <div className="row mt-3">
                         <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6 ">
                             <blockquote className="quote-box">
                                 <p className="quotation-mark">
                                     “
                                 </p>
                                 <p className="quote-text">
                                     Macedonia’s capital city, Skopje has a population of just under 700,00 people.
                                     Macedonia’s total population is just over 2,000,000
                                 </p>
                                 <div className="blog-post-actions">
                                     <p className="blog-post-bottom pull-left">
                                         Something about Macedonia
                                     </p>
                                 </div>
                             </blockquote>
                         </div>
                         <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                             <blockquote className="quote-box-2">
                                 <p className="quotation-mark">
                                     “
                                 </p>
                                 <p className="quote-text">
                                     Mother Theresa of Calcutta, Catholic saint and Nobel laureate known for her missionary
                                     work with the poor in India. was born in Skopje.
                                 </p>
                                 <div className="blog-post-actions">
                                     <p className="blog-post-bottom pull-left">
                                         Something about Macedonia
                                     </p>
                                 </div>
                             </blockquote>
                         </div>
                         <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6 ">
                             <blockquote className="quote-box">
                                 <p className="quotation-mark">
                                     “
                                 </p>
                                 <p className="quote-text">
                                     It has its own currency, Macedonian Denar, and own language called Macedonian,
                                     which is spoken by around 2 million people
                                 </p>
                                 <div className="blog-post-actions">
                                     <p className="blog-post-bottom pull-left">
                                         Something about Macedonia
                                     </p>
                                 </div>
                             </blockquote>
                         </div>
                         <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6 ">
                             <blockquote className="quote-box-2">
                                 <p className="quotation-mark">
                                     “
                                 </p>
                                 <p className="quote-text">
                                     The Cyrillic alphabet, official in Macedonia, is based on the alphabet developed by
                                     two Macedonian brothers in the 9th century.
                                 </p>
                                 <div className="blog-post-actions">
                                     <p className="blog-post-bottom pull-left">
                                         Something about Macedonia
                                     </p>
                                 </div>
                             </blockquote>
                         </div>
                     </div>
                 </div>
             </div>
         </section>
    )
}
export default About;
