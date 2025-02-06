import { Component } from '@angular/core';
import { blogData } from '../../../shared/data/blog/blog-data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss']
})
export class BlogDetailsComponent {

  public blog = blogData;

}
