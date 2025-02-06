import { Component, Input } from '@angular/core';
import { NgbModule, NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { featuredTutorial } from '../../../shared/data/faq/faq';
import { FeathericonComponent } from '../../../shared/component/feathericon/feathericon.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-featured-tutorials',
  standalone: true,
  imports: [CommonModule,NgbModule,FeathericonComponent],
  templateUrl: './featured-tutorials.component.html',
  styleUrls: ['./featured-tutorials.component.scss']
})
export class FeaturedTutorialsComponent {

  @Input() data : featuredTutorial[];

  constructor(public config: NgbRatingConfig) {
    config.max = 5;
    config.readonly = true;
  }

}
