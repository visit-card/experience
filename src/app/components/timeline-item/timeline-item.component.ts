import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from "@angular/core";

import { ProjectDescription } from "../../types/ProjectDescription";

@Component({
  selector: 'timeline-item',
  styleUrls: ['./timeline-item.component.scss'],
  templateUrl: './timeline-item.component.html'
})
export class TimelineItemComponent implements OnInit, AfterViewInit {

  @Input()
  isExpanded: boolean = false

  @Input()
  date!: string

  @Input()
  companyName!: string

  @Input()
  projects!: ProjectDescription[]

  @ViewChild('body', { read: ElementRef })
  body!: ElementRef;

  constructor(
  ) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.animate()
  }

  onClick = () => {
    this.isExpanded = !this.isExpanded

    this.animate()
  }

  private animate = () => {
    const descriptions: HTMLCollection = this.body.nativeElement.getElementsByClassName("timeline__body-description")
    if (this.isExpanded) {
      this.body.nativeElement.style.maxHeight = "900px"
      let index = 0;
      for(let description of descriptions) {
        description.setAttribute("style", `opacity: 1; visibility: visible; transition-delay: ${index * 0.4}s;`)
        index++;
      }
    } else {
      this.body.nativeElement.style.maxHeight = "0"
      let index = 1;
      for(let description of descriptions) {
        description.setAttribute("style", `opacity: 0; visibility: hidden; transition-delay: ${(descriptions.length - index) * 0.4}s;`)
        index++;
      }
    }
  }
}
