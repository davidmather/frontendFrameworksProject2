import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HeaderComponent} from './header/header.component';
import {NavsidebarComponent} from './navsidebar/navsidebar.component';
import {PortfolioComponent} from './portfolio/portfolio.component';
import {FooterComponent} from './footer/footer.component';
import {AboutComponent} from './about/about.component';
import {ServicesComponent} from './services/services.component';
import {ContactComponent} from './contact/contact.component';
import {BlogComponent} from './blog/blog.component';
import {QuoteComponent} from './quote/quote.component';
import {AdvertComponent} from './adverts/advert.component';
import {AccordionComponent} from './accordion/accordion.component';
import {AccordionContainerComponent} from './accordionContainer/accordionContainer.component';
import {CarouselComponent} from './carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavsidebarComponent,
    PortfolioComponent,
    AboutComponent,
    ServicesComponent,
    ContactComponent,
    BlogComponent,
    QuoteComponent,
    AdvertComponent,
    AccordionComponent,
    AccordionContainerComponent,
    CarouselComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
