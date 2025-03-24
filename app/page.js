import Image from "next/image";
import { Inter } from "next/font/google";
import { NextDataPathnameNormalizer } from "next/dist/server/normalizers/request/next-data";

const inter = Inter({
  weight: '600', 
  subsets: ['latin'],
});

export default function Home() {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="container__left">
            <Image
              className="container__left__logo"
              src="/Logo.png"
              alt=""
              width={154}
              height={24}
            />
          </div>
          <div className="container__middle">
            <a className="container__middle__drct">Home</a>
            <a className="container__middle__drct">Service</a>
            <a className="container__middle__drct">Feature</a>
            <a className="container__middle__drct">Product</a>
            <a className="container__middle__drct">Testimonial</a>
            <a className="container__middle__drct">FAQ</a>
          </div>
          <div className="container__right">
            <button className="container__right__log">Login</button>
            <button className="container__right__reg">
              <span>Sign Up</span>
              <Image className="container__right__reg__load" src="/Loading.png" width={24} height={24} alt=""/></button>
          </div>
        </div>
      </header>
      <main className="main">
        <section className="slider">
          <div className="container__slider">
            <div className="container__slider__left">
              <h1 className="container__slider__left__title">
                Lessons and insights
              </h1>
              <h1 className="container__slider__left__title container__slider__green" >from 8 years</h1>
              <p className="container__slider__left__desc">
                Where to grow your bussiness as a photographer: site or social
                media
              </p>
              <button className="container__slider__left__button">
                <span>Register</span>
                <Image className="container__slider__left__load" src="/Loading.png" width={24} height={24} alt="" />
              </button>
            </div>
            <div className="container__slider__right">
              <Image
                className="container__slider__right__image"
                src="/Illustration.png"
                alt=""
                width={391}
                height={407}
              />
            </div>
            <div>
              <Image
                className="container__picker"
                src="/Dot.png"
                alt=""
                width={46}
                height={10}
              />
            </div>
          </div>
        </section>
        <section className="clients">
          <div className="container">
            <div className="container__text">
              <h2 className="container__text__title">Our Clients</h2>
              <p className="container__text__desc">We have been working witth some Fortune 500+ clients</p>
            </div>
            <div className="container__clients">
              <div className="container__clients__boxsize">
                <Image className="container__clients__item" alt="" src="/client.png" width={48} height={48}/>
                <Image className="container__clients__item" alt="" src="/client2.png" width={48} height={48}/>
                <Image className="container__clients__item" alt="" src="/client3.png" width={48} height={48}/>
                <Image className="container__clients__item" alt="" src="/client4.png" width={48} height={48}/>
                <Image className="container__clients__item" alt="" src="/client5.png" width={48} height={48}/>
                <Image className="container__clients__item" alt="" src="/client6.png" width={48} height={48}/>
                <Image className="container__clients__item" alt="" src="/client7.png" width={48} height={48}/>
              </div>
            </div>
          </div>
        </section>
        <section className="management">
          <div className="container">
            <h2 className="container__title">Manage your entire community</h2>
            <h2 className="container__title">in an single system</h2>
            <p className="container__desc">Who is Nexcent suitable for?</p>

            <div className="container__specs">
              <div className="container__specs__orgs">
                <Image className="container__specs__orgs__img" src="/membership.png" alt="" width={48} height={48}/>
                <h3 className="container__specs__orgs__title">Membership Organizations</h3>
                <p className="container__specs__orgs__desc">Our membership management software provides full automation of membership renewals and payments</p>
              </div>

              <div className="container__specs__nat">
                <Image className="container__specs__nat__img" src="/national.png" alt="" width={48} height={48}/>
                <h3 className="container__specs__nat__title">National Associations</h3>
                <p className="container__specs__nat__desc">Our membership management software provides full automation of membership renewals and payments</p>
              </div>

              <div className="container__specs__clubs">
                <Image className="container__specs__clubs__img" src="/clubs.png" alt="" width={48} height={48}/>
                <h3 className="container__specs__clubs__title">Clubs And Groups</h3>
                <p className="container__specs__clubs__desc">Our membership management software provides full automation of membership renewals and payments</p>
              </div>
            </div>
          </div>
        </section>
        <section className="learn">
          <div className="container">
            <div className="container__img">
              <Image className="container__img__image" src="/learnimage.png" alt="" width={441} height={329}/>
            </div>
            <div className="container__info">
              <h2 className="container__info__title">The unseen of spending three years at Pixelgrade</h2>
              <p className="container__info__desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
              <button className="container__info__button">
                <span>Learn More</span>
                <Image className="container__info__button__load" src="/Loading.png" width={24} height={24} alt="" />
                </button>
            </div>
          </div>
        </section>
        <section className="membership">
          <div className="container">
            <div className="container__left">
              <h2 className="container__left__title">Helping a local <p className="container__left__title__green">bussiness reinvent itself</p></h2>
              <p className="container__left__desc">We reached here with our hard work and dedicaiton</p>              
            </div>
            <div className="container__right">
              <div className="container__right__members">
                <div className="container__right__members__left">
                  <Image className="container__right__members__left__image" src="/membersIcon.png" alt="" width={48} height={48}/>
                </div>
                <div className="container__right__members__right">
                  <h3 className="container__right__members__right__data">2,245,341</h3>
                  <p className="container__right__members__right__desc">Members</p>
                </div>
              </div>

              <div className="container__right__clubs">
                <div className="container__right__clubs__left">
                  <Image className="container__right__clubs__left__image" src="/clubsIcon.png" alt="" width={48} height={48}/>
                </div>
                <div className="container__right__clubs__right">
                  <h3 className="container__right__clubs__right__data">46,328</h3>
                  <p className="container__right__clubs__right__desc">Clubs</p>
                </div>
              </div>

              <div className="container__right__events">
                <div className="container__right__events__left">
                 <Image className="container__right__events__left__image" src="/eventsIcon.png" alt="" width={48} height={48}/>
                </div>
                <div className="container__right__events__right">
                  <h3 className="container__right__events__right__data">828,867</h3>
                  <p className="container__right__events__right__desc">Event Booking</p>
                </div>
              </div>

              <div className="container__right__payments">
                <div className="container__right__payments__left">
                  <Image className="container__right__payments__left__image" src="/paymentsIcon.png" alt="" width={48} height={48}/>
                </div>
                <div className="container__right__payments__right">
                  <h3 className="container__right__payments__right__data">1,926,436</h3>
                  <p className="container__right__payments__right__desc">Payments</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="desfooter">
          <div className="container">
            <div className="container__left">
              <Image className="container__left__img" src="/desfooter.png" alt="" width={441} height={433}/>
            </div>
            <div className="container__right">
              <h2 className="container__right__title">How to design your site footer like we did</h2>
              <p className="container__right__desc">Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</p>
              <button className="container__right__button">
                <span>Learn More</span>
                <Image className="container__right__button__load" src="/Loading.png" width={24} height={24} alt="" />
              </button>
            </div>
          </div>
        </section>
        <section className="smith">
          <div className="container">
            <div className="container__left">
              <Image className="container__left__img" src="/timsmith.png" alt="" width={326} height={326}/>
            </div>
            <div className="container__right">
              <p className="container__right__desc">Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
              <h4 className="container__right__tsmith">Tim Smith</h4>
              <p className="container__right__tsmith2">British Dragon Boat Racing Association</p>
              
              <div className="container__right__brands">
                <Image className="container__right__brands__item" src="/client.png" alt="" width={48} height={48}/>
                <Image className="container__right__brands__item" src="/client2.png" alt="" width={48} height={48}/>
                <Image className="container__right__brands__item" src="/client3.png" alt="" width={48} height={48}/>
                <Image className="container__right__brands__item" src="/client4.png" alt="" width={48} height={48}/>
                <Image className="container__right__brands__item" src="/client5.png" alt="" width={48} height={48}/>
                <Image className="container__right__brands__item" src="/client6.png" alt="" width={48} height={48}/>
                <a className="container__right__brands__meet">Meet all customers<Image className="container__right__brands__meet__img" src="/Right.png" alt="" width={24} height={24}/></a>
              </div>
            </div>
          </div>
        </section>
        <section className="marketing">
          <div className="container">
            <div className="container__top">
              <h2 className="container__top__title">Caring is the new marketing</h2>
              <p className="container__top__desc">The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who`s joining the community, read about how our community are increasing their membership income and lot`s more.​</p>
            </div>
            <div className="container__bottom">
              <div className="container__bottom__cart">
                  <Image className="container__bottom__cart__image" src="/cart1.png" alt="" width={368} height={286} />
                  <div className="container__bottom__cart__box">
                    <h4 className="container__bottom__cart__box__desc">Creating Streamlined Safeguarding Processes with OneRen</h4>
                    <a className="container__bottom__cart__box__drct">Readmore<Image className="container__right__brands__meet__img" src="/Right.png" alt="" width={24} height={24}/></a>
                  </div>
              </div>

              <div className="container__bottom__cart">
                  <Image className="container__bottom__cart__image" src="/cart2.png" alt="" width={368} height={286} />
                  <div className="container__bottom__cart__box">
                    <h4 className="container__bottom__cart__box__desc">What are your safeguarding responsibilities and how can you manage them?</h4>
                    <a className="container__bottom__cart__box__drct">Readmore<Image className="container__right__brands__meet__img" src="/Right.png" alt="" width={24} height={24}/></a>
                  </div>
              </div>

              <div className="container__bottom__cart">
                  <Image className="container__bottom__cart__image" src="/cart3.png" alt="" width={368} height={286} />
                  <div className="container__bottom__cart__box">
                    <h4 className="container__bottom__cart__box__desc">Revamping the Membership Model with Triathlon Australia</h4>
                    <a className="container__bottom__cart__box__drct">Readmore<Image className="container__right__brands__meet__img" src="/Right.png" alt="" width={24} height={24}/></a>
                  </div>
              </div>
            </div>
          </div>
        </section>
        <section className="endpage">
          <div className="container">
            <h1 className="container__text">Pellentesque suscipit fringilla libero eu.</h1>
            <button className="container__button">
              <span>Get a Demo</span>
              <Image className="container__button__img" src="/Right2.png" alt="" width={16} height={16}></Image>
              <Image className="container__button__load" src="/Loading.png" width={24} height={24} alt="" /></button>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="container">
          <div className="container__left">
            <Image className="container__left__img" src="/footerlogo.png" alt="" width={191} height={30} />
            <div className="container__left__texts">
              <p className="container__left__desc">Copyright © 2020 Nexcent ltd.</p>
              <p className="container__left__desc">All rights deserved</p>
            </div>
            <div className="container__left__direction">
              <a className="container__left__direction__drct"><Image className="container__left__direction__drct__img" src="/social1.png" alt="" width={32} height={32}/></a>
              <a className="container__left__direction__drct"><Image className="container__left__direction__drct__img" src="/social2.png" alt="" width={32} height={32}/></a>
              <a className="container__left__direction__drct"><Image className="container__left__direction__drct__img" src="/social3.png" alt="" width={32} height={32}/></a>
              <a className="container__left__direction__drct"><Image className="container__left__direction__drct__img" src="/social4.png" alt="" width={32} height={32}/></a>
            </div>
          </div>
          <div className="container__right">
            <div className="container__right__company">
              <h4 className="container__right__company__title">Company</h4>
              <ul>
                <li><a className="container__right__company__drct">About us</a></li>
                <li><a className="container__right__company__drct">Blog</a></li>
                <li><a className="container__right__company__drct">Contact us</a></li>
                <li><a className="container__right__company__drct">Pricing</a></li>
                <li><a className="container__right__company__drct">Testimonials</a></li>
              </ul>
            </div>
            <div className="container__right__support">
              <h4 className="container__right__support__title">Support</h4>
              <ul>
                <li><a className="container__right__support__drct">Help Center</a></li>
                <li><a className="container__right__support__drct">Terms of service</a></li>
                <li><a className="container__right__support__drct">Legal</a></li>
                <li><a className="container__right__support__drct">Privacy policy</a></li>
                <li><a className="container__right__support__drct">Status</a></li>
              </ul>
            </div>
            <div className="container__right__stay">
              <h4 className="container__right__stay__title">Stay up to date</h4>
              <input className="container__right__stay__input" type="text" placeholder="Your email address"/>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
